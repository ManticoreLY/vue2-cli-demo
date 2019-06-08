<template>
    <div>
      <el-form ref="form" :model="disease" label-width="120px" :rules="rules">
        <el-form-item label="疾病分类:" prop="type">
          <el-select v-model="disease.type">
            <el-option v-for="opt in types" :key="opt" :value="opt.value" :label="opt.name"></el-option>
          </el-select>
          <el-popover placement="bottom" width="400" trigger="click">
            <el-form ref="typeForm" label-width="80px">
              <el-form-item label="分类名称">
                <el-input v-model="newType"></el-input>
              </el-form-item>
              <el-form-item align="center">
                <el-button type="primary" size="medium" @click="saveType">保存分类</el-button>
              </el-form-item>
            </el-form>
            <el-button type="primary" size="medium" class="el-icon-plus" slot="reference">增加分类</el-button>
          </el-popover>
        </el-form-item>
        <el-form-item label="名称:" prop="name">
          <el-input v-model="disease.name"></el-input>
        </el-form-item>
        <el-form-item label="是否子分类:" prop="isChildren">
          <el-radio v-model="disease.isChildren" label="1">是</el-radio>
          <el-radio v-model="disease.isChildren" label="0">否</el-radio>
        </el-form-item>
        <el-form-item label="上级选择:" v-if="disease.isChildren === '1'">
          <el-select v-model="disease.sub">
            <el-option v-for="item in 4" :key="item" :value="item" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="治疗药物:">
          <el-select v-model="disease.medicines">
            <el-option v-for="item in 10" :key="item" value="2" label="阿帕拉霉"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveForm">保存</el-button>
          <el-button @click="closeForm">关闭</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: 'edit',
    data() {
      return {
        disease: {
          type: null,
          name: '',
          isChildren: '',
          medicines: ''
        },
        newType: '',
        rules: {

        },
        types: [
          { name: '常见传染病、慢性病', value: 1 },
          { name: '癌症、肿瘤', value: 2 }
        ]
      }
    },
    methods: {
      editForm(disease) {
        this.disease = Object.assign(this.disease, disease)
      },
      saveType() {},
      saveForm() {
      },
      closeForm() {
        this.$refs['form'].resetFields()
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>

</style>
