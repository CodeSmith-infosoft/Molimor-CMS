import { getParamString } from "@/utils/helper";
import api from "..";
import { dashboardPayloadType } from "@/types/dashboardTypes";

export async function getHomePageData(payload: dashboardPayloadType) {
  try {
    const response = api.get(
      `/home/admin/getHomePage?${getParamString(payload)}`
    );

    return (await response).data;
  } catch (error) {
    console.log(error);
    return error;
  }
}