<template>
    <div>
        <el-menu :default-active="activeIndex" router class="sideMenu" :background-color="menuBackgroundColor" :mode="isHorizontal" :collapse="isCollapse" :unique-opened=false :default-openeds="openeds" @select="handleSelect">
            <label :key="index" v-for="(item, index) in router">
                <el-menu-item v-if="!item.children" :index="item.path">{{item.name}}</el-menu-item>
                <el-submenu v-else :index="item.path">
                    <template slot="title">{{ item.name }}</template>
                    <Menu :router="item.children" :items="items"></Menu>
                </el-submenu>
            </label>
        </el-menu>
    </div>
</template>
<script>

    export default {
        name: "Menu",
        props: ["router","items"], // Menu 组件接受一个 router 作为菜单数据
        data() {
            return {
                activeIndex: this.$route.path,
                openeds: ['/Basic'],
                isCollapse: this.items.isCollapse, //设置子菜单是否水平横向展开  true为水平向右  false为垂直向下
                isHorizontal: this.items.isHorizontal, //设置菜单是横向或纵向  horizontal为横向  vertical为纵向
                menuBackgroundColor: this.items.menuBackgroundColor
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created:function(){
            this.$nextTick(function(){
                let items= this.items;
            });
        }
    };
    
</script>