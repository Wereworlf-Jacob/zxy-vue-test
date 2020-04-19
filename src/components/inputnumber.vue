<template>
    <div class="layoutDiv">
        <el-row>
            <h2>InputNumber 计数器</h2>
            <p>仅允许输入标准的数字值，可定义范围</p>
        </el-row>
        <el-row>
            <h2>基础用法</h2>
            <p>要使用它，只需要在el-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值。</p>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="1">
                <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </el-col>
        </el-row>
        <el-row>
            <h2>禁用状态</h2>
            <p>disabled属性接受一个Boolean，设置为true即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置min属性和max属性，不设置min和max时，最小值为 0。</p>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="1">
                <el-input-number v-model="num1" :disabled="true"></el-input-number>
            </el-col>
        </el-row>
        <el-row>
            <h2>步数</h2>
            <p>允许定义递增递减的步数控制</p>
            <p>设置step属性可以控制步长，接受一个Number。</p>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="1">
                <el-input-number v-model="num2" :step="2"></el-input-number>
            </el-col>
        </el-row>
        <el-row>
            <h2>严格步数</h2>
            <p>step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数。</p>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="1">
                <el-input-number v-model="num3" :step="2" step-strictly></el-input-number>
            </el-col>
        </el-row>
        <el-row>
            <h2>精度</h2>
            <p>设置 precision 属性可以控制数值精度，接收一个 Number。</p>
            <p>precision 的值必须是一个非负整数，并且不能小于 step 的小数位数。</p>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="1">
                <el-input-number v-model="num4" :precision="2" :step="0.1" :max="10"></el-input-number>
            </el-col>
        </el-row>
        <el-row>
            <h2>尺寸</h2>
            <p>额外提供了 medium、small、mini 三种尺寸的数字输入框</p>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-input-number v-model="num1"></el-input-number>
            </el-col>
            <el-col :span="6">
                <el-input-number size="medium" v-model="num2"></el-input-number>
            </el-col>
            <el-col :span="6">
                <el-input-number size="small" v-model="num3"></el-input-number>
            </el-col>
            <el-col :span="6">
                <el-input-number size="mini" v-model="num4"></el-input-number>
            </el-col>
        </el-row>
        <el-row>
            <h2>按钮位置</h2>
            <p>设置 controls-position 属性可以控制按钮位置。</p>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="1">
                <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
            </el-col>
        </el-row>
        <el-row>
            <h2>Attributes</h2>
            <el-table :data="inputNumberAttributesData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Events</h2>
            <el-table :data="inputNumberEventsData" style="width: 100%">
                <el-table-column prop="name" label="事件名称" style="width: 20%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 40%;"></el-table-column>
                <el-table-column prop="param" label="回调参数" style="width: 40%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Methods</h2>
            <el-table :data="inputNumberMethodsData" style="width: 100%">
                <el-table-column prop="name" v-bind:label=aaa style="width: 20%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 40%;"></el-table-column>
                <el-table-column prop="param" label="参数" style="width: 40%;"></el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        num: 1,
        num1: 1,
        num2: 1,
        num3: 2,
        num4: 1,
        inputNumberAttributesData: [],
        inputNumberEventsData: [],
        inputNumberMethodsData: [],
        aaa: this.common.fileName
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      getData() {
          //发送get请求
            this.$http.get("/static/inputnumberData.json").then(function(data){
                var json=data.body;
                this.inputNumberAttributesData = json.inputNumberAttributesData;
                this.inputNumberEventsData = json.inputNumberEventsData;
                this.inputNumberMethodsData = json.inputNumberMethodsData;
            },function(response){
                console.info("失败===", response);
            })
      }
    },
    mounted() {
        this.getData();//获取inpuData数据
        console.info("11111===",this.common);
    }
  };
</script>