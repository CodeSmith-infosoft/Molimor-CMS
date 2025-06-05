export const formatOptions: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
};

export const formatted = (date: string) => {
  const formateDate = new Date(date)

  return formateDate.toLocaleDateString("en-US", formatOptions);
};

export const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export async function getImageAsBlob(url: string) {
  const response = await fetch(url);
  return await response.blob();
}

export const getParamString = (object: any) => {
  const params = new URLSearchParams();

  Object.entries(object).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      //@ts-ignore
      params.append(key, value);
    }
  });

  return params.toString();
};

export function debounce(func: any, delay: number) {
  let timeout: any;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      //@ts-ignore
      func.apply(this, args);
    }, delay);
  };
}

export function formatUserAddress(userData: {
  address?: string;
  state?: string;
  country?: string;
  pincode?: string;
}): string {
  if (!userData) return "";
  return [userData.address, userData.state, userData.country, userData.pincode]
    .filter(Boolean)
    .join(", ");
}

export function calculateAgeDetails(pastDateString: string) {
  const pastDate = new Date(pastDateString);
  const now = new Date();

  let years = now.getFullYear() - pastDate.getFullYear();
  let months = now.getMonth() - pastDate.getMonth();
  let days = now.getDate() - pastDate.getDate();

  // Adjust if current month/day is before the past month/day
  if (days < 0) {
    months -= 1;
    // Get number of days in the previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return years
    ? years + " years"
    : months
    ? months + " months"
    : days + " days";
}
