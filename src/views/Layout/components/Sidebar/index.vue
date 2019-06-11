<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="menu in menus" :key="menu.name" :item="menu" :base-path="menu.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
// import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import { asyncRouterMap } from '@/router'

export default {
  name: 'index',
  components: { SidebarItem },
  computed: {
    menus() {
      return this.asyncRouterMap
    }
  }
}
</script>
