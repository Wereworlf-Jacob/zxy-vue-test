<template>
    <div class="layoutDiv">
        <el-row>
            <h2>Checkbox 多选框</h2>
            <p>一组备选项中进行多选</p>
        </el-row>
        <el-row>
            <h2>基础用法</h2>
            <p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
            <p>在el-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。</p>
        </el-row>
        <el-row>
            <el-checkbox v-model="checked" true-label="选中" false-label="未选中" @change="aaa">备选项</el-checkbox>
        </el-row>
        <el-row>
            <h2>禁用状态</h2>
            <p>多选框不可用状态。</p>
            <p>设置disabled属性即可。</p>
        </el-row>
        <el-row>
            <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
            <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
        </el-row>
        <el-row>
            <h2>多选框组</h2>
            <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
            <p>checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 
                el-checkbox 的 label属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，
                如果存在指定的值则为选中状态，否则为不选中。
            </p>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="复选框 A"></el-checkbox>
                <el-checkbox label="复选框 B"></el-checkbox>
                <el-checkbox label="复选框 C"></el-checkbox>
                <el-checkbox label="禁用" disabled></el-checkbox>
                <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <h2>indeterminate 状态</h2>
            <p>indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
        </el-row>
        <el-row>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <h2>可选项目数量的限制</h2>
            <p>使用 min 和 max 属性能够限制可以被勾选的项目的数量。</p>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkedCities1" :min="1" :max="2">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <h2>按钮样式</h2>
            <p>按钮样式的多选组合。</p>
            <p>只需要把el-checkbox元素替换为el-checkbox-button元素即可。此外，Element 还提供了size属性。</p>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkboxGroup1">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkboxGroup3" size="small">
                <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
                <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <h2>带有边框</h2>
            <p>设置border属性可以渲染为带有边框的多选框。</p>
        </el-row>
        <el-row>
            <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
            <el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
        </el-row>
        <el-row>
            <el-checkbox v-model="checked5" label="备选项1" border size="medium"></el-checkbox>
            <el-checkbox v-model="checked6" label="备选项2" border size="medium"></el-checkbox>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkboxGroup5" size="small">
                <el-checkbox label="备选项1" border></el-checkbox>
                <el-checkbox label="备选项2" border disabled></el-checkbox>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
                <el-checkbox label="备选项1" border></el-checkbox>
                <el-checkbox label="备选项2" border></el-checkbox>
            </el-checkbox-group>
        </el-row>
        <el-row>
            <h2>Checkbox Attributes</h2>
            <el-table :data="checkboxData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Checkbox Events</h2>
            <el-table :data="eventsData" style="width: 100%">
                <el-table-column prop="name" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="param" label="类型" style="width: 20%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Checkbox-group Attributes</h2>
            <el-table :data="groupData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Checkbox-group Events</h2>
            <el-table :data="groupEventsData" style="width: 100%">
                <el-table-column prop="name" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="param" label="类型" style="width: 20%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Checkbox-button Attributes</h2>
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
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    data() {
        return {
            checked: true,
            checked1: false,
            checked2: true,
            checkList: ['选中且禁用','复选框 A'],

            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
            checkedCities1: ['上海', '北京'],
            cities: cityOptions,
            checkboxGroup1: ['上海'],
            checkboxGroup2: ['上海'],
            checkboxGroup3: ['上海'],
            checkboxGroup4: ['上海'],
            checked3: true,
            checked4: false,
            checked5: false,
            checked6: true,
            checkboxGroup5: [],
            checkboxGroup6: [],
            checkboxData: [
                {
                    param: "value / v-model",
                    explain: "绑定值",
                    type: "string / number / boolean",
                    choice: "—",
                    default: "—"
                },{
                    param: "label",
                    explain: "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
                    type: "string / number / boolean",
                    choice: "—",
                    default: "—"
                },{
                    param: "true-label",
                    explain: "选中时的值",
                    type: "string / number",
                    choice: "—",
                    default: "—"
                },{
                    param: "false-label",
                    explain: "没有选中时的值",
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
                    param: "border",
                    explain: "是否显示边框",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "size",
                    explain: "Checkbox 的尺寸，仅在 border 为真时有效",
                    type: "string",
                    choice: "medium / small / mini",
                    default: "—"
                },{
                    param: "name",
                    explain: "原生 name 属性",
                    type: "string",
                    choice: "—",
                    default: "—"
                },{
                    param: "checked",
                    explain: "当前是否勾选",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "indeterminate",
                    explain: "设置 indeterminate 状态，只负责样式控制",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                }
            ],
            eventsData: [
                {
                    name: "change",
                    explain: "当绑定值变化时触发的事件",
                    param: "更新后的值"
                }
            ],
            groupData: [
                {
                    param: "value / v-model",
                    explain: "绑定值",
                    type: "array",
                    choice: "—",
                    default: "—"
                },{
                    param: "size",
                    explain: "多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效",
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
                    param: "min",
                    explain: "可被勾选的 checkbox 的最小数量",
                    type: "number",
                    choice: "—",
                    default: "—"
                },{
                    param: "max",
                    explain: "可被勾选的 checkbox 的最大数量",
                    type: "number",
                    choice: "—",
                    default: "—"
                },{
                    param: "text-color",
                    explain: "按钮形式的 Checkbox 激活时的文本颜色",
                    type: "string",
                    choice: "—",
                    default: "#ffffff"
                },{
                    param: "fill",
                    explain: "按钮形式的 Checkbox 激活时的填充色和边框色",
                    type: "string",
                    choice: "—",
                    default: "#409EFF"
                }
            ],
            groupEventsData: [
                {
                    name: "change",
                    explain: "当绑定值变化时触发的事件",
                    param: "更新后的值"
                }
            ],
            buttonData: [
                {
                    param: "label",
                    explain: "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
                    type: "string / number / boolean",
                    choice: "—",
                    default: "—"
                },{
                    param: "true-label",
                    explain: "选中时的值",
                    type: "string / number",
                    choice: "—",
                    default: "—"
                },{
                    param: "false-label",
                    explain: "没有选中时的值",
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
                },{
                    param: "checked",
                    explain: "当前是否勾选",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                }
            ],
        };
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        aaa(val) {
            console.info(val);
        }
    }
}
</script>>
