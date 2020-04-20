<!--color.vue-->
<template>
    <div class="colorPage">
        <el-row>
            <h3>主色</h3>
            <p>Element 主要品牌颜色是鲜艳、友好的蓝色。</p>
            <el-col :span="8">
                <div class="BrandColorBox">Brand Color
                    <div>#409EFF</div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <h3>辅助色</h3>
            <p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
            <el-col :span="5">
                <div class="SuccessColorBox">Success
                    <div>#67C23A</div>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="WarningColorBox">Warning
                    <div>#E6A23C</div>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="DangerColorBox">Danger
                    <div>#F56C6C</div>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="InfoColorBox">Info
                    <div>#909399</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>