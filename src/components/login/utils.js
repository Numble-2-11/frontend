import axios from "axios";

export const refreshToken = function (callback) {
  axios
    .post("/auth/refreshToken", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log("res.data.accessToken : " + res.data);
      axios.defaults.headers.common["Authorization"] = "Bearer " + res.data;
      if (callback) {
        callback(true);
      }
      setTimeout(function () {
        refreshToken(null);
      }, 60 * 1000);
    })
    .catch((e) => {
      console.log("app silent requset fail : " + e);
      if (callback) {
        callback(false);
      }
    })
    .finally(() => {
      console.log("refresh token request end");
    });
};
