import $http from '@/services/api.config'
import sysMsg from '@/helpers/sys.messages'

let RESOURCE_NAME = 'products'

export default {
    async getAll(){
        try {
            let response = await $http.get(RESOURCE_NAME)

            return response

        } catch (error){
            console.log('error', error);
            sysMsg.getMsg('error', 'Error de conexión')
        }
    }
}