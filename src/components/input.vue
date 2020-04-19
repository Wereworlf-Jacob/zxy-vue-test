<template>
    <div class="layoutDiv">
        <el-row>
            <h2>Input 输入框</h2>
            <p>通过鼠标或键盘输入字符</p>
            <p style="background-color: #ffd9e3; padding: 10px; width: 70%;">
                Input 为受控组件，它总会显示 Vue 绑定值。  </br>
                通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。  </br>
                不支持 v-model 修饰符。
            </p>
        </el-row>
        <el-row>
            <h2>基础用法</h2>
        </el-row>
        <el-row>
            <el-col :span="4">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <h2>禁用状态</h2>
            <p>通过 disabled 属性指定是否禁用 input 组件</p>
        </el-row>
        <el-row>
            <el-col :span="4">
                <el-input placeholder="请输入内容" v-model="input" :disabled="true"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <h2>可清空</h2>
            <p>使用clearable属性即可得到一个可清空的输入框</p>
        </el-row>
        <el-row>
            <el-col :span="4">
                <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
            </el-col>
        </el-row>
        <el-row>
            <h2>密码框</h2>
            <p>使用show-password属性即可得到一个可切换显示隐藏的密码框</p>
        </el-row>
        <el-row>
            <el-col :span="4">
                <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
            </el-col>
        </el-row>
        <el-row>
            <h2>带 icon 的输入框</h2>
            <p>带有图标标记输入类型</p>
            <p>可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。</p>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="2" class="text">属性方式：</el-col>
            <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4">
                <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1"></el-input>
            </el-col>
            <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4">
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="2"  class="text">slot 方式：</el-col>
            <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4">
                <el-input placeholder="请选择日期" v-model="input3">
                    <i slot="suffix" class="el-input__icon el-icon-date"></i>
                </el-input>
            </el-col>
            <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4">
                <el-input placeholder="请输入内容" v-model="input4">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <h2>文本域</h2>
            <p>用于输入多行文本信息，通过将 type 属性的值指定为 textarea。</p>
            <p>文本域高度可通过 rows 属性控制</p>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <h2>可自适应文本高度的文本域</h2>
            <p>通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。</p>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="textarea2"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <h2>复合型输入框</h2>
            <p>可前置或后置元素，一般为标签或按钮</p>
            <p>可通过 slot 来指定在 input 中前置或者后置内容。</p>
        </el-row>
        <el-row>
            <el-col :span="18">
                <el-input placeholder="请输入内容" v-model="input1">
                    <template slot="prepend">Http://</template>
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="18">
                <el-input placeholder="请输入内容" v-model="input2">
                    <template slot="append">.com</template>
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="18">
                <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <h2>尺寸</h2>
            <p>可通过 size 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、small 和 mini 三种尺寸。</p>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input3"></el-input>
                </el-col>
                <el-col :span="6">
                    <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input4"></el-input>
                </el-col>
            </el-row>
            <el-row>
                <h2>带输入建议</h2>
                <p>根据输入内容提供对应的输入建议</p>
                <p>
                    autocomplete 是一个可带输入建议的输入框组件，fetch-suggestions 是一个返回输入建议的方法属性，如 querySearch(queryString, cb)，
                    在该方法中你可以在你的输入建议数据准备好时通过 cb(data) 返回到 autocomplete 组件中。
                </p>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-row type="flex" justify="center">
                        <el-col :span="18">激活即列出输入建议</el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="18">
                            <el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="18">封装部件调用（激活即列出输入建议）</el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="18">
                            <autocomplete :searchData="searchData"></autocomplete>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="12">
                    <el-row type="flex" justify="center">
                        <el-col :span="18">输入后匹配输入建议</el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="18">
                            <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
                        </el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="18">封装部件调用（输入后匹配输入建议）</el-col>
                    </el-row>
                    <el-row type="flex" justify="center">
                        <el-col :span="18">
                            <autocomplete :searchData="searchData1"></autocomplete>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row>
                <h2>自定义模板</h2>
                <p>可自定义输入建议的显示</p>
                <p>使用scoped slot自定义输入建议的模板。该 scope 的参数为item，表示当前输入建议对象。</p>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-autocomplete popper-class="my-autocomplete" v-model="state" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
                        <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
                        <template slot-scope="{ item }">
                            <div class="name">{{ item.value }}</div>
                            <span class="addr">{{ item.address }}</span>
                        </template>
                    </el-autocomplete>
                </el-col>
            </el-row>
            <el-row>
                <h2>输入长度限制</h2>
                <p>maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。</p>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-input type="text" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit></el-input>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit></el-input>
                </el-col>
            </el-row>
        </el-row>
        <el-row>
            <h2>Input Attributes</h2>
            <el-table :data="inputData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Input Slots</h2>
            <el-table :data="inputSlotsData" style="width: 100%">
                <el-table-column prop="name" label="name" style="width: 40%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 60%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Input Events</h2>
            <el-table :data="inputEventsData" style="width: 100%">
                <el-table-column prop="name" label="事件名称" style="width: 20%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 40%;"></el-table-column>
                <el-table-column prop="param" label="回调参数" style="width: 40%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Input Methods</h2>
            <el-table :data="inputMethodsData" style="width: 100%">
                <el-table-column prop="name" label="方法名" style="width: 20%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 40%;"></el-table-column>
                <el-table-column prop="param" label="参数" style="width: 40%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Autocomplete Attributes</h2>
            <el-table :data="autocompleteAttributesData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Autocomplete Slots</h2>
            <el-table :data="autocompleteSlotsData" style="width: 100%">
                <el-table-column prop="name" label="name" style="width: 40%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 60%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Autocomplete Scoped Slot</h2>
            <el-table :data="autocompleteScopedSlotData" style="width: 100%">
                <el-table-column prop="name" label="name" style="width: 40%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 60%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Autocomplete Events</h2>
            <el-table :data="autocompleteEventsData" style="width: 100%">
                <el-table-column prop="name" label="事件名称" style="width: 20%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 40%;"></el-table-column>
                <el-table-column prop="param" label="回调参数" style="width: 40%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Autocomplete Methods</h2>
            <el-table :data="autocompleteMethodsData" style="width: 100%">
                <el-table-column prop="name" label="方法名" style="width: 20%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 40%;"></el-table-column>
                <el-table-column prop="param" label="参数" style="width: 40%;"></el-table-column>
            </el-table>
        </el-row>
    </div>
</template>
<script>
import Autocomplete from '@/components/theme/Autocomplete'
export default {
    components:{
        autocomplete: Autocomplete
    },
    data() {
        return{
            input: '',
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            textarea: '',
            textarea1: '',
            textarea2: '',
            select: '',
            restaurants: [],
            state: '',
            state1: '',
            state2: '',
            text: '',
            searchData: {
                state: '',
                focus: true,
                searchInfo: [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" }
                ]
            },
            searchData1: {
                state: '',
                focus: false,
                searchInfo: [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" }
                ]
            },
            inputData: [
                {
                    param: "type",
                    explain: "类型",
                    type: "string",
                    choice: "text，textarea 和其他 原生 input 的 type 值",
                    default: "text"
                },{
                    param: "value / v-model",
                    explain: "绑定值",
                    type: "string / number",
                    choice: "—",
                    default: "—"
                },{
                    param: "maxlength",
                    explain: "原生属性，最大输入长度",
                    type: "number",
                    choice: "—",
                    default: "—"
                },{
                    param: "minlength",
                    explain: "原生属性，最小输入长度",
                    type: "number",
                    choice: "—",
                    default: "—"
                },{
                    param: "show-word-limit",
                    explain: "是否显示输入字数统计，只在 type = 'text' 或 type = 'textarea' 时有效",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "placeholder",
                    explain: "输入框占位文本",
                    type: "string",
                    choice: "—",
                    default: "—"
                },{
                    param: "clearable",
                    explain: "是否可清空",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "show-password",
                    explain: "是否显示切换密码图标",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "disabled",
                    explain: "禁用",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "size",
                    explain: "输入框尺寸，只在 type!='textarea' 时有效",
                    type: "string",
                    choice: "medium / small / mini",
                    default: "—"
                },{
                    param: "prefix-icon",
                    explain: "输入框头部图标",
                    type: "string",
                    choice: "—",
                    default: "—"
                },{
                    param: "suffix-icon",
                    explain: "输入框尾部图标",
                    type: "string",
                    choice: "—",
                    default: "—"
                },{
                    param: "rows",
                    explain: "输入框行数，只对 type='textarea' 有效",
                    type: "number",
                    choice: "—",
                    default: "2"
                },{
                    param: "autosize",
                    explain: "自适应内容高度，只对 type='textarea' 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }",
                    type: "boolean / object",
                    choice: "—",
                    default: "false"
                },{
                    param: "autocomplete",
                    explain: "原生属性，自动补全",
                    type: "string",
                    choice: "on, off",
                    default: "off"
                },{
                    param: "auto-complete",
                    explain: "下个主版本弃用",
                    type: "string",
                    choice: "on, off",
                    default: "off"
                },{
                    param: "name",
                    explain: "原生属性",
                    type: "string",
                    choice: "—",
                    default: "—"
                },{
                    param: "readonly",
                    explain: "原生属性，是否只读",
                    type: "boolean",
                    choice: "—",
                    default: "false"
                },{
                    param: "max",
                    explain: "原生属性，设置最大值",
                    type: "—",
                    choice: "—",
                    default: "—"
                },{
                    param: "min",
                    explain: "原生属性，设置最小值",
                    type: "—",
                    choice: "—",
                    default: "—"
                },{
                    param: "step",
                    explain: "原生属性，设置输入字段的合法数字间隔",
                    type: "—",
                    choice: "—",
                    default: "—"
                },{
                    param: "resize",
                    explain: "控制是否能被用户缩放",
                    type: "string",
                    choice: "none, both, horizontal, vertical",
                    default: "—"
                },{
                    param: "autofocus",
                    explain: "原生属性，自动获取焦点",
                    type: "boolean",
                    choice: "true, false",
                    default: "false"
                },{
                    param: "form",
                    explain: "原生属性",
                    type: "string",
                    choice: "—",
                    default: "—"
                },{
                    param: "label",
                    explain: "输入框关联的label文字",
                    type: "string",
                    choice: "—",
                    default: "—"
                },{
                    param: "tabindex",
                    explain: "输入框的tabindex",
                    type: "string",
                    choice: "—",
                    default: "—"
                },{
                    param: "validate-event",
                    explain: "输入时是否触发表单的校验",
                    type: "boolean",
                    choice: "—",
                    default: "true"
                }
            ],
            inputSlotsData: [],
            inputEventsData: [],
            inputMethodsData: [],
            autocompleteAttributesData: [],
            autocompleteSlotsData: [],
            autocompleteScopedSlotData: [],
            autocompleteEventsData: [],
            autocompleteMethodsData: []
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
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
          { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
          { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
          { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
          { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
          { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
          { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
          { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
          { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
          { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
          { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
          { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
          { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
          { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
          { "value": "枪会山", "address": "上海市普陀区棕榈路" },
          { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
          { "value": "钱记", "address": "上海市长宁区天山西路" },
          { "value": "壹杯加", "address": "上海市长宁区通协路" },
          { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
          { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
          { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
          { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
          { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
          { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
          { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
          { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
          { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
          { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
          { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
          { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
          { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
          { "value": "浏阳蒸菜", "address": "天山西路430号" },
          { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
          { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
          { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
          { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
          { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      },
      getData() {
            //发送get请求
            this.$http.get("/static/inputData.json").then(function(data){
                var json=data.body;
                this.inputSlotsData = json.inputSlotsData;
                this.inputEventsData = json.inputEventsData;
                this.inputMethodsData = json.inputMethodsData;
                this.autocompleteAttributesData = json.autocompleteAttributesData;
                this.autocompleteSlotsData = json.autocompleteSlotsData;
                this.autocompleteScopedSlotData = json.autocompleteScopedSlotData;
                this.autocompleteEventsData = json.autocompleteEventsData;
                this.autocompleteMethodsData = json.autocompleteMethodsData;
            },function(response){
                console.info("失败===", response);
            })
      }
    },
    mounted() {
        this.getData();//获取inpuData数据
        this.restaurants = this.loadAll();
    }
}
</script>