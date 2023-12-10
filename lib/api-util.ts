import axios from "axios"
var backendUrl = "http://localhost:3001/api" 
const apiUtil = {
    async postRequest(endPoint: String, data = {}, headers = {}): Promise<any> {
        const url = backendUrl + endPoint
        const options = {
            headers: {
                ...headers
            },
            data: data 
        }
        return axios.post(url)
    },
    
    async getRequest(endPoint: String, headers = {}): Promise<any> {
        const url = backendUrl + endPoint
        const options = {
            headers: {
                ...headers
            }
        }
        return axios.post(url)
    }
}
export default apiUtil