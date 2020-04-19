<template>
    <el-container>
        <el-header>
            <div>
                <el-row type="flex" justify="end">
                    <el-col :span="22" class="menuLeft">
                        <el-menu :default-active="activeIndex" router mode="horizontal" active-text-color="#409EFF" @select="handleSelect">
                            <el-menu-item v-for="(item,i) in router" :key="i" :index="item.path">
                                {{ item.name }}
                            </el-menu-item>
                        </el-menu>
                        <!-- <Menu :router="router" :items="items"></Menu> -->
                    </el-col>
                </el-row>
            </div>
        </el-header>
        <el-main>
            <div>
                <el-row type="flex" justify="end">
                    <el-col :span="22">
                        <router-view></router-view>
                    </el-col>
                </el-row>
            </div>
        </el-main>
        <el-footer>
            <div>
                <el-row type="flex" justify="center">
                    <el-col :span="20">
                        <p>footer</p>
                    </el-col>
                </el-row>
            </div>
        </el-footer>
    </el-container>
</template>
<script>
import Vue from 'vue'
import echarts from 'echarts'
import Menu from '@/components/Menu'
Vue.prototype.$echarts = echarts
export default {
    components: {
        Menu
    },
    data() {
      return {
        activeIndex: this.$route.path,
        router: [
            {path: '/Data', name: '首页'},
            {path: '/Element', name: 'Element'},
            {path: '/Myvue', name: 'Myvue'},
            {path: '/ES6', name: 'ES6'},
            {path: '/Color', name: 'Color'}
        ],
        items: {
          isCollapse: false,
          isHorizontal: "horizontal"
        }
      };
      
    },
    created:function(){
        
        this.$nextTick(function(){
            console.info("this.$route.path==",this.$route.path);
            console.info("this.items==first==",this.items);
            this.creatLine();
        });
    },
    methods: {
        creatLine: function() {
            var myChart = echarts.init(document.getElementById('line'));
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            };
            myChart.setOption(option);
        },
        handleSelect(key, keyPath) {
            let aaa = "aaa";
            console.log("7777777777777---------",key, keyPath);
            console.info("/888888==",this.$route.path);
        }
    }
}
</script>