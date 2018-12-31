import $http from '@/services/api.config'
import sysMsg from '@/helpers/sys.messages'

let RESOURCE_NAME_LOGIN = 'https://mynotesapp2018.herokuapp.com/api/auth/login'

let RESOURCE_NAME_REGISTER = 'https://mynotesapp2018.herokuapp.com/api/auth/register'
export default {
    async login(payload){
        try {
            let response = await $http.post(RESOURCE_NAME_LOGIN, payload);        
            return response
        } catch (error){
            if(error.response) {
                switch (error.response.data.errors.status) {
                    case 404:
                        sysMsg.getMsg('error', error.response.data.message)
                        console.log('Error: ' + error.response.data.message)
                        break;
                    
                    case 401:
                        sysMsg.getMsg('error', 'Datos incorrectos.')
                        console.log('Error: datos incorrectos.')
                        break;

                    case 444:
                        sysMsg.getMsg('Server timeout')
                        console.log('Error: Email already taken')
                        break;

                    default:
                        sysMsg.getMsg('error','No se pudo conectar con el servidor.')
                        console.log('Error al intentar conectar con el servidor. ' + error.response)
                        break;
                }  
            } else {
                console.log('error: ', error);
            }

        }
    },
    async register(payload){
        try {
            let response = await $http.post(RESOURCE_NAME_REGISTER, payload);        
            return response
        } catch (error){
            if(error.response) {
                switch (error.response.data.errors.status) {
                    case 400:
                        sysMsg.getMsg('error', 'Password length must be at least 6 characters long')
                        console.log('Error: ' + error.response.data.message)
                        break;
                    
                    case 409:
                        sysMsg.getMsg('error', 'Email already taken')
                        console.log('Error: Email already taken')
                        break;

                    case 444:
                        sysMsg.getMsg('Server timeout')
                        console.log('Error: Email already taken')
                        break;

                    default:
                        sysMsg.getMsg('error','No se pudo conectar con el servidor.')
                        console.log('Error al intentar conectar con el servidor.')
                        break;
                }  
            } else {
                sysMsg.getMsg('Server timeout')
                console.log('error: ', error);
            }            
        }
    }
}