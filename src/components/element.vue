<!--element.vue-->
<template>
    <div class="elementDiv">
        <el-row type="flex">
            <el-col :span="4" :style="'height:' + mainHeight + 'px'" class="sideMenuDiv">
                <Menu :router="router" :items="items"></Menu>
            </el-col>
            <el-col :span="20" :style="'height:' + mainHeight + 'px'" class="containerDiv">
                <el-col :span="20">
                    <router-view></router-view>
                </el-col>
                <el-col :span="4"></el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import Menu from '@/components/Menu'

    export default {
    name: 'home',
    components: {
        Menu
    },
    data () {
      return {
        mainHeight: 0,
        router: [
            {
                name: "Basic",
                path: "/Basic",
                children: [
                    {
                        name: "Layout布局",
                        path: "/Layout"
                    },{
                        name: "Container布局容器",
                        path: "/Container"
                    },{
                        name: "Color色彩",
                        path: "/ColorContainer"
                    },{
                        name: "Typography字体",
                        path: "/Typography"
                    },{
                        name: "Border边框",
                        path: "/Border"
                    },{
                        name: "Icon图标",
                        path: "/Icon"
                    },{
                        name: "Button按钮",
                        path: "/Button"
                    },{
                        name: "Link文字链接",
                        path: "/Link"
                    }
                ]
            },{
                name: "Form",
                path: "/Form",
                children: [
                    {
                        name: "Radio单选框",
                        path: "/Radio"
                    },{
                        name: "Checkbox多选框",
                        path: "/Checkbox"
                    },{
                        name: "Input输入框",
                        path: "/Input"
                    },{
                        name: "Inputnumber计数器",
                        path: "/Inputnumber"
                    },{
                        name: "Select选择器",
                        path: "/Select"
                    },{
                        name: "Cascader级联选择器",
                        path: "/Cascader"
                    },{
                        name: "Switch开关",
                        path: "/Switch"
                    },{
                        name: "Slider滑块",
                        path: "/Slider"
                    },{
                        name: "TimePicker时间选择器",
                        path: "/TimePicker"
                    },{
                        name: "DatePicker日期选择器",
                        path: "/DatePicker"
                    },{
                        name: "DateTimePicker日期时间选择器",
                        path: "/DateTimePicker"
                    },{
                        name: "Upload上传",
                        path: "/Upload"
                    },{
                        name: "Rate评分",
                        path: "/Rate"
                    },{
                        name: "ColorPicker颜色选择器",
                        path: "/ColorPicker"
                    },{
                        name: "Transfer穿梭框",
                        path: "/Transfer"
                    },{
                        name: "Form表单",
                        path: "/Form"
                    }
                ]
            },{
                name: "Data",
                path: "/n",
                children: [
                    {
                        name: "Table表格",
                        path: "/m"
                    },{
                        name: "Tag标签",
                        path: "/m"
                    },{
                        name: "Progress进度条",
                        path: "/m"
                    },{
                        name: "Tree树形控件",
                        path: "/m"
                    },{
                        name: "Pagination分页",
                        path: "/m"
                    },{
                        name: "Badge标记",
                        path: "/m"
                    },{
                        name: "Avatar头像",
                        path: "/m"
                    }
                ]
            },{
                name: "Notice",
                path: "/o",
                children: [
                    {
                        name: "Alert警告",
                        path: "/m"
                    },{
                        name: "Loading加载",
                        path: "/m"
                    },{
                        name: "Message消息提示",
                        path: "/m"
                    },{
                        name: "MessageBox弹框",
                        path: "/m"
                    },{
                        name: "Notification通知",
                        path: "/m"
                    }
                ]
            },{
                name: "Navigation",
                path: "/p",
                children: [
                    {
                        name: "NavMenu导航菜单",
                        path: "/m"
                    },{
                        name: "Tabs标签页",
                        path: "/m"
                    },{
                        name: "Breadcrumb面包屑",
                        path: "/m"
                    },{
                        name: "PageHeader页头",
                        path: "/m"
                    },{
                        name: "Dropdown下拉菜单",
                        path: "/m"
                    },{
                        name: "Steps步骤条",
                        path: "/m"
                    }
                ]
            },{
                name: "Others",
                path: "/q",
                children: [
                    {
                        name: "Dialog对话框",
                        path: "/m"
                    },{
                        name: "Tooltip文字提示",
                        path: "/m"
                    },{
                        name: "Popover弹出框",
                        path: "/m"
                    },{
                        name: "Popconfirm气泡确认框",
                        path: "/m"
                    },{
                        name: "Card卡片",
                        path: "/m"
                    },{
                        name: "Carousel走马灯",
                        path: "/m"
                    },{
                        name: "Collapse折叠面板",
                        path: "/m"
                    },{
                        name: "Timeline时间线",
                        path: "/m"
                    },{
                        name: "Divider分割线",
                        path: "/m"
                    },{
                        name: "Calendar日历",
                        path: "/m"
                    },{
                        name: "Image图片",
                        path: "/m"
                    },{
                        name: "Backtop回到顶部",
                        path: "/m"
                    },{
                        name: "InfiniteScroll无限滚动",
                        path: "/m"
                    },{
                        name: "Drawer抽屉",
                        path: "/m"
                    }
                ]
            }
        ],
        items: {
          isCollapse: false,
          isHorizontal: "vertical",
          menuBackgroundColor: "transparent"
        }
      };
    },
    methods: {
        getHeight() {
            let clientHeight = document.body.clientHeight;
            let mainClientHeight = clientHeight - 185;
            this.mainHeight = mainClientHeight;
        }
    },
    created:function(){
        this.$nextTick(function(){
            console.info("this.items==element==",this.items);
            this.getHeight();
        });
    }
  }
</script>