const app = Vue.createApp({
   
    data(){

        return {
            items: [],
            boxClass: "green",
            redBG: true,
            showBorder: false,
            bgColor: "yellow",

          
        };
    },

   computed: {
       boxClasses(){
        return { border: this.showBorder, red: this.redBG};

       },
    
   },









}).mount("#app");    