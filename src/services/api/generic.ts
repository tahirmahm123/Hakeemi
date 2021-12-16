import axios from 'axios';
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
class GenericService {
  constructor() {}
  get = (url: string) =>
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
  post = (url: string, data: any) =>
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
  delete = (url: string) =>
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
  put = (url: string, data: any) =>
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
}
export default GenericService;
