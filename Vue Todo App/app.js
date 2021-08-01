const app = Vue.createApp({
    data(){
        return {
            todoList : [

                {id: 1, title: 'Buy Groceries 1', completed: false},
                {id: 2, title: 'Buy Groceries 2 ', completed: false},
                {id: 3, title: 'Buy Groceries 3', completed: false},
                {id: 4, title: 'Buy Groceries 4', completed: false},  

            ],
            date : new Date().toLocaleDateString(),
        };
    },
 
    methods: {
        addTodo (event) {
            this.todoList.push({
                id: new Date().getTime(),
                title : event.target.value,
                 tarih : new Date().toLocaleDateString(), 
                // tarih: moment.locale("de").format('LLL'),
                completed: false
            });
            event.target.value = "";
        },

        removeItem(todoItem){
         
            this.todoList = this.todoList.filter(todo => todo !== todoItem)

        }
    },

    computed: {
        completedItemCount(){
            return this.todoList.filter(todo => todo.completed).length
        },
        unCompletedItemCount(){
            return this.todoList.filter(todo => !todo.completed).length
        },
        allItemCount(){
            return this.todoList.length
        },
     

    }





}).mount("#app");    