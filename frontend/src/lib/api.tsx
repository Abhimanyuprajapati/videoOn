import { axiosInstance } from "./axios";

interface SignUpPayload {
  fullName: string;
  email: string;
  password: string;
}

interface SignInPayload {
  email: string;
  password: string;
}

export const SignUpAPI = async (data: SignUpPayload): Promise<any> => {
  const response = await axiosInstance.post("/auth/signup", data);
  return response;
};


export const SignInAPI = async (data: SignInPayload): Promise<any> => {
  const response = await axiosInstance.post("/auth/login", data);
  return response;
};
