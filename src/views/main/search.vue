<template>
  <div style="background: #fcfcfc">
    <div class="main-page">
        <el-tabs type="card">
          <el-tab-pane v-for="(item, index) in items" :key="index" :label="item">
             <div class="tab-content">
               <el-select v-model="value" placeholder="" style="width:90%" clearable="false"
                         filterable
                         remote
                         :remote-method="remote_request"
                          reserve-keyword
                          :loading="loading"
                          suffix-icon="el-icon-search"
                         @keyup.enter.native="search">
                 <el-option v-for="(opt, idx) in search_options" :key="idx" :value="opt.id" :label="opt.title">{{opt.title}}</el-option>
               </el-select>
               <a class="search-icon"><i title="查询" class="el-icon-search" @click="search"></i></a>
             </div>
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
    import searchApi from '@/api/search'

    export default {
      name: "search",
      data() {
        return{
          items:['国内版', '国际版'],
          value: [],
          form: {
            searchWord: '',
            addFlag: true
          },
          search_options: [],
          loading: false
        }
      },
      methods: {
        search() {
          var _this = this
          var text = document.querySelector('.el-input__inner').value
          if (!text) return
          else {
            searchApi.searchItems({ searchWord: text, addFlag: true }, function(data) {
              // console.log(data)
              // _this.$message.success('添加成功')
            }).catch(err => {
              console.log(err)
            })
          }
        },
        remote_request(searchWord) {
          var _this = this
          if (searchWord) {
            this.loading = true
            var form = { searchWord, addFlag: false }
            searchApi.searchItems(form, function(data) {
              _this.loading = false
              _this.search_options = [].concat(data['productList'])
              console.log(_this.search_options)
              _this.$forceUpdate()
            })
          } else {
            this.search_options = []
          }
          }

      }
    }
</script>

<style scoped>
.main-page{width:90%;margin: 20px auto;}
.tab-content{border: 1px solid #eee;height: 300px;border-top:none;padding-top:15px}
>>> .el-tabs__header{margin-bottom: 0}
  a.search-icon{display:inline-block;position: absolute;top: 25px;right: 7%;cursor: pointer}
</style>
