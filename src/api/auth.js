import axios from "axios";
export const authApi = {
  login: async (username, password) => {
    const { data } = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    // console.log(username, password);
    // console.log(data);
    return data;
  },
};
