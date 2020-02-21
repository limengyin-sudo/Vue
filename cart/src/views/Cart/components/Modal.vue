<template>
    <div class="container">
        <div class="modal">
            <p>是否确认删除这一项？</p>
            <div class="btn">
                <button @click="handleDelete" class="cancel">取消</button>
                <button class="confirm">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            handleDelete(){
                this.$emit("del")
            }
        }
    }
</script>

<style lang="less" scoped>
    .container{
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom: 0;
        background: rgba(51, 51, 51, 0.774);
        z-index: 100;
    }
    .modal{
        width: 340px;
        height: 180px;
        background-color: #fff;
        border-radius: 18px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 24%;
        text-align: center;
    }
    .modal p{
        font-size: 18px;
        color: #333;
        margin-top: 50px;
    }
    .btn{
        width: 340px;
        height: 56px;
        border-top: 1px solid #F8F9FA;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        align-items: center;
        background-color: pink;
        margin-top: 70px;
        border-radius: 0 0 18px 18px;
    }
    .cancel,
    .confirm{
        height: 56px;
        font-size: 20px;
        background-color: #fff;
        border: none;
    }
    .cancel{
        border-radius: 0 0 0 18px;
    }
    .confirm{
        border-radius: 0 0 18px 0;
        color: #4789FA;
    }
</style>