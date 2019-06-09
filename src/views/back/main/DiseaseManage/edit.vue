<template>
    <div>
      <el-form ref="form" :model="disease" label-width="120px">
        <el-form-item label="疾病分类:" prop="types">
          <el-select v-model="disease.types">
            <el-option v-for="opt in DiseaseTypes" :key="opt" :value="opt.value" :label="opt.name"></el-option>
          </el-select>
          <el-popover placement="bottom" width="400" trigger="click">
            <el-form ref="typeForm" label-width="80px">
              <el-form-item label="分类名称">
                <el-input v-model="newType"></el-input>
              </el-form-item>
              <div style="text-align: center">
                <el-button type="primary" size="medium" @click="saveType">保存分类</el-button>
              </div>
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
            <el-option v-for="item in diseases" :key="item" :value="item.id" :label="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="治疗药物:">
          <el-select v-model="disease.medicines">
            <el-option v-for="item in treatedMedicines" :key="item" :value="item.id" :label="item.shotName"></el-option>
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
  import DiseaseApi from '@/api/disease'
  export default {
    name: 'edit',
    data() {
      return {
        disease: {
          types: '',
          name: '',
          isChildren: '',
          medicines: ''
        },
        newType: '',
        isUpdate: false,
        DiseaseTypes: [
          { name: '常见传染病、慢性病', value: '0' },
          { name: '癌症、肿瘤', value: '1' }
        ],
        treatedMedicines: [],
        diseases: []
      }
    },
    created() {
      this.$store.dispatch('getAllMedicines').then(data => {
        this.treatedMedicines = data
      })
      this.$store.dispatch('getAllDiseases').then(data => {
        this.diseases = data
      })
    },
    methods: {
      editForm(entity) {
        this.disease = Object.assign(this.disease, entity)
        if (this.disease.parentId === 0) {
          this.disease.isChildren = '0'
        } else {
          this.disease.isChildren = '1'
        }
        this.isUpdate = true
      },
      saveType() {},
      saveForm() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            if (this.isUpdate) {
              DiseaseApi.update(this.channelItem).then(data => {
                this.$message.warning('修改成功！')
              }).catch(err => {
                console.log(err)
              })
            } else {
              DiseaseApi.save(this.channelItem).then(data => {
                this.$message.warning('添加成功！')
              }).catch(err => {
                console.log(err)
              })
            }
          }
        })
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
