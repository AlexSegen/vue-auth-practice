import $http from '@/services/api.config'
import sysMsg from '@/helpers/sys.messages'

let RESOURCE_NAME = 'products'

export default {
    async postItem(payload){
        try {
            let response = await $http.post(RESOURCE_NAME, payload)
            return response
            
        } catch (error) {
            console.log('error', error.response);
            sysMsg.getMsg('error', 'Error de conexión')
        }
    },
    async getAll(){
        try {
            let response = await $http.get(RESOURCE_NAME)
            return response
        } catch (error){
            console.log('error', error.response);
            sysMsg.getMsg('error', 'Error de conexión')
        }
    },
    async updateItem(payload){
        try {
            let response = await $http.put(`${RESOURCE_NAME}/${payload.id}`, payload)
            return response
        } catch (error){
            console.log('error', error.response);
            sysMsg.getMsg('error', 'Error de conexión')
        }
    },
    deleteItem(payload) {
        try {
            return $http.delete(`${RESOURCE_NAME}/${payload.id}`)
        } catch (error){
            console.log('error', error.response);
            sysMsg.getMsg('error', 'Error de conexión')
        }
    }
}