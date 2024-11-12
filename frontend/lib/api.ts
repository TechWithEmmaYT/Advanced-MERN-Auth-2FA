import API from "./axios-client";

type loginType = { email: string; password: string };
type registerType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const loginMutationFn = async (data: loginType) =>
  API.post(`/auth/login`, data);

export const registerMutationFn = async (data: registerType) =>
  API.post(`/auth/register`, data);
