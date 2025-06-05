import api from "..";

export async function getAllUsers() {
  try {
    const response = api.get(`/user/getAllUsers`);

    return (await response).data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
}

export async function getUserById(id: string) {
  try {
    const response = api.get(`/user/getUserById/${id}`);

    return (await response).data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
}

export async function inActiveUserById(id: string, isActive: boolean) {
  try {
    const response = api.put(`/user/inActiveUserById/${id}`,{isActive});

    return (await response).data;
  } catch (error: any) {
    console.log(error);
    return error?.response?.data;
  }
}