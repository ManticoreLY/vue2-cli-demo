<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <transition-group name="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>    
</template>

<script>
export default {
    name: 'Breadcrumb',
    data() {
        return {
            levelList: []
        }
    },
    methods: {
        getBreadcrumb() {
            const route = this.$route
            const matched = routes.filter(item => item.name === route.name)
            this.levelList = [].concat(matched[0])
        }
    },
    watch: {
        $route() {
            debugger
            this.getBreadcrumb()
        }
    }
}
</script>

<style scoped>

</style>
