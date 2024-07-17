import { parseCookies } from "nookies";
import { Navigate } from 'react-router-dom';
import nookies from 'nookies'

export const GetUserToken = () => {
    const cookies = parseCookies();
    const token = cookies.accessToken;
    return token;
}
