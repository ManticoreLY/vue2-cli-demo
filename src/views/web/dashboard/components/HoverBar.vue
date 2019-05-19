<template>
  <div class="hover-bar">
    <div class="item" v-for="item in list" :key="item">
      <div class="main">{{item.name}}</div>
      <div class="sub">
        <span v-for="t in item.items" :key="t">{{t}}</span>
      </div>
      <div class="panel">
        <div class="info-item" v-for="i in item.children" :key="i">
          <h5><a>{{ i.name }}</a></h5>
          <h6>
            <span v-for="p in i.items" :key="p">{{p}}</span>
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HoverBar',
    data() {
      return {
        list: [
          {
            name: '乙肝',
            items: ['丙肝', '乙肝', '二型糖尿病'],
            children: [
              { name: '丙肝', items: ['吉二代', '吉三代', '索非布韦', '达卡他韦', '雷迪帕韦', '维他帕韦', '吉四代(Vosevi)'] },
              { name: '乙肝', items: ['恩替卡韦', 'TAF'] },
              { name: '二型糖尿病', items: ['恩格列净', '曲格列汀'] },
              { name: '肥胖症', items: ['Saxenda减肥针'] }
            ]
          },
          {
            name: '肿瘤科',
            items: ['靶向药', '肺癌', '肝癌'],
            children: [
              { name: '肺癌', items: ['吉非替尼', '厄洛替尼', '阿法替尼', '奥西替尼', '克唑替尼', '艾乐替尼', '色瑞替尼', '达拉非尼', '曲美替尼', '凡德他尼', '卡博替尼', 'PD-1'] },
              { name: '肝癌', items: ['索拉非尼', '乐伐替尼', '瑞格非尼', 'PD-1'] },
              { name: '乳腺癌', items: ['赫赛汀', 'Hertarz', '依维莫司', '来曲唑', '帕妥珠单抗', 'T-DM1', '拉帕替尼', '帕博西尼', '奥拉帕尼', 'PD-1'] },
              { name: '前列腺癌', items: ['阿比特龙', '恩杂鲁胺'] },
              { name: '卵巢癌', items: ['奥拉帕尼', '尼拉帕尼'] }
            ]
          },{
            name: '妇产科',
            items: ['试管婴儿', '卵巢调理'],
            children: [
              { name: '肺癌', items: ['吉非替尼', '厄洛替尼', '阿法替尼', '奥西替尼', '克唑替尼', '艾乐替尼', '色瑞替尼', '达拉非尼', '曲美替尼', '凡德他尼', '卡博替尼', 'PD-1'] },
              { name: '肝癌', items: ['索拉非尼', '乐伐替尼', '瑞格非尼', 'PD-1'] },
              { name: '乳腺癌', items: ['赫赛汀', 'Hertarz', '依维莫司', '来曲唑', '帕妥珠单抗', 'T-DM1', '拉帕替尼', '帕博西尼', '奥拉帕尼', 'PD-1'] },
              { name: '前列腺癌', items: ['阿比特龙', '恩杂鲁胺'] },
              { name: '卵巢癌', items: ['奥拉帕尼', '尼拉帕尼'] }
            ]
          },{
            name: '植入手术',
            items: ['人工虹膜', '心脏支架', '角膜移植'],
            children: [
              { name: '肺癌', items: ['吉非替尼', '厄洛替尼', '阿法替尼', '奥西替尼', '克唑替尼', '艾乐替尼', '色瑞替尼', '达拉非尼', '曲美替尼', '凡德他尼', '卡博替尼', 'PD-1'] },
              { name: '肝癌', items: ['索拉非尼', '乐伐替尼', '瑞格非尼', 'PD-1'] },
              { name: '乳腺癌', items: ['赫赛汀', 'Hertarz', '依维莫司', '来曲唑', '帕妥珠单抗', 'T-DM1', '拉帕替尼', '帕博西尼', '奥拉帕尼', 'PD-1'] },
              { name: '前列腺癌', items: ['阿比特龙', '恩杂鲁胺'] },
              { name: '卵巢癌', items: ['奥拉帕尼', '尼拉帕尼'] }
            ]
          },{
            name: '转诊',
            items: ['CAR-T疗法'],
            children: [
              { name: '肺癌', items: ['吉非替尼', '厄洛替尼', '阿法替尼', '奥西替尼', '克唑替尼', '艾乐替尼', '色瑞替尼', '达拉非尼', '曲美替尼', '凡德他尼', '卡博替尼', 'PD-1'] },
              { name: '肝癌', items: ['索拉非尼', '乐伐替尼', '瑞格非尼', 'PD-1'] },
              { name: '乳腺癌', items: ['赫赛汀', 'Hertarz', '依维莫司', '来曲唑', '帕妥珠单抗', 'T-DM1', '拉帕替尼', '帕博西尼', '奥拉帕尼', 'PD-1'] },
              { name: '前列腺癌', items: ['阿比特龙', '恩杂鲁胺'] },
              { name: '卵巢癌', items: ['奥拉帕尼', '尼拉帕尼'] }
            ]
          },{
            name: '病原微生物',
            items: ['噬菌体疗法', 'HPV疫苗'],
            children: [
              { name: '肺癌', items: ['吉非替尼', '厄洛替尼', '阿法替尼', '奥西替尼', '克唑替尼', '艾乐替尼', '色瑞替尼', '达拉非尼', '曲美替尼', '凡德他尼', '卡博替尼', 'PD-1'] },
              { name: '肝癌', items: ['索拉非尼', '乐伐替尼', '瑞格非尼', 'PD-1'] },
              { name: '乳腺癌', items: ['赫赛汀', 'Hertarz', '依维莫司', '来曲唑', '帕妥珠单抗', 'T-DM1', '拉帕替尼', '帕博西尼', '奥拉帕尼', 'PD-1'] },
              { name: '前列腺癌', items: ['阿比特龙', '恩杂鲁胺'] },
              { name: '卵巢癌', items: ['奥拉帕尼', '尼拉帕尼'] }
            ]
          },
        ]
      }
    }
  }
</script>

<style scoped>
.hover-bar{width: 100%;height: 100%;}
.item{width: 98.5%;height: 16.5%;border-bottom:1px solid #eee;border-left:3px solid #2cbca3}
.item:last-child{border: none}
.item:hover{background: #fcfcfc;border-left:3px solid #008aff;}
.item:hover .main,.item:hover .sub{color: #008aff;}
.item .main{font-size: 1.25rem;color: #f5f5f5;padding: 10px;}
.item .sub{font-size: 1rem;color: #eee;padding: 5px;}
.item .sub span{padding: 0 5px;border-right: 1px solid #eee;}
.item:hover .sub span{padding: 0 5px;border-right: 1px solid #008aff;text-decoration: underline}
.item .sub span:last-child{border:none}
.panel{visibility: hidden;position:absolute;width: 500px;height: 95%;left: 100%;top: 0;background: #fcfcfc;padding: 1rem;}
.panel .info-item{width: 100%;height: auto;border-bottom: 1px dotted #eee;color: #545454}
.panel .info-item a{color:#008aff}
.panel .info-item h5{padding: 0 5px}
.panel .info-item h6>span{border-right: 1px solid #545454;padding: 0 5px}
.panel .info-item h6>span:last-child{border: none}
.item:hover .panel{visibility: visible}
</style>
