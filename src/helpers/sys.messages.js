import message from 'vanilla-antd-message'

export default {
    getMsg(type, msg){
        /* @type String
        *  success, info, warning, error
        *
        * @msg String
        * "Mensaje al usuario"
        */
        message[type](msg);
    }
}