import $http from '@/services/api.config'

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
                        console.log('Error: ' + error.response.data.message)
                        break;
                    
                    case 401:
                        console.log('Error: datos incorrectos.')
                        break;

                    default:
                        console.log('Error al intentar conectar con el servidor.')
                        break;
                }  
            } else {
                console.log('error: ', error);
            }            
        }
    }
}