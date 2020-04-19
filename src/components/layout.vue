<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Layout布局效果" name="first">
                <LayoutGraph></LayoutGraph>
            </el-tab-pane>
            <el-tab-pane label="Layout布局描述" name="second">
                <LayoutDescribe></LayoutDescribe>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>L
<script>
    import LayoutDescribe from '@/components/LayoutDescribe'
    import LayoutGraph from '@/components/LayoutGraph'
    export default {
        components:{
            LayoutDescribe:LayoutDescribe,
            LayoutGraph:LayoutGraph
        },
        data() {
            return {
                activeName: "first",
            }
        },
        methods: {
            handleClick(tab, event) {
                console.info(tab, event);
            },
        },
    }
</script>>