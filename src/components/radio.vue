<template>
    <div class="layoutDiv">
        <el-row>
            <h2>Radio 单选框</h2>
            <p>在一组备选项中进行单选</p>
        </el-row>
        <el-row>
            <h2>基础用法</h2>
            <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
            <p>要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。</p>
        </el-row>
        <el-row>
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
        </el-row>
        <el-row>
            <h2>禁用状态</h2>
            <p>单选框不可用的状态。</p>
            <p>只要在el-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。</p>
        </el-row>
        <el-row>
            <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
            <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
        </el-row>
        <el-row>
            <h2>单选框组</h2>
            <p>适用于在多个互斥的选项中选择的场景</p>
            <p>结合el-radio-group元素和子元素el-radio可以实现单选组，在el-radio-group中绑定v-model，在el-radio中设置好label即可，无需再给每一个el-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。</p>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio2" @change="radioChange()">
                <el-radio :label="3">备选项1</el-radio>
                <el-radio :label="6">备选项2</el-radio>
                <el-radio :label="9">备选项3</el-radio>
            </el-radio-group>
        </el-row>
        <el-row>
            <h2>按钮样式</h2>
            <p>按钮样式的单选组合。</p>
            <p>只需要把el-radio元素换成el-radio-button元素即可，此外，Element 还提供了size属性。</p>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio3">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio4" size="medium">
                <el-radio-button label="上海" ></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio5" size="small">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京" disabled ></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio6" disabled size="mini">
                <el-radio-button label="上海"></el-radio-button>
                <el-radio-button label="北京"></el-radio-button>
                <el-radio-button label="广州"></el-radio-button>
                <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
        </el-row>
        <el-row>
            <h2>带有边框</h2>
            <p>设置border属性可以渲染为带有边框的单选框。</p>
        </el-row>
        <el-row>
            <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
            <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
        </el-row>
        <el-row>
            <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
            <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
        </el-row>
        <el-row>
            <el-radio-group v-model="radio9" size="small">
                <el-radio label="1" border>备选项1</el-radio>
                <el-radio label="2" border disabled>备选项2</el-radio>
            </el-radio-group>
        </el-row>
        <el-row>
            <el-radio-group v-model="radioa" size="mini" disabled>
                <el-radio label="1" border>备选项1</el-radio>
                <el-radio label="2" border>备选项2</el-radio>
            </el-radio-group>
        </el-row>
        <el-row>
            <h2>Radio Attributes</h2>
            <el-table :data="radioData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Radio Events</h2>
            <el-table :data="eventData" style="width: 100%">
                <el-table-column prop="name" label="事件名称" style="width: 20%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="param" label="回调参数" style="width: 50%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Radio-group Attributes</h2>
            <el-table :data="groupData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Radio-group Events</h2>
            <el-table :data="groupEventData" style="width: 100%">
                <el-table-column prop="name" label="参数" style="width: 20%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="param" label="类型" style="width: 50%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Radio-button Attributes</h2>
            <el-table :data="radioButtonData" style="width: 100%">
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
        return{
            radio: '1',
            radio1: '选中且禁用',
            radio2: 3,
            radio3: '上海',
            radio4: '上海',
            radio5: '上海',
            radio6: '上海',
            radio7: '1',
            radio8: '1',
            radio9: '1',
            radioa: '1',
            radioData: [
                {
                    param: "value / v-model",
                    explain: "绑定值",
                    type: "string / number / boolean",
                    choice: "—",
                    default: "—"
                },{
                    param: "label",
                    explain: "Radio 的 value",
                    type: "string / number / boolean",
                    choice: "—",
                    default: "—"
                },{
                    param: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "border",
                    explain: "是否显示边框",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "size",
                    explain: "Radio 的尺寸，仅在 border 为真时有效",
                    type: "string",
                    choice: "medium / small / mini",
                    default: "—"
                },{
                    param: "name",
                    explain: "原生 name 属性",
                    type: "string",
                    choice: "—",
                    default: "—"
                }
            ],
            eventData: [
                {
                    name: "change",
                    explain: "绑定值变化时触发的事件",
                    param: "选中的 Radio label 值"
                }
            ],
            groupData: [
                {
                    param: "value / v-model",
                    explain: "绑定值",
                    type: "string / number / boolean",
                    choice: "—",
                    default: "—"
                },{
                    param: "size",
                    explain: "单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效",
                    type: "string",
                    choice: "medium / small / mini",
                    default: "—"
                },{
                    param: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "text-color",
                    explain: "按钮形式的 Radio 激活时的文本颜色",
                    type: "string",
                    choice: "—",
                    default: "#ffffff"
                },{
                    param: "fill",
                    explain: "按钮形式的 Radio 激活时的填充色和边框色",
                    type: "string",
                    choice: "—",
                    default: "#409EFF"
                }
            ],
            groupEventData: [
                {
                    name: "change",
                    explain: "绑定值变化时触发的事件",
                    param: "选中的 Radio label 值"
                }
            ],
            radioButtonData: [
                {
                    param: "label",
                    explain: "Radio 的 value",
                    type: "string / number",
                    choice: "—",
                    default: "—"
                },{
                    param: "disabled",
                    explain: "是否禁用",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "name",
                    explain: "原生 name 属性",
                    type: "string",
                    choice: "—",
                    default: "—"
                }
            ],

        };
    },
    methods: {
        radioChange(radio2) {
            if(radio2 == 3) {
                this.$message("备选项1");
            }else if(radio2 == 6) {
                this.$message("备选项2");
            }else{
                this.$message("备选项3");
            }
        },
    }
}
</script>