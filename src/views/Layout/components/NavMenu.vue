<template>
  <div id="navmenu">
    <el-menu :default-active="$route.path" class="el-menu-demo" background-color="#304156"
             text-color="#bfcbd9"
             active-text-color="#409EFF"
             @select="handleSelect">
      <div v-for="item in menus" v-show="!item.hidden">
        <router-link v-if="hasOneChildrenOption(item)" :to="{ path: item.path + '/' + item.children[0].path}">
          <el-menu-item :index="item.path + '/' + item.children[0].path">{{ item.name }}</el-menu-item>
        </router-link>
        <el-submenu v-else>
          <template slot="title">{{ item.name }}</template>
          <el-menu-item-group>
            <router-link v-for="childMenu in item.children" :key="childMenu" v-if="!childMenu.hidden" :to="{ path: item.path + '/' + childMenu.path }">
              <el-menu-item :index="item.path + '/' + childMenu.path">{{ childMenu.name }}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
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
  #navmenu{overflow-x: hidden!important;}
</style>
