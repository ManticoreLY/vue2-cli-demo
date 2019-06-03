<template>
    <div>
      <el-form ref="form" :model="channelItem" label-width="120px">
        <el-form-item label="名称">
          <el-input v-model="channelItem.title"></el-input>
        </el-form-item>
        <el-form-item label="选择新闻">
          <el-select v-model="channelItem.news"></el-select>
        </el-form-item>
        <el-form-item label="选择文章">
          <el-select v-model="channelItem.articles"></el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveForm">保存</el-button>
          <el-button type="" @click="closeForm">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: 'edit',
    data() {
      return {
        channelItem: {
          title: '',
          news: [],
          articles: []
        }
      }
    },
    methods: {
      editForm(entity) {
        this.channelItem = Object.assign(this.channelItem, entity)
      },
      saveForm() {
      },
      closeForm() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>

</style>
