import { auth } from "./config";

export const user = {
  getListUser: () => {
    return auth.get(`/users`);
  },
};
