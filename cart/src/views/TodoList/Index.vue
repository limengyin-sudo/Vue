<template>
    <div class="container">
        <div class="nav">
            <p class="logo">ToDoList</p>
            <input class="search" v-model="todo" type="text" placeholder="添加ToDo" 
            @keyup.enter="addTodo" />
        </div>
        <div class="ing">
            <div class="head">
                <p class="title">正在进行</p>
                <p class="count">{{doing.length}}</p>
            </div>
            <div class="item-wrap" v-for="(item,index) of doing" :key="index">
                <input class="select" type="checkbox" v-model="item.isChecked" />
                <p class="name">{{item.todo}}</p>
                <a href="" class="delete"  @click="deleteTodo(index)">-</a>
            </div>
        </div>
        <div class="done">
            <div class="head">
                <p class="title">已经完成</p>
                <p class="count">{{readyTodo.length}}</p>
            </div>
            <div class="item-wrap item-done" v-for="(item,index) of readyTodo" 
            :key="index">
                <input class="select" type="checkbox" v-model="item.isChecked" />
                <p class="name">{{item.todo}}</p>
                <a href="" class="delete delete-done" @click="deleteTodo(index)">-</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'TodoList',
        data(){
            return {
                todo: '',
                todoList: []
            }
        },
        methods:{
            addTodo(){
                this.todoList.push({todo:this.todo,isChecked:false})
                var keywords = JSON.parse(localStorage.getItem("words"));
                keywords.push({todo:this.todo,isChecked:false});
                localStorage.setItem("words",JSON.stringify(keywords))
                this.todo = ''
            },
            deleteTodo(item){
                console.log(item)
                this.todoList = this.todoList.filter(item=>item!=item)
            }
        },
        computed:{
            readyTodo(){
                return this.todoList.filter(item=>item.isChecked)
            },
            doing(){
                return this.todoList.filter(item=>!item.isChecked)
            }
        },
        mounted () {
            let words = localStorage.getItem("words");
            if(words){
                this.todoList = JSON.parse(words);
            }else{
                localStorage.setItem("words","[]")
            }
        },
        updated(){
            localStorage.setItem("words", JSON.stringify(this.todoList));
        }
        // watch: {
        //     todoList: {
        //     handler(newVal) {
        //         var todo = JSON.parse(localStorage.getItem("todo"));
        //         todo = newVal;
        //         localStorage.setItem("todo", JSON.stringify(todo));
        //     },
        //     deep: true
        //     }
        // }
    }
</script>

<style lang="less" scoped>
    .container{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #cdcdcd;
        z-index: -1;
    }
    .nav{
        width: 10rem;
        height: 60px;
        background-color: #323232;
        display: flex;
        align-items: center;
    }
    .logo{
        color: #DDDDDD;
        font-size: 26px;
        margin-left: 10px;
    }
    .search{
        width: 208px;
        height: 24px;
        border-radius: 6px;
        margin-left: 20px;
        padding-left: 14px;
        font-size: 14px;
    }
    .ing,
    .done{
        padding: 8px;
    }
    .head{
        position: relative;
        display: flex;
        align-items: center;
    }
    .title{
        font-size: 22px;
        font-weight: bold;
        color: #333;
    }
    .count{
        position: absolute;
        right: 6px;
        background-color: #E6E6FA;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
        color: #666666;
        font-weight: bold;
    }
    .item-wrap{
        height: 36px;
        background-color: #fff;
        border-left: 3px solid #629A9C;
        border-radius: 3px;
        margin-top: 10px;
        position: relative;
        display: flex;
        align-items: center;
    }
    .select{
        width: 20px;
        height: 20px;
        margin-left: 12px;
    }
    .name{
        font-size: 16px;
        font-weight: bold;
        color: #333;
        position: absolute;
        left: 40px;
    }
    .delete{
        display: block;
        width: 14px;
        height: 12px;
        border-radius: 14px;
        border: 6px double #FFF;
        background: #CCC;
        line-height: 14px;
        text-align: center;
        color: #FFF;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        position: absolute;
        right: 3px;
    }
    .delete-done{
        border: 6px double #E6E6E6;
    }
    .item-done{
        border-left: 3px solid #999;
        background-color: #E6E6E6;
    }
</style>