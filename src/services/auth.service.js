import { auth } from "./config"

export const users = {
    checkUser: (data) => {
        return auth.post("auth/signin/", data)
    }
}