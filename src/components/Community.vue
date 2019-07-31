<template>
    <!-- 每个template里面只有一个div根组件 -->


    <div class="nav">
        <div>
            <router-link :to="{name: 'academic'}">学术讨论</router-link>
            <router-link :to="{name: 'download'}">资源下载</router-link>
            <router-link :to="{name: 'personal'}">个人中心</router-link>
        </div>

        <router-view></router-view> <!-- 没有router-view就看不到这个组件了 -->
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style lang="">
    .nav a{
        display: inline-block;
        padding: 0 10px;
        margin-right: 20px;
    }
</style>