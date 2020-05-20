import axios from "axios";

axios.interceptors.request.use((request) => {
  request.headers.common.Authorization =
    "Basic RURFQ0NFMTQzOTExNDMzQ0EzQTYyNjAyQzc4RTIzNTE6NDFDMEI2NzkxN0Q5NEQ1NUJGQ0JBRjYzREJFMThCM0Y=";

  return request;
});
