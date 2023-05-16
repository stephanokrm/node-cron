import axios from 'axios';
import cron from 'node-cron';

const axiosInstance = Axios.create({
  baseURL: 'https://service.schoolgo.com.br',
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
});

cron.schedule(`0 1 * * *`, async () => {
  axiosInstance.post('https://service.schoolgo.com.br/api/trip/schedule');
});
