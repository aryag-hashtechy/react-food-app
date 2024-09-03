import { requestInstance } from "./Interceptor";
import nookies from "nookies";

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

  switch (config?.method) {
    case "GET":
      try {
        const res = await requestInstance.get(config?.apiURL, {
          params: config?.params || "",
          headers: config?.headers || {},
        });

        if (res && res.status === 200) {
          return (response = res);
        }
      } catch (err) {
        if (
          err?.response?.status === 401 &&
          err?.response?.statusText === "Unauthorized"
        ) {
          nookies.destroy({}, "accessToken");
          data.navigate ? data.navigate("/auth/login") : <></>;
        }
        return Promise.reject(err);
      }
      break;

    case "POST":
      try {
        const res = await requestInstance.post(
          config?.apiURL,
          config?.bodyData,
          {
            params: config?.params || "",
            headers: config?.headers || {},
          }
        );
        if (res && res.status === 200) {
          return (response = res);
        }
      } catch (err) {
        if (
          err?.response?.status === 401 &&
          err?.response?.statusText === "Unauthorized"
        ) {
          nookies.destroy({}, "accessToken");
          data.navigate ? data.navigate("/auth/login") : <></>;
        }
        return Promise.reject(err);
      }
      break;

    case "PUT":
      try {
        const res = await requestInstance.put(
          config?.apiURL,
          config?.bodyData,
          {
            params: config?.params || "",
            headers: config?.headers || {},
          }
        );
        if (res && res.status === 200) {
          return (response = res);
        }
      } catch (err) {
        if (
          err?.response?.status === 401 &&
          err?.response?.statusText === "Unauthorized"
        ) {
          nookies.destroy({}, "accessToken");
          data.navigate ? data.navigate("/auth/login") : <></>;
        }
        return Promise.reject(err);
      }
      break;

    case "PATCH":
      try {
        const res = await requestInstance.patch(
          config?.apiURL,
          config?.bodyData,
          {
            params: config?.params || "",
            headers: config?.headers || {},
          }
        );
        if (res && res.status === 200) {
          return (response = res);
        }
      } catch (err) {
        if (
          err?.response?.status === 401 &&
          err?.response?.statusText === "Unauthorized"
        ) {
          nookies.destroy({}, "accessToken");
          data.navigate ? data.navigate("/auth/login") : <></>;
        }
        return Promise.reject(err);
      }
      break;

    case "DELETE":
      try {
        const res = await requestInstance.delete(config?.apiURL, {
          params: config?.params || "",
          headers: config?.headers || {},
        });

        if (res && res.status === 200) {
          return (response = res);
        }
      } catch (err) {
        if (
          err?.response?.status === 401 &&
          err?.response?.statusText === "Unauthorized"
        ) {
          nookies.destroy({}, "accessToken");
          data.navigate ? data.navigate("/auth/login") : <></>;
        }
        return Promise.reject(err);
      }
      break;

      default: 
      //  Throw an error saying invalid request method
       break;
  }
};

export default axiosProvider;
