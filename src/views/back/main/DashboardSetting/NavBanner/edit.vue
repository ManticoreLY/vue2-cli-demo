<template>
    <div>
      <el-form ref="form" :model="NavBanner" label-width="120px" :rules="rules">
        <el-form-item label="选择类型">
          <el-select v-model="obj" @change="handleChange" value-key="name">
            <el-option v-for="(item, index) in dictionary.NavBanners" :key="index" :value="item" :label="item.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传图片" prop="img">
          <!--<el-image v-if="NavBanner.img" :src="NavBanner.img" style="width: 200px;height: 200px"></el-image>-->
          <file-uploader :http-request="fileUploadRequest" :on-remove="handleRemove" :fileList="getFileList([NavBanner.img])" :limit="1"></file-uploader>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveForm">保存</el-button>
          <el-button type="" @click="closeForm">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import NavBannerApi from '@/api/HomePage/NavBanner'
  import FileUploader from '@/components/FileUploader'
  import { uploadFile } from '@/utils/ali-upload'
  import { mapGetters } from 'vuex'
  export default {
    name: 'edit',
    components: {
      FileUploader
    },
    data() {
      return {
        obj: null,
        NavBanner: {
          name: '',
          img: '',
          url: ''
        },
        isUpdate: false,
        rules: {
          name: [
            { required: true, trigger: 'blur', message: '请填写频道名称' }
          ]
        }
      }
    },
    computed: {
      ...mapGetters(['dictionary'])
    },
    methods: {
      editForm(entity) {
        this.isUpdate = true
        this.obj = this.NavBanner = Object.assign(this.NavBanner, entity)
      },
      saveForm() {
        this.$refs['form'].validate(valid => {
          if (valid) {
            if (this.isUpdate) {
              NavBannerApi.update(this.NavBanner).then(data => {
                this.$message.warning('修改成功！')
                this.closeForm()
              }).catch(err => {
                console.log(err)
              })
            } else {
              NavBannerApi.save(this.NavBanner).then(data => {
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
      handleChange(opt) {
        this.NavBanner = Object.assign(this.NavBanner, opt)
      },
      handleRemove() {
        this.NavBanner.img = ''
      },
      getFileList(...url) {
        const objs = url.map(l => {
          return { name: 'img', url: l }
        })
        return [].concat(...objs)
      },
      fileUploadRequest(opt) {
        uploadFile(
          opt.file,
          res => {
            this.NavBanner.icon = res.url
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
