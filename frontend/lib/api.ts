import { AxiosResponse } from "axios";
import API from "./axios-client";

type loginType = { email: string; password: string };
type registerType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type verifyEmailType = { code: string };
type forgotPasswordType = { email: string };
type resetPasswordType = { password: string; verificationCode: string };
type verifyMFAType = { code: string; secretKey: string };
type mfaLoginType = { code: string; email: string };
type SessionType = {
  _id: string;
  userId: string;
  userAgent: string;
  createdAt: string;
  expiresAt: string;
  isCurrent: boolean;
};

type SessionResponseType = {
  message: string;
  sessions: SessionType[];
};

export const loginMutationFn = async (data: loginType) =>
  await API.post(`/auth/login`, data);

export const registerMutationFn = async (data: registerType) =>
  await API.post(`/auth/register`, data);

export const verifyEmailMutationFn = async (data: verifyEmailType) =>
  await API.post(`/auth/verify/email`, data);

export const forgotPasswordMutationFn = async (data: forgotPasswordType) =>
  await API.post(`/auth/password/forgot`, data);

export const resetPasswordMutationFn = async (data: resetPasswordType) =>
  await API.post(`/auth/password/reset`, data);

export const verifyMFAMutationFn = async (data: verifyMFAType) =>
  await API.post(`/mfa/verify`, data);

export const verifyMFALoginMutationFn = async (data: mfaLoginType) =>
  await API.post(`/mfa/verify-login`, data);

export const authUserQueryFn = async () => await API.get(`/user/current-user`);

export const mfaSetupQueryFn = async () => {
  const response: AxiosResponse = await API.get(`/mfa/setup`);
  return response.data;
};

export const sessionsQueryFn = async () => {
  const data: any = await API.get(`/session/all`);
  const response: SessionResponseType = data || [];
  return response;
};

export const sessionDelMutationFn = async (id: string) =>
  await API.delete(`/session/${id}`);
