const app = Vue.createApp({
    data(){
        return {
            title: "Test sayfası",
            itemList: [],
        };



    },

    beforeCreate(){
        console.log(" beforeCreate çalıştı");
    },
    created(){
        console.log(" created çalıştı");
        setTimeout(() => {
            this.itemList = [1,2,3,4,5,6,7,8,9,10];
        }, 2000);

    },
    beforeMount(){
        console.log(" beforeMount çalıştı");

    },
    mounted(){
        console.log(" mounted çalıştı");

    },
    beforeUdpate(){
        console.log(" beforeUdpate çalıştı");

    },
    
    updated(){
        console.log(" updated çalıştı");

    },

    beforeUnmount(){
        console.log(" beforeMount çalıştı");

    },
    
    unmounted(){
        console.log(" unmounted çalıştı");

    },
   









}).mount("#app");    