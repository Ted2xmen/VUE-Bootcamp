const app = Vue.createApp({
    data(){
        return {
            todoList : ["todo 13 ", "todo 22 ", "todo 31"],
        };
    },
 
    methods: {
        addTodo (event) {
            this.todoList.push(event.target.value);
            event.target.value = "";
        },
    },







}).mount("#app");    