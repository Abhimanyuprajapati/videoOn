import { axiosInstance } from "./axios";

interface SignUpPayload {
  fullName: string;
  email: string;
  password: string;
}

export const SignUpAPI = async (data: SignUpPayload): Promise<any> => {
  const response = await axiosInstance.post("/auth/signup", data);
  return response;
};
