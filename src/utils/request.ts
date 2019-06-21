import axios from  'axios';

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 10000
})

service.interceptors.request.use(

)

service.interceptors.response.use(

)

export default service