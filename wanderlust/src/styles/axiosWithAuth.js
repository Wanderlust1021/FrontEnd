
import axios from 'axios'



export default function axiosWithAuth(){

    const token = localStorage.getItem('token')

    const axiosInstance = axios.create({
            baseURL: 'https://wanderlust-ty.herokuapp.com/api',
            headers: {
            'Content-Type': 'application/json',
             Authorization: token,
            }
        })

        return axiosInstance
    
}