const menu = {
  state: {
    menus: [
      { index: '1', name: '药品管理', path: '/main', children: [
          { index: '1-1', path: '/medicine', name: '药品管理', module: 'back/main/MedicineManage/index' },
          { index: '1-2', path: '/rank', name: '排行榜编辑', module: 'back/main/MedicineManage/rank' }
        ]
      }
      /* { index: '2', name: '疾病管理', path: '/main/disease', module: '@/views/back/main/DiseaseManage/page' },
      { index: '3', name: '转阴案例管理', path: '/main/disease', module: '@/views/back/main/DiseaseManage/page' },
      { index: '4', name: '新闻管理', path: '/main/news', children: [
        { index: '4-1', name: '新闻管理', path: '', module: '@/views/back/main//page' },
        { index: '4-2', name: '频道栏目管理', path: '/main/disease', module: '@/views/back/main/DiseaseManage/page' },
        { index: '4-3', name: '最新文章管理', path: '', module: '', hidden: true },
        { index: '4-4', name: '最热文章管理', path: '', module: '', hidden: true }
      ] },
      { index: '5', name: '首页内容管理', path: '', children: [
        { index: '5-1', name: '出国实例管理', path: '', module: '', hidden: true },
        { index: '5-2', name: '新闻报道管理', path: '', module: '', hidden: true },
        { index: '5-3', name: '医疗新闻资讯管理', path: '', module: '', hidden: true },
        { index: '5-4', name: '品牌实力管理', path: '', module: '', hidden: true },
        { index: '5-5', name: '战略合作管理', path: '', module: '', hidden: true },
        { index: '5-6', name: '媒体合作管理', path: '', module: '', hidden: true },
        { index: '5-7', name: '链接聚合管理', path: '', module: '', hidden: true },
        { index: '5-8', name: '友情链接管理', path: '', module: '', hidden: true }
      ] },
      { index: '6', name: '首页页脚编辑', path: '', children: [
        { index: '6-1', name: '医诺寰球模块管理', path: '', module: '', hidden: true },
        { index: '6-2', name: '联系我们管理', path: '', module: '', hidden: true },
        { index: '6-3', name: '官方微信管理', path: '', module: '', hidden: true }
      ] },
      { index: '7', name: '关于我们', path: '/main/disease/', module: '@/views/back/main/DiseaseManage/page', hidden: true }*/
    ]
  }
}

export default menu
