<template>
    <el-autocomplete class="inline-input" v-model="state" :fetch-suggestions="querySearch" placeholder="请输入内容" 
    :trigger-on-focus="focus" @select="handleSelect" searchData></el-autocomplete>
</template>
<script>
export default {
    props: ["searchData"], // Menu 组件接受一个 router 作为菜单数据
    data() {
        return{
            state: this.searchData.state,
            focus: this.searchData.focus,
            restaurants: []
        }
    },
    methods: {
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        }
    },
    mounted() {
        this.restaurants = this.searchData.searchInfo;
    }
}
</script>>