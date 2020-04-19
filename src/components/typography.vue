<template>
    <div class="layoutDiv">
        Typography 字体
        <el-row>
            <h2>页面中标签按照文本显示的方法</h2>
            <p>以& lt;代替 < ,以& gt;代替 >, 注意去掉&后面的空格，不要丢了分号 ;</p>
        </el-row>
        <el-row>
            <h2>延迟加载方法</h2>
            <p>
                setTimeout(function(){</br>
                &nbsp;&nbsp;&nbsp;&nbsp;alert("1");</br>
                },500);
            </p>
        </el-row>
        <el-row>
            <h2>动态添加页面/组件&nbsp;&nbsp;&nbsp;colorContainer.vue</h2>
            <img src="../assets/images/copy.png">
        </el-row>
        <el-row>
            <h2>标签属性值变量赋值</h2>
            <p>属性前加v-bind: </p>
            <p>例： v-bind:label=aaa</p>
        </el-row>
        <el-row>
            <h2>json格式化</h2>
            <p>1、JSON.stringify(jsonobj)；</br> 2、obj.toJSONString()；</p>
        </el-row>
        <el-row>
            <h2>Ajax中get和post的区别</h2>
            <img src="../assets/images/getPost.png">
        </el-row>
        <el-row>
            <h2>通过线上来mock数据</h2>
            <p>1.使用 https://easy-mock.com
               </br> 2.使用 http://rapapi.org/org/index.do
            </p>
        </el-row>
    </div>
</template>