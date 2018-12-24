import $http from '@/services/api.config'
import sysMsg from '@/helpers/sys.messages'

let RESOURCE_NAME = '/auth/login'
export default {
    async login(payload){
        try {
            let response = await $http.post(RESOURCE_NAME, payload);        
            return response
        } catch (error){
            if(error.response) {
                switch (error.response.data.errors.status) {
                    case 404:
                        sysMsg.getMsg('error', error.response.data.message)
                        console.log('Error: ' + error.response.data.message)
                        break;
                    
                    case 401:
                        sysMsg.getMsg('error', 'Error: datos incorrectos.')
                        console.log('Error: datos incorrectos.')
                        break;

                    default:
                        sysMsg.getMsg('error','Error al intentar conectar con el servidor.')
                        console.log('Error al intentar conectar con el servidor.')
                        break;
                }  
            } else {
                console.log('error: ', error);
            }            
        }
    }
}