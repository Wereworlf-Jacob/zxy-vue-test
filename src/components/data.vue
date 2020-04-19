<template>
    <div>
        <!-- <div class="logoText" @click="clickLogoText">My Vue</div> -->
        <div style="width: 300px; height: 300px;" id="line"></div>
        <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
            <!--缩放-->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <!--定位-->
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <!--点-->
            <bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
                <!--提示信息-->
                <bm-info-window :show="map.show">天津市公安局</bm-info-window>
            </bm-marker>
        </baidu-map>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            map:{
                    center: {lng: 117.101278, lat: 39.114139},
                    zoom: 15,
                    show: true,
                    dragging: true
                }
        }
        
    },
    created:function(){
        this.$nextTick(function(){
            this.creatLine();
        });
    },
    methods: {
        creatLine: function() {
            var myChart = this.echarts.init(document.getElementById('line'));
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
        handler ({BMap, map}) {
            let me = this;
            console.log(BMap, map)
            // 鼠标缩放
            map.enableScrollWheelZoom(true);
            // 点击事件获取经纬度
            map.addEventListener('click', function (e) {
                console.log(e.point.lng, e.point.lat)
            })
        },
        // clickLogoText: function() {
        //     this.$router.push({name:'FirstIndex'});
        // }
    }
}
</script>
<style scoped>
    .map {
        width: 100%;
        height: 400px;
    }
</style>