import {apiClient} from './ApiClient'


export const retrieveHelloWorldBean
    = () => apiClient('/hello-world-bean')


export const retrieveHelloWorldBeanPathVariable
    = (username, token) => apiClient(`/hello-world/path-variable/${username}`, {
    headers: {
        Authorization: token
    }
})