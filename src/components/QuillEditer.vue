<template>
  <quill-editor id="quillEditer"
          v-model="content"
          ref="quillEditer"
          :options="editorOption"
          @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
          @change="onEditorChange($event)">
  </quill-editor>
</template>
<script>
  export default{
    name: 'QuillEditer',
    data(){
      return {
        content:null,
        editorOption:{
          debug: 'info',
          placeholder: '请输入内容...',
          theme: 'snow',
          modules: {
            toolbar:[
              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
              ['link', 'image']
            ]
          }
        }
      }
    },
    methods:{
      onEditorBlur(){//失去焦点事件
      },
      onEditorFocus(){//获得焦点事件
      },
      onEditorChange(){//内容改变事件
        this.$emit('getContent', this.content)
      }
    }
  }
</script>

<style scoped>
#quillEditer{height: auto;}
</style>