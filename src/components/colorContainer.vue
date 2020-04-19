<template>
    <div class="layoutDiv">
        <!-- <color></color> -->
        <component :is="colorShow"></component>
    </div>
</template>
<script>
import Color from '@/components/Color'
export default {
    components:{
        color: Color
    },
    data() {
        return{
            color: Color,
        }
    },
    computed: {
        colorShow() {
            return this.color
        }
    },
}
</script>