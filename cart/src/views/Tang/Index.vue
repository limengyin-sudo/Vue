<template>
    <div>
        <div v-for="item of dynamic" :key="item.id">
            <list :data="item">

            </list>
        </div>
    </div>
</template>

<script>
    import List from './components/List'
    export default {
        name:"Tang",
        data(){
            return {
                dynamic:[]
            }
        },
        components:{
            List
        },
        mounted(){
            this.axios.get('index').then(res=>{
                console.log(res.data)
                this.dynamic = res.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    
</style>