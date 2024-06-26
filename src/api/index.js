import { getItemInLocalStorage } from "../utils/localStorage";
import axiosInstance from "./axiosInstance";

const token = getItemInLocalStorage("TOKEN");

export const login = async (data) => axiosInstance.post("/login.json", data);
export const getSiteAsset = async () =>
  axiosInstance.get("/site_assets.json", {
    params: {
      token: token,
    },
  });
export const getSiteAssetDetails = async (id) =>
  axiosInstance.get(`/site_assets/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postSiteAsset = async (id) =>
  axiosInstance.get(`/site_assets.json`, {
    params: {
      token: token,
    },
  });
export const getComplaints = async () =>
  axiosInstance.get(`/pms/complaints.json`, {
    params: {
      token: token,
    },
  });
export const getComplaintsDetails = async (id) =>
  axiosInstance.get(`pms/complaints/${id}.json`, {
    params: {
      token: token,
    },
  });
export const postComplaintsDetails = async (data) =>
  axiosInstance.post(`/pms/complaints.json`, {
    params: {
      token: token,
    },
  }, data,);
