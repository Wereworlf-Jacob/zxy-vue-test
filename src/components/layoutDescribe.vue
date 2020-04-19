<template>
    <div class="layoutDiv">
        <el-row>
            <h2>基于断点的隐藏类</h2>
            <p>Element 额外提供了一系列类名，用于在某些条件下隐藏元素。这些类名可以添加在任何 DOM 元素或自定义组件上。如果需要，请自行引入以下文件：</p>
            <el-row>
                <el-col :span="20">
                    <div class="grid-content bg-purple">import 'element-ui/lib/theme-chalk/display.css';</div>
                </el-col>
            </el-row>
            <el-col :span="24">
                <p>包含的类名及其含义为：</p>
            </el-col>
            <el-col>
                <ul>
                    <li>hidden-xs-only - 当视口在 xs 尺寸时隐藏</li>
                    <li>hidden-sm-only - 当视口在 sm 尺寸时隐藏</li>
                    <li>hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏</li>
                    <li>hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏</li>
                    <li>hidden-md-only - 当视口在 md 尺寸时隐藏</li>
                    <li>hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏</li>
                    <li>hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏</li>
                    <li>hidden-lg-only - 当视口在 lg 尺寸时隐藏</li>
                    <li>hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏</li>
                    <li>hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏</li>
                    <li>hidden-xl-only - 当视口在 xl 尺寸时隐藏</li>
                </ul>
            </el-col>
        </el-row>
        <el-row>
            <h2>Row Attributes</h2>
            <el-table :data="rowTableData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Col Attributes</h2>
            <el-table :data="colTableData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script>
    export default {
      data() {
        return {
          rowTableData: [
            {
                param: 'gutter',
                explain: '栅格间隔',
                type: 'number',
                choice: '—',
                default: '0'
            },{
                param: 'type',
                explain: '布局模式，可选 flex，现代浏览器下有效',
                type: 'string',
                choice: '—',
                default: '—'
            },{
                param: 'justify',
                explain: 'flex 布局下的水平排列方式',
                type: 'string',
                choice: 'start/end/center/space-around/space-between',
                default: 'start'
            },{
                param: 'align',
                explain: 'flex 布局下的垂直排列方式',
                type: 'string',
                choice: 'top/middle/bottom',
                default: 'top'
            },{
                param: 'tag',
                explain: '自定义元素标签',
                type: 'string',
                choice: '*',
                default: 'div'
            }
          ],
          colTableData: [
              {
                param: 'span',
                explain: '栅格占据的列数',
                type: 'number',
                choice: '—',
                default: '24'
              },{
                param: 'offset',
                explain: '栅格左侧的间隔格数',
                type: 'number',
                choice: '—',
                default: '0'
              },{
                param: 'push',
                explain: '栅格向右移动格数',
                type: 'number',
                choice: '—',
                default: '0'
              },{
                param: 'pull',
                explain: '栅格向左移动格数',
                type: 'number',
                choice: '—',
                default: '0'
              },{
                param: 'xs',
                explain: '<768px 响应式栅格数或者栅格属性对象',
                type: 'number/object (例如： {span: 4, offset: 4})',
                choice: '—',
                default: '—'
              },{
                param: 'sm',
                explain: '≥768px 响应式栅格数或者栅格属性对象',
                type: 'number/object (例如： {span: 4, offset: 4})',
                choice: '—',
                default: '—'
              },{
                param: 'md',
                explain: '≥992px 响应式栅格数或者栅格属性对象',
                type: 'number/object (例如： {span: 4, offset: 4})',
                choice: '—',
                default: '—'
              },{
                param: 'lg',
                explain: '≥1200px 响应式栅格数或者栅格属性对象',
                type: 'number/object (例如： {span: 4, offset: 4})',
                choice: '—',
                default: '—'
              },{
                param: 'xl',
                explain: '≥1920px 响应式栅格数或者栅格属性对象',
                type: 'number/object (例如： {span: 4, offset: 4})',
                choice: '—',
                default: '—'
              },{
                param: 'tag',
                explain: '自定义元素标签',
                type: 'string',
                choice: '*',
                default: 'div'
              },
          ]
        }
      },
      methods: {
        get:function(){
          //发送get请求
          this.$http.get("https://easy-mock.com/mock/5e9ae4e4a6ab7a211c833658/example/test").then(function(data){
          // this.$http.get("https://api.myjson.com/bins/74l63").then(function(data){
            var obj = data.body;
            var objson = JSON.stringify(obj);
            console.log("+++++++++",JSON.stringify(obj));
            console.log("-------",objson.toJSONString());
              var json=data.body.info;
              this.colTableData = json;
              
          },function(response){
              console.info("失败===", response);
          })
        }
        
      },
      created:function(){
        this.$nextTick(function(){
            console.info("get===");
            // fetch("/static/aaa.json")
            // // fetch('https://api.myjson.com/bins/74l63')
            // .then(response => response.json())
            // .then(json => {
            //   console.info("json=====",json);
            //   this.colTableData = json.body;
            // })
            this.get();
        });
      }
    }
  </script>