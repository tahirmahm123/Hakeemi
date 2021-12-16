import axios from 'axios';
axios.defaults.baseURL = 'https://v2ray.myvpnbook.com';
//process.env.REACT_APP_API_URL;

//   constructor() {
//     // let token = localStorage.getItem("token");
//     // if (token !== null) {
//     //     axios.defaults.headers.common["Authorization"] = "Bearer " + token;
//     // }
//   }
const _get = (url: string) =>
  new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
const _post = (url: string, data: any) =>
  new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
const _delete = (url: string) =>
  new Promise((resolve, reject) => {
    axios
      .delete(url)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
const _put = (url: string, data: any) =>
  new Promise((resolve, reject) => {
    axios
      .put(url, data)
      .then((res: any) => {
        resolve(res.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
export default { _get, _put, _post, _delete };
