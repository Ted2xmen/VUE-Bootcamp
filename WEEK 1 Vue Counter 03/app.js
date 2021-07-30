const app = Vue.createApp({
   
    data(){

        return {
            counter: 0,
            counter2: 0,

        };


    },

    methods: {
      

    },
    // methods: {
    //     inc(){
    //         this.counter++;
    //     },
    //     dec(){
    //         this.counter--;
    //     },

    // },
    // değişken gibi davranır metot
    computed: { 
        getCounterResult(){
            console.log("counter 1 çalıstı");
            return this.counter > 5 ? "büyük" : "küçük";
        },



        getCounter2Result(){
            console.log("counter 2 çalıstı");
            return this.counter2 > 5 ? "büyük" : "küçük";

        },
    },

    watch: {
        counter(newValue, oldValue){
            console.log(oldValue, newValue);

        },
        getCounterResult(newValue, oldValue){
            console.log(oldValue, newValue);
    },
    // watch: bir değer değiştiği anda onun eski bilgisi ve  yeni bilgisini verir. geriye bilgi döndürmek zorunda değiliz.
    }


}).mount("#app");    