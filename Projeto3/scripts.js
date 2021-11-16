const todosApp = {
    data() {
        return {
            todoList : [],
            newTask : ""
        }
    },
    methods: {
        addNewTask : function() {
            if(this.newTask){
                this.todoList.push({title : this.newTask})
                this.newTask = ""
            }else{
                alert('Campo não pode estar vazio')
            }
        },
        clearTasks : function() {
            this.todoList = []
        }
    },
    created () {
        this.todoList = localStorage.getItem('todoList')?JSON.parse(localStorage.getItem('todoList')): [];
    },
    beforeUpdate () {
        localStorage.setItem('todoList', JSON.stringify(this.todoList))
    }
}


Vue.createApp(todosApp).mount('#app')