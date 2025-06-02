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
