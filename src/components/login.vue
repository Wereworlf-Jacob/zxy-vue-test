<template>
    <div class="loginPage">
        <el-row>
            <el-col :span="16">
                <div class="solarsys">
                    <!--太阳-->
                    <div class='sun'></div>

                    <!--水星轨道-->
                    <div class='mercuryOrbit'></div>

                    <!--水星-->
                    <div class='mercury'></div>

                    <!--金星轨道-->
                    <div class='venusOrbit'></div>

                    <!--金星-->
                    <div class='venus'></div>

                    <!--地球轨道-->
                    <div class='earthOrbit'></div>

                    <!--地球-->
                    <div class='earth'></div>

                    <!--火星轨道-->
                    <div class='marsOrbit'></div>

                    <!--火星-->
                    <div class='mars'></div>

                    <!--木星轨道-->
                    <div class='jupiterOrbit'></div>

                    <!--木星-->
                    <div class='jupiter'></div>

                    <!--土星轨道-->
                    <div class='saturnOrbit'></div>

                    <!--土星-->
                    <div class='saturn'></div>

                    <!--天王星轨道-->
                    <div class='uranusOrbit'></div>

                    <!--天王星-->
                    <div class='uranus'></div>

                    <!--海王星轨道-->
                    <div class='neptuneOrbit'></div>

                    <!--海王星-->
                    <div class='neptune'></div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="loginInput">
                    <div class="loginOp">
                        <el-row>
                            <el-col :span="8" style="line-height: 40px;" align="center">用户名</el-col>
                            <el-col :span="16">
                                <el-input placeholder="请输入用户名" prefix-icon="el-icon-info" v-model="inputName" @keyup.enter.native="login"></el-input>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top: 30px;">
                            <el-col :span="8" style="line-height: 40px;" align="center">密码</el-col>
                            <el-col :span="16">
                                <el-input placeholder="请输入密码" prefix-icon="el-icon-info" v-model="inputPassword" @keyup.enter.native="login"></el-input>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top: 30px;">
                            <el-col :span="16" :offset="8">
                                <el-button style="width: 100%;" @click="login">登录</el-button>
                            </el-col>
                        </el-row>
                        <div class="qqqq"></div>
                    </div>
                </div>
            </el-col>
        </el-row>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputName: 'admin',
            inputPassword: '1111',
            userInfo: [
                {userName:'admin', password:'1111'},
                {userName:'王小虎', password:'2222'},
                {userName:'李小呆', password:'3333'},
            ]
        }
    },
    methods: {
        login() {//登录
            console.info("inputName=",this.inputName);
            console.info("inputPassword=",this.inputPassword);
            if(this.inputName == "" || this.inputName == null) {
                this.$message({
                    message: '用户名不能为空！',
                    type: 'error'
                });
                return false;
            }
            if(this.inputPassword == "" || this.inputPassword == null) {
                this.$message({
                    message: '密码不能为空！',
                    type: 'error'
                });
                return false;
            }
            if(this.inputName == "admin" && this.inputPassword == "1111") {
                this.$router.push({name:'Data'});
            }else{
                this.$message({
                    message: '用户名或密码不正确！',
                    type: 'error'
                });
                return false;
            }
        }
    }
}
</script>