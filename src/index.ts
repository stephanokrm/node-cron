import Axios from 'axios';
import cron from 'node-cron';

const axios = Axios.create({
    baseURL: 'https://service.schoolgo.com.br',
    headers: {
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },
    withCredentials: true,
});

cron.schedule(`0 1 * * *`, async () => {
    const {status, statusText} = await axios.post('https://service.schoolgo.com.br/api/trip/schedule');

    console.log({status, statusText})
});
