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
