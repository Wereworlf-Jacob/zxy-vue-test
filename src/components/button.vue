<template>
    <div class="layoutDiv">
        <el-row>
            <h2>Button 按钮</h2>
            <p>常用的操作按钮。</p>
        </el-row>
        <el-row>
            <h2>基础用法</h2>
            <p>基础的按钮用法。</p>
            <p>使用type、plain、round和circle属性来定义 Button 的样式。</p>
        </el-row>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button plain>朴素按钮</el-button>
            <el-button type="primary" plain>主要按钮</el-button>
            <el-button type="success" plain>成功按钮</el-button>
            <el-button type="info" plain>信息按钮</el-button>
            <el-button type="warning" plain>警告按钮</el-button>
            <el-button type="danger" plain>危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary" round>主要按钮</el-button>
            <el-button type="success" round>成功按钮</el-button>
            <el-button type="info" round>信息按钮</el-button>
            <el-button type="warning" round>警告按钮</el-button>
            <el-button type="danger" round>危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
        <el-row>
            <h2>禁用状态</h2>
            <p>按钮不可用状态。</p>
            <p>你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。</p>
        </el-row>
        <el-row>
            <el-button disabled>默认按钮</el-button>
            <el-button type="primary" disabled>主要按钮</el-button>
            <el-button type="success" disabled>成功按钮</el-button>
            <el-button type="info" disabled>信息按钮</el-button>
            <el-button type="warning" disabled>警告按钮</el-button>
            <el-button type="danger" disabled>危险按钮</el-button>
        </el-row>
        <el-row>
            <el-button plain disabled>朴素按钮</el-button>
            <el-button type="primary" plain disabled>主要按钮</el-button>
            <el-button type="success" plain disabled>成功按钮</el-button>
            <el-button type="info" plain disabled>信息按钮</el-button>
            <el-button type="warning" plain disabled>警告按钮</el-button>
            <el-button type="danger" plain disabled>危险按钮</el-button>
        </el-row>
        <el-row>
            <h2>文字按钮</h2>
            <p>没有边框和背景色的按钮。</p>
        </el-row>
        <el-row>
            <el-button type="text">文字按钮</el-button>
            <el-button type="text" disabled>文字按钮</el-button>
        </el-row>
        <el-row>
            <h2>图标按钮</h2>
            <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
            <p>设置icon属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用i标签即可，可以使用自定义图标。</p>
        </el-row>
        <el-row>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-row>
        <el-row>
            <h2>按钮组</h2>
            <p>以按钮组的方式出现，常用于多项类似操作。</p>
            <p>使用&lt;el-button-group&gt;&lt;/el-button-group&gt;标签来嵌套你的按钮。</p>
        </el-row>
        <el-row>
            <el-button-group>
                <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
            <el-button-group>
                <el-button type="primary" icon="el-icon-edit"></el-button>
                <el-button type="primary" icon="el-icon-share"></el-button>
                <el-button type="primary" icon="el-icon-delete"></el-button>
            </el-button-group>
        </el-row>
        <el-row>
            <h2>加载中</h2>
            <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
            <p>要设置为 loading 状态，只要设置loading属性为true即可。 :loading="true"</p>
            <p>点击下面按钮查看状态</p>
        </el-row>
        <el-row>
            <el-button type="primary" :loading="busyType" @click="busyButton">{{buttonText}}</el-button>
        </el-row>
        <el-row>
            <h2>不同尺寸</h2>
            <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
            <p>额外的尺寸：medium、small、mini，通过设置size属性来配置它们。</p>
        </el-row>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button size="medium">中等按钮</el-button>
            <el-button size="small">小型按钮</el-button>
            <el-button size="mini">超小按钮</el-button>
        </el-row>
        <el-row>
            <el-button round>默认按钮</el-button>
            <el-button size="medium" round>中等按钮</el-button>
            <el-button size="small" round>小型按钮</el-button>
            <el-button size="mini" round>超小按钮</el-button>
        </el-row>
        <el-row>
            <h2>Attributes</h2>
            <el-table :data="buttonData" style="width: 100%">
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
            buttonData: [
                {
                    param: "size",
                    explain: "尺寸",
                    type: "string",
                    choice: "medium / small / mini",
                    default: "—"
                },{
                    param: "type",
                    explain: "类型",
                    type: "string",
                    choice: "primary / success / warning / danger / info / text",
                    default: "—"
                },{
                    param: "plain",
                    explain: "是否朴素按钮",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "round",
                    explain: "是否圆角按钮",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "circle",
                    explain: "是否圆形按钮",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "loading",
                    explain: "是否加载中状态",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "disabled",
                    explain: "是否禁用状态",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "icon",
                    explain: "图标类名",
                    type: "string",
                    choice: "—",
                    default: "—"
                },{
                    param: "autofocus",
                    explain: "是否默认聚焦",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "native-type",
                    explain: "原生 type 属性",
                    type: "string",
                    choice: "button / submit / reset",
                    default: "button"
                }

            ],
            busyType: false,
            buttonText: "点我"
        }
    },
    methods: {
        busyButton() {
            let _this = this;
            this.busyType = true;
            this.buttonText = "加载中"
            setTimeout(function(){
                _this.busyType = false;
                _this.buttonText = "点我"
            },2000);
        }
    }
}
</script>>