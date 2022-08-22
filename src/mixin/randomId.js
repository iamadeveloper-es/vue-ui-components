export default {
    data(){
        return {
            componentId: undefined
        }
    },
    methods:{
        setId(name){
            this.componentId = `${name}-${this._uid}`
        }
    }
}