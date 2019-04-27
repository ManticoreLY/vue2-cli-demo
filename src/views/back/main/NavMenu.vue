<template>
    <div>
      <el-menu default-active="1" class="el-menu-demo" mode="horizontal" background-color="#545c64"
               text-color="#fff"  active-text-color="#ffd04b" @select="handleSelect">
        <template v-for="item in menus" v-if="!item.hidden">
          <el-menu-item v-if="!item.children" :index="item.index">{{ item.name }}</el-menu-item>
          <el-submenu v-else :index="item.index">
            <template slot="title">{{ item.name }}</template>
            <el-menu-item-group>
              <el-menu-item v-for="(childMenu, i) in item.children" :keys="i" :index="childMenu.index">{{ childMenu.name }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
      name: 'NavMenu',
      data() {
        return {}
      },
      computed: {
        ...mapGetters(['menus'])
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

</style>
