
// vue instance burası, html kısmı ise template
const app = Vue.createApp({
    



        data(){
            return {
                title: 'Hello Vue!',
                content: "Hoşgeldin selam",
                
                eduflow: {
                    title: "Eduflow için tıklayınız",
                    url: "https://www.eduflow.com",
                    target: "_blank",
                    alt: "müfredat",
                },
                coords: {
                    x: 0,
                    y: 0,
                },
            };
        },


        methods: {

            changeTitle (pTitle)  {
                this.title = pTitle;
            },

            updateCoords(event){

                this.changeTitle(`${event.x}, ${event.y}`)
                this.coords = {
                    x: event.x,
                    y: event.y,
            };
        },

    },















}).mount("#app");


// "{{ title }}"" textcontent oldugu yerlerde çalışır