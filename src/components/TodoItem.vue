<template>
    <li>        
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" @click="todo.completed = !todo.completed">
            <strong>{{ todo.id }} - {{index + 1}}</strong>
            <!-- {{ todo.title | upperCase }} filters not work-->
            {{ todo.title }} {{upperCase1(todo.title)}}
        </span>
        <button class="rm" @click="$emit('remove-todo', todo.id)">&times;</button>
    </li>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            },
            index: Number
        },
        filters: {
            upperCase(value) {
                //console.log(value)
                return value.toUpperCase()
            }
        },
        methods: {
            upperCase1(value) {
                //console.log(value)
                return value.toUpperCase()
            }
        }
    }
</script>

<style scoped>
li {
    border: 1px solid teal;
    display: flex;
    justify-content: space-between;
    padding: 5px 2px;
    margin-bottom: 5px;
}

.rm {
   background: red;
   color: white;
   border-radius: 50%;
   font-weight: bold; 
}

input {    
    margin-right: 5px;
}

.done {
    text-decoration: line-through;
}
</style>