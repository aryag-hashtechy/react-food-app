import { parseCookies } from "nookies";

export const GetUserToken = () => {
  const cookies = parseCookies();
  const token = cookies.accessToken;
  return token;
};
