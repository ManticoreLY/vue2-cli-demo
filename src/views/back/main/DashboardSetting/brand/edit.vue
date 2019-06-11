<template>
    <div>
      <el-form ref="form" :model="brand" label-width="120px" :rules="rules">
        <el-form-item label="图标" prop="icon">
          <el-image v-if="brand.icon" :src="brand.icon" style="width: 200px;height: 200px"></el-image>
          <file-uploader v-else :http-request="fileUploadRequest" :limit="1" :show-file-list="1"></file-uploader>
        </el-form-item>
        <el-form-item label="品牌名称" prop="title">
          <el-input v-model="brand.title"></el-input>
        </el-form-item>
        <el-form-item label="文本内容" prop="content">
          <el-input v-model="brand.content" type="textarea" :col="3" maxlength="100" show-word-limit></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveForm">保存</el-button>
          <el-button type="" @click="closeForm">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import BrandApi from '@/api/HomePage/brand'
  import FileUploader from '@/components/FileUploader'
  import { uploadFile } from '@/utils/ali-upload'
  export default {
    name: 'edit',
    components: {
      FileUploader
    },
    data() {
      return {
        brand: {
          icon: '',
          title: '',
          content: ''
        },
        isUpdate: false,
        rules: {
          name: [
            { required: true, trigger: 'blur', message: '请填写频道名称' }
          ]
        }
      }
    },
    methods: {
      editForm(entity) {
        this.isUpdate = true
        this.brand = Object.assign(this.brand, entity)
      },
      saveForm() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            if (this.isUpdate) {
              BrandApi.update(this.brand).then(data => {
                this.$message.warning('修改成功！')
                this.closeForm()
              }).catch(err => {
                console.log(err)
              })
            } else {
              BrandApi.save(this.brand).then(data => {
                this.$message.warning('添加成功！')
                this.closeForm()
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
      },
      fileUploadRequest(opt) {
        uploadFile(
          opt.file,
          res => {
            this.brand.icon = res.url
            opt.onSuccess(res)
          },
          err => {
            console.log(err)
          }
        )
      }
    }
  }
</script>

<style scoped>

</style>
