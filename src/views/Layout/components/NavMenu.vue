<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-menu :default-active="$route.path" class="el-menu-demo" background-color="#304156"
             text-color="#bfcbd9"
             active-text-color="#409EFF"
             @select="handleSelect">
      <div v-for="item in menus" v-show="!item.hidden">
        <router-link v-if="hasOneChildrenOption(item)" :to="{ path: item.path }">
          <el-menu-item :index="item.path + item.children[0].path">{{ item.name }}</el-menu-item>
        </router-link>
        <el-submenu v-else>
          <template slot="title">{{ item.name }}</template>
          <el-menu-item-group>
            <router-link v-for="(childMenu, i) in item.children" :key="i" v-if="!childMenu.hidden" :to="{ path: item.path }">
              <el-menu-item :index="item.path + childMenu.path">{{ childMenu.name }}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </el-scrollbar>
</template>

<script>
    // import { mapGetters } from 'vuex'
    import { asyncRouterMap } from '@/router'

    export default {
      name: 'NavMenu',
      props: {
        activeIndex: {
          type: String,
          default: '1'
        }
      },
      data() {
        return {}
      },
      computed: {
        menus() {
          return asyncRouterMap
        }
      },
      mounted() {
        console.log(this.menus)
      },
      methods: {
        hasOneChildrenOption(item) {
          const children = item.children.filter(item => !item.hidden)
          if (children.length === 1) {
            return true
          }
          return false
        },
        handleSelect(opt) {
          console.log(opt)
        }
      }
    }
</script>

<style scoped>
  >>>.scrollbar-wrapper {
    overflow-x: hidden !important;
  }
  >>>.scrollbar-wrapper .el-scrollbar__view {
    height: 100%;
  }
</style>
