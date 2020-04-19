<template>
    <div>
        <el-button type="primary" @click="show">登录</el-button>
        <el-button type="text"><router-link to="/b">注册</router-link></el-button>
        <el-button type="text"><router-link to="/c">忘记密码</router-link></el-button>
        <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
export default {
    methods: {
        show() {
            window.open("/b",'_self');
        }
    }
}
</script>
<style>
</style>