<template>
    <div style="text-align: center;">
        <el-row>
            <el-col :span = "24" style="width: 100%; height: 250px;" id="animateDiv"></el-col>
        </el-row>
        <el-row>
            <el-col :span = "24"><img class="rountText" src="../assets/images/myVue.png"></el-col>
        </el-row>
        <el-row style="margin-top: 200px;">
            <el-col :span = "24">
                <el-button-group>
                    <el-button  @click="about">了解更多</el-button>
                    <el-button  @click="register">注册</el-button>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-button-group>
            </el-col>
        </el-row>
        <router-view></router-view>
    </div>
</template>
<script type="text/javascript" defer=true>
    // import Vue from 'vue'
    // import * as three from 'three'
    // Vue.use(three)
    export default {
        created:function(){
            this.$nextTick(function(){
                this.show();
            });
	    },
        methods: {
            show: function() {
                var animateDiv = document.getElementById('animateDiv');
                console.info("animateDiv==",animateDiv);
                var scene = new this.three.Scene();
                var camera = new this.three.PerspectiveCamera();
                var renderer = new this.three.WebGLRenderer({ antialias: true,alpha:true });
                renderer.setSize( 200, 200);
                // renderer.setClearColor(1.0,1.0,1.0,1.0);
                // renderer.setClearAlpha(0.0);
                
                animateDiv.appendChild( renderer.domElement );
                //创建立方体
                var geometry = new this.three.BoxGeometry( 15, 15, 15 );
                // var material = new this.three.MeshBasicMaterial( { color: 0xff5d5d } );
                var material = new this.three.MeshNormalMaterial()
                var cube = new this.three.Mesh( geometry, material );
                //end
                //画线
                // var lineMaterial = new this.three.LineBasicMaterial( { color: 0x0000ff } );
                // var lineGeometry = new this.three.Geometry();
                // lineGeometry.vertices.push(new this.three.Vector3( -10, 0, 0) );
                // lineGeometry.vertices.push(new this.three.Vector3( 0, 10, 0) );
                // lineGeometry.vertices.push(new this.three.Vector3( 10, 0, 0) );
                // var line = new this.three.Line( lineGeometry, lineMaterial );
                //end
                //创建文字
                
                //end
                scene.add( cube );
                // scene.add( line );

                camera.position.z = 50;

                var animate = function () {
                    requestAnimationFrame( animate );
                    cube.rotation.x += 0.02;
                    cube.rotation.y += 0.02;
                    renderer.render( scene, camera );
			    };
                animate();
            },
            about() {//了解更多
                this.$router.push({name:'HelloWorld'});
            },
            register() {//注册
                this.$router.push({name:'Register'});
            },
            login() {//登录
                this.$router.push({name:'Login'});
            }
        }
    }
</script>