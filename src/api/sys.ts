import request from "@/utils/request";

export const login = (data: { userName: string; password: string }) => {
  return request.post("/sys/login", {
    userName: data.userName,
    password: data.password,
  });
};
