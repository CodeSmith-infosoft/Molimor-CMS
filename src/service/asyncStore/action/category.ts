import { categoryPayloadType } from "@/types/categoryTypes";
import api from "..";
import { getParamString } from "@/utils/helper";

export async function getCategoryList(payload: categoryPayloadType) {
  try {
    const response = api.get(
      `/category/getCategoryList?${getParamString(payload)}`
    );

    return (await response).data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getActiveSubCategoryList() {
  try {
    const response = api.get(`/subCategory/getActiveSubCategoryList`);

    return (await response).data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function inActiveCategory(id: string, isActive: boolean) {
  try {
    const response = api.put(`/category/admin/inActiveCategory/${id}`, {
      isActive,
    });

    return (await response).data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function addCategory(formData: FormData) {
  try {
    const response = api.post(`/category/admin/addCategory`, formData);

    return (await response).data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function updateCategory(formData: FormData, id: string) {
  try {
    const response = api.put(`/category/admin/updateCategory/${id}`, formData);

    return (await response).data;
  } catch (error) {
    console.log(error);
    return error;
  }
}