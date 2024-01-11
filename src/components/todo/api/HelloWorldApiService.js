import {apiClient} from './ApiClient'

export const executeBasicAuthenticationService
    = (token) => apiClient.get(`/basicauth`, {
    headers: {
        Authorization: token
    }
})
export const retrieveHelloWorldBean
    = () => apiClient('/hello-world-bean')


export const retrieveHelloWorldBeanPathVariable
    = (username, token) => apiClient(`/hello-world/path-variable/${username}`, {
    headers: {
        Authorization: token
    }
})