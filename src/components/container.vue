<template>
    <div class="layoutDiv">
        <el-row>
            <h2>Container 布局容器</h2>
            <p>用于布局的容器组件，方便快速搭建页面的基本结构:</p>
            <p>&lt;el-container&gt;：外层容器。当子元素中包含 &lt;el-header&gt; 或 &lt;el-footer&gt; 时，全部子元素会垂直上下排列，否则会水平左右排列。</p>
            <p>&lt;el-header&gt;：顶栏容器。</p>
            <p>&lt;el-aside&gt;：侧边栏容器。</p>
            <p>&lt;el-main&gt;：主要区域容器。</p>
            <p>&lt;el-footer&gt;：底栏容器。</p>
        </el-row>
        <el-row>
            <p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，&lt;el-container&gt; 的子元素只能是后四者，后四者的父元素也只能是 &lt;el-container&gt;。</p>
        </el-row>
        <el-row>
            <h2>常见页面布局</h2>
        </el-row>
        <el-row>
            <template>
                <el-container>
                    <el-header>Header</el-header>
                    <el-main>Main</el-main>
                </el-container>
            </template>
        </el-row>
        <el-row>
            <template>
                <el-container>
                    <el-header>Header</el-header>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </template>
        </el-row>
        <el-row>
            <template>
                <el-container>
                    <el-aside width="200px">Aside</el-aside>
                    <el-main>Main</el-main>
                </el-container>
            </template>
        </el-row>
        <el-row>
            <template>
                <el-container>
                    <el-header>Header</el-header>
                    <el-container>
                        <el-aside width="200px">Aside</el-aside>
                        <el-main>Main</el-main>
                    </el-container>
                </el-container>
            </template>
        </el-row>
        <el-row>
            <template>
                <el-container>
                    <el-header>Header</el-header>
                    <el-container>
                        <el-aside width="200px">Aside</el-aside>
                        <el-container>
                        <el-main>Main</el-main>
                        <el-footer>Footer</el-footer>
                        </el-container>
                    </el-container>
                </el-container>
            </template>
        </el-row>
        <el-row>
            <template>
                <el-container>
                    <el-aside width="200px">Aside</el-aside>
                    <el-container>
                        <el-header>Header</el-header>
                        <el-main>Main</el-main>
                    </el-container>
                </el-container>
            </template>
        </el-row>
        <el-row>
            <template>
                <el-container>
                    <el-aside width="200px">Aside</el-aside>
                    <el-container>
                        <el-header>Header</el-header>
                        <el-main>Main</el-main>
                        <el-footer>Footer</el-footer>
                    </el-container>
                </el-container>
            </template>
        </el-row>
        <el-row>
            <h2>参数说明</h2>
        </el-row>
        <el-row>
            <h2>Container Attributes</h2>
            <el-table :data="containerData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Header Attributes</h2>
            <el-table :data="headerData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Aside Attributes</h2>
            <el-table :data="asideData" style="width: 100%">
                <el-table-column prop="param" label="参数" style="width: 10%;"></el-table-column>
                <el-table-column prop="explain" label="说明" style="width: 30%;"></el-table-column>
                <el-table-column prop="type" label="类型" style="width: 20%;"></el-table-column>
                <el-table-column prop="choice" label="可选值" style="width: 30%;"></el-table-column>
                <el-table-column prop="default" label="默认值" style="width: 10%;"></el-table-column>
            </el-table>
        </el-row>
        <el-row>
            <h2>Footer Attributes</h2>
            <el-table :data="footerData" style="width: 100%">
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
                containerData: [{
                    param: "direction",
                    explain: "子元素的排列方向",
                    type: "string",
                    choice: "horizontal / vertical",
                    default: "子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal"
                }],
                headerData: [{
                    param: "height",
                    explain: "顶栏高度",
                    type: "string",
                    choice: "—",
                    default: "60px"
                }],
                asideData: [{
                    param: "width",
                    explain: "侧边栏宽度",
                    type: "string",
                    choice: "—",
                    default: "300px"
                }],
                footerData: [{
                    param: "height",
                    explain: "底栏高度",
                    type: "string",
                    choice: "—",
                    default: "60px"
                }]
            }
        }
    }
</script>