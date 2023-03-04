export default {
    data(){
        return {
            componentId: undefined
        }
    },
    methods:{
        /**
         * Genera un id para asignar a un componente
         * @param {String} name nombre a concatenar 
         */
        setId(name){
            this.componentId = `${name}-${this._uid}`
        }
    }
}