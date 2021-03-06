import "../scss/maps.scss";

Vue.component("notification-message",
{
    delimiters: ["${", "}"],
    template: '#notification-message-template',
    props :{
        type:{
            type: String,
            default: 'info'
        },
        header:{
            type: String,
            default: 'Information'
        }
    },
    data() {
        return{
            hidden: false
        }
    },
    methods: {
        hide(){
            this.hidden = true
        }

    }

})
