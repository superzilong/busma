import http from "../utility/httpUtil";
import { apiUrl } from "../config.json";

export function loginSvc(username, password) {
  return http.post(apiUrl + "/login", { Name: username, Password: password });
}
