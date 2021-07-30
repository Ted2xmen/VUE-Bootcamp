const app = Vue.createApp({

    data() {
        return {
            search: "",
            itemList: ["elma", "armut", "kiraz"],
            // filteredList: [],

        };



    },

    methods: {
        searchList() {

            // this.filteredList = this.itemList.filter(item => item.includes(this.search));

            // console.log(filteredList);
            
        }


    },

    //computed: search değiştiği anda reactivity devreye giriyor, itemList filtreleniyor

    computed: { 

        filteredList() {
            return this.itemList.filter(item => item.includes(this.search));
        }
    }






}).mount("#app");    