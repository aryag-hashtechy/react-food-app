import axios from "axios";
import { destroyCookie } from "nookies";
import { Router } from "react-router-dom";
import { requestInstance } from "./interceptor";

const axiosProvider = async (data) => {
  let response = null;
  let config = {
    ...data,
    headers: {
      ...data.headers,
    },
  };

  let apiURL = `${process.env.REACT_APP_BASE_URL}${config.endpoint}`;

  if (config && config.queryString) {
    apiURL += config.queryString;
  }

  // if path login / signup / dashboard to ===> token ?

  // Add validation for config....
  switch (config?.method) {
    case "GET":
      try {
        const res = await requestInstance.get(config.apiURL, {
          params: config?.params || "",
          headers: config?.headers || {},
        });

        if (res && res?.status === 200) {
          return (response = res);

          // } else if (res.status === 401) {
          //   destroyCookie("accesstoken");
          // redirect to login
        }
      } catch (error) {
        return Promise.reject(error);
      }
      break;

    case "POST":
      try {
        console.log("inpostttt ", config?.apiURL, config?.bodyData);
        const res = await requestInstance.post(
          config?.endpoint,
          config?.bodyData,
          {
            params: config?.params || "",
            headers: config?.headers || "",
          }
        );
        if (res && res?.status === 200) {
          return (response = res);
        }
      } catch (error) {
        return Promise.reject(error);
      }
      break;

    case "PUT":
      try {
        const res = await requestInstance.put(
          config?.apiURL,
          config?.bodyData,
          {
            params: config?.params || "",
            headers: config?.headers || "",
          }
        );
        if (res && res?.status === 200) {
          return (response = res);
        }
      } catch (error) {
        return Promise.reject(error);
      }
      break;

    case "DELETE":
      try {
        const res = await requestInstance.delete(config?.apiURL, {
          params: config?.params || "",
          headers: config?.headers || "",
        });
        if (res && res?.status === 200) {
          return (response = res);
        }
      } catch (error) {
        return Promise.reject(error);
      }
      break;
  }
  return response;
};

export default axiosProvider;
