<template>
  <div class="nav-menu">
    <el-menu :default-active="activeIndex" class="el-menu-demo" background-color="#545c64"
             text-color="#fff"  active-text-color="#ffd04b" @select="handleSelect">
      <template v-for="item in menus" v-show="!item.hidden" >
        <el-menu-item v-if="!item.children" :index="item.index"><router-link :to="{ path: item.path }">{{ item.name }}</router-link></el-menu-item>
        <el-submenu v-else-if="item.children" :index="item.index">
          <template slot="title">{{ item.name }}</template>
          <el-menu-item-group>
            <router-link :to="{ path: item.path }">
              <el-menu-item v-for="(childMenu, i) in item.children" :key="i" :index="childMenu.index">{{ childMenu.name }}</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      </template>
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
        handleSelect(opt) {
          console.log(opt)
        }
      }
    }
</script>

<style scoped>
.nav-menu{position: relative;width: 100%;height: 100%;margin: 0;padding: 0}
</style>
