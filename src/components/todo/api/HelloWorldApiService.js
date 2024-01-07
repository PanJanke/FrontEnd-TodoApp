import axios from 'axios'



const apiClient = axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)
export const retrieveHelloWorldBean
    = () => apiClient('/hello-world-bean')

export const retrieveHelloWorldBeanPathVariable
    = (username) => apiClient(`/hello-world/path-variable/${username}`)