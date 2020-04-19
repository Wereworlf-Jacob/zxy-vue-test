<template>
    <div class="layoutDiv">
        <!-- <component :is="colorShow"></component> -->
        <router-view/>
    </div>
</template>
<script>
// import aaa from '@/components/Input1/aaa'
export default {
    name: 'Select'
    // components:{
    //     aaa: aaa
    // },
    // data() {
    //     return{
    //         aaa: aaa,
    //     }
    // },
    // computed: {
    //     colorShow() {
    //         return this.aaa
    //     }
    // },
}
</script>