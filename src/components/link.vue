<template>
    <div class="layoutDiv">
        <el-row>
            <h2>Link 文字链接</h2>
            <p>文字超链接</p>
        </el-row>
        <el-row>
            <h2>基础用法</h2>
            <p>基础的文字链接用法。</p>
        </el-row>
        <el-row>
            <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
            <el-link type="primary">主要链接</el-link>
            <el-link type="success">成功链接</el-link>
            <el-link type="warning">警告链接</el-link>
            <el-link type="danger">危险链接</el-link>
            <el-link type="info">信息链接</el-link>
        </el-row>
        <el-row>
            <h2>禁用状态</h2>
            <p>文字链接不可用状态。</p>
        </el-row>
        <el-row>
            <el-link disabled>默认链接</el-link>
            <el-link type="primary" disabled>主要链接</el-link>
            <el-link type="success" disabled>成功链接</el-link>
            <el-link type="warning" disabled>警告链接</el-link>
            <el-link type="danger" disabled>危险链接</el-link>
            <el-link type="info" disabled>信息链接</el-link>
        </el-row>
        <el-row>
            <h2>下划线</h2>
            <p>文字链接下划线。</p>
        </el-row>
        <el-row>
            <el-link :underline="false">无下划线</el-link>
            <el-link>有下划线</el-link>
        </el-row>
        <el-row>
            <h2>图标</h2>
            <p>带图标的文字链接可增强辨识度。</p>
        </el-row>
        <el-row>
            <el-link icon="el-icon-edit">编辑</el-link>
            <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
        </el-row>
        <el-row>
            <h2>Attributes</h2>
            <el-table :data="linkData" style="width: 100%">
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
            linkData: [
                {
                    param: "type",
                    explain: "类型",
                    type: "string",
                    choice: "primary / success / warning / danger / info",
                    default: "default"
                },{
                    param: "underline",
                    explain: "是否下划线",
                    type: "boolean",
                    choice: "—",
                    default: "true"
                },{
                    param: "disabled",
                    explain: "是否禁用状态",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "href",
                    explain: "原生 href 属性",
                    type: "string",
                    choice: "—",
                    default: "—"
                },{
                    param: "icon",
                    explain: "图标类名",
                    type: "string",
                    choice: "—",
                    default: "—"
                }
            ]
        }
    }
}
</script>>