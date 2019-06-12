import Layout from '@/views/layout'

export default [
  {
    path: '/homePage',
    component: Layout,
    name: '首页配置',
    children: [
      { path: 'NavBanner', name: '导航配置', component: () => import('@/views/back/main/DashboardSetting/NavBanner') },
      { path: 'brand', name: '品牌实力', component: () => import('@/views/back/main/DashboardSetting/brand') },
      { path: 'footer', name: '合作品牌', component: () => import('@/views/back/main/DashboardSetting/footer') },
      { path: 'friendLink', name: '友情链接', component: () => import('@/views/back/main/DashboardSetting/friendLink') },
      { path: 'newsReport', name: '新闻报道', component: () => import('@/views/back/main/DashboardSetting/ReportSetting') },
      { path: 'newsArticle', name: '新闻资讯', component: () => import('@/views/back/main/DashboardSetting/NewsSetting') },
      { path: 'publish', name: '官方发布', component: () => import('@/views/back/main/DashboardSetting/publish') }
    ]
  },
  {
    path: '/user',
    component: Layout,
    name: '用户管理',
    children: [
      { path: '', name: '用户管理', component: () => import('@/views/back/main/user/index') }
    ]
  },
  {
    path: '/medicine',
    component: Layout,
    name: '药品管理',
    children: [
      { path: '', name: '药品管理', component: () => import('@/views/back/main/MedicineManage') },
      { path: 'rank', name: '排行榜管理', component: () => import('@/views/back/main/MedicineManage/rank'), hidden: true }
    ]
  },
  {
    path: '/disease',
    component: Layout,
    name: '疾病管理',
    children: [
      { path: '', name: '疾病管理', component: () => import('@/views/back/main/DiseaseManage/page') }
    ]
  },
  {
    path: '/case',
    component: Layout,
    name: '案例管理',
    children: [
      { path: '', name: '转阴案例管理', component: () => import('@/views/back/main/CasesManage') }
    ]
  },
  /* {
    path: '/medicalNews',
    component: Layout,
    name: '新闻管理',
    children: [
      { path: '', name: '医疗新闻管理', component: () => import('@/views/back/main/MedicalNews') }
    ]
  },*/
  {
    path: '/medicalArticle',
    component: Layout,
    name: '文章管理',
    children: [
      { path: '', name: '医疗文章管理', component: () => import('@/views/back/main/MedicalArticle') }
    ]
  },
  {
    path: '/channel',
    component: Layout,
    name: '频道管理',
    children: [
      { path: '', name: '频道栏目', component: () => import('@/views/back/main/ChannelItems') }
    ]
  }
]
