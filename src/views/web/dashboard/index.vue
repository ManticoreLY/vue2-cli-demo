<template>
  <div id="web-index">
    <div class="web-title">
      <div class="item1" style="margin-left: 5%">
        <div class="text-icon">寰球医疗最新动态<i class="arrow-right"></i></div>
      </div>
      <div class="item2" style="width: 50%"><canvas width="600" height="22"></canvas></div>
      <div class="item3" style="width: 30%">
        <span class="item-title">网站地图</span>
        <span class="item-title">医疗客服</span>
        <span class="item-title" style="border:none">海外医疗：400-0000-000<a><i class="arrow-down"></i></a></span>
      </div>
    </div>
    <div class="web-header">
      <div class="web-logo" style="margin-left:5%;width: 13%">
        <img src="static/img/医诺寰球横版logo.png" style="height: 45px;width: 100%"/>
      </div>
      <div class="search-frame" style="width: 50%">
        <el-input v-model="searchWord" class="search-bar">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <el-button slot="append">医疗搜索</el-button>
        </el-input>
      </div>
      <div class="code-img" style="width:26%">
        <img src="static/img/微信二维码-扫码咨询.jpg" style="height:80px;height: 80px;">
        <span class="text">扫码咨询</span>
        <img src="static/img/医诺寰球公众号二维码.jpg" style="height:80px;height: 80px;margin-left: 40px;">
        <span class="text">扫码咨询</span>
      </div>
    </div>
    <div class="web-nav">
      <div class="nav-bar">
        <span><a class="el-icon-d-arrow-right">常见疾病库</a></span>
        <span class=""><a>医药数据库</a></span>
        <span class=""><a>治疗案例</a></span>
        <span class=""><a>医疗新闻</a></span>
        <span class=""><a>关于我们</a></span>
      </div>
      <div class="nav-images">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="img in imgs" :key="img">
            <img :src="img" style="width: 100%;height:auto">
          </el-carousel-item>
        </el-carousel>
        <div class="fix-content">
          <a><img src="" style="height:38px;height:38px">咨询电话</a>
          <a><img src="" style="height:38px;height:38px">QQ咨询</a>
          <a><img src="" style="height:38px;height:38px">微信咨询</a>
          <a><img src="" style="height:38px;height:38px">官方微博</a>
          <a><img src="" style="height:38px;height:38px">官方微信</a>
        </div>
      </div>
    </div>
    <div class="web-items">
      <div class="item-name">疾病专栏</div>
      <div class="items">
        <div class="child">
          <a v-for="item in disease_icons" :key="item">
            <div style="width: 80px;text-align: center"><img :src="item.url" style="height: 60px;width: 60px;"></div>
            <div style="width: 150px;display: inline-block;text-align: center">
              <span style="display:inline-block;font-size:1.75rem;padding: 5px;border-bottom: 1px solid mediumspringgreen">{{ item.name }}</span><br/>
              <span style="display:inline-block;font-size: 1.25rem;padding: 4px;color: #7f7f7f">{{ item.description }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="item-bar">
      <span></span>
      <div>出国实例</div>
      <span></span>
      <div class="description">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
    </div>
    <div class="web-content">
      <div v-for="item in 8" :key="item" class="example-item">
        <div>图片</div>
        <div>
          <div style="font-size: 1.5rem;height:2.75rem;">丙肝治疗实例</div>
          <div style="font-size: 1.25rem;color: #7f7f7f;word-wrap: break-word">某患者罹患丙肝15年,经过治疗现在已经全体康复.某患者罹患丙肝15年,经过治疗现在已经全体康复.</div>
        </div>
      </div>
    </div>
    <div style="width: 100%;text-align: center">
      <el-button style="background-color: #1daca4;color:#efefef">查看更多</el-button>
    </div>
    <div class="item-bar">
      <span></span>
      <div>新闻报道</div>
      <span></span>
      <div class="description">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
    </div>
    <div class="web-news">
      <div v-for="item in 6" :key="item" class="news-item">
        <div><img src="" height="145" width="220"></div>
        <div style="margin-left: 10px;">
          <p class="title" style="font-size: 2rem;height: 30px;">厄洛替尼单药用于非小细胞癌的,厄洛替尼单药用于非小细胞癌的</p>
          <p class="date" style="font-size:1.75rem;color: #7f7f7f;height: 28px">2019-5-1</p>
          <p class="content" style="font-size:1.75rem;color:#7f7f7f;height: 80px;text-indent:3rem;">肺癌患者在做选择时不仅仅是考虑药效、安全性、耐药性、以及不可避免的价格问题，以及服务、卫生条件的其它诸多因素也是选择的考虑因素</p>
        </div>
      </div>
    </div>
    <div class="item-bar">
      <span></span>
      <div>医疗新闻资讯</div>
      <span></span>
      <div class="description">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
    </div>
    <div class="web-news">
      <div v-for="item in 3" :key="item" class="news-module">
        <div class="module-name">医疗公告</div>
        <div class="module-cont">
          <div><img width="175" height="175"></div>
          <div style="width: 190px">
            <p class="ellipsis" style="font-size:2rem;color:#1daca4;height: 40px;">杨博士出席人工智能大会</p>
            <p style="font-size: 1.75rem;color:#7f7f7f;text-indent: 3rem;width:190px;height: 100px;word-wrap: break-word">1月12日，南京大学人工智能生物医疗技术研究院落地江北地区签约仪式在汉府饭店举行<a>【详情】</a></p>
          </div>
        </div>
        <div class="module-title">
          <div v-for="k in 6" :key="k" style="padding-left: 20px;margin-top:10px;">
            <span class="ellipsis" style="font-size: 1.25rem;color:#7f7f7f">XXXXXXXXXXXXXX</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>2019-05-01</span>
          </div>
        </div>
      </div>
    </div>
    <div class="item-bar">
      <span></span>
      <div>品牌实力</div>
      <span></span>
      <div class="description">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
    </div>
    <div class="web-brand">
      <div v-for="item in 9" :key="9" :class="classSeries(item)">
        <div class="title"><i class="el-icon-bell"></i>中科院博士团队</div>
        <div class="content">中科院博士团队组成，多年的临床科研经验，专业性强</div>
      </div>
    </div>
    <div class="many-logo">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="战略合作伙伴" name="first">
          <div v-for="logo in logo_images" class="logo-pane">
            <img :src="'static/logo/' + logo" :key="logo" height="75" width="275">
          </div>
        </el-tab-pane>
        <el-tab-pane label="媒体合作" name="second">
          <div v-for="logo in logo_medias" class="logo-pane">
            <img :src="'static/logo/' + logo" :key="logo" height="75" width="275">
          </div>
        </el-tab-pane>
        <el-tab-pane label="链接聚合" name="third">
          <div v-for="logo in logo_links" class="logo-pane">
            <img :src="'static/logo/' + logo" :key="logo" height="75" width="275">
          </div>
        </el-tab-pane>
        <el-tab-pane label="友情链接" name="fourth">
          <div v-for="logo in logo_friends" class="logo-pane">
            <img :src="'static/logo/' + logo" :key="logo" height="75" width="275">
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'index',
      data() {
        return {
          searchWord: '',
          imgs: [
            'static/img/首页banner2.jpg', 'static/img/首页banner3.jpg', 'static/img/首页banner4.jpg',
            'static/img/首页banner2.jpg', 'static/img/首页banner5.jpg', 'static/img/首页banner6.jpg'
          ],
          disease_icons: [
            { name: '丙肝', description: '吉三代 索非布韦', url: 'static/icon/icon-1.png' },
            { name: '乙肝', description: 'TAF', url: 'static/icon/icon-2.png' },
            { name: '糖尿病', description: '恩格列净 曲格列汀', url: 'static/icon/icon-3.png' },
            { name: '前列腺癌', description: '阿比特龙 恩杂鲁胺', url: 'static/icon/icon-4.png' },
            { name: '卵巢癌', description: '奥拉帕尼 尼拉帕尼', url: 'static/icon/icon-5.png' },
            { name: '肺癌', description: '奥希替尼 克唑替尼', url: 'static/icon/icon-6.png' },
            { name: '肝癌', description: '索拉非尼 乐伐替尼', url: 'static/icon/icon-7.png' },
            { name: '乳腺癌', description: '帕博西尼 奥拉帕尼', url: 'static/icon/icon-8.png' },
            { name: '结直肠癌', description: '瑞格非尼', url: 'static/icon/icon-9.png' },
            { name: '更多', description: '更多', url: 'static/icon/icon-10.png' }
          ],
          activeName: 'first',
          logo_images:[
            '中国新闻网.jpg', '中国江苏网.jpg', '中国青年报.jpg', '今日头条.jpg', '凤凰.png', '参考消息.jpg',
            '山东大学报.jpg', '搜狐.jpg', '腾讯.png','新浪.png', '环球.png', '网易.png', '界面.png', '搜狗搜索.png', '百度.png'
          ],
          logo_medias: [
            '新浪.png', '环球.png', '网易.png', '界面.png', '搜狗搜索.png', '百度.png', '第一财经.jpg', '腾讯.png'
          ],
          logo_links: [
            '1-1F32G43H1W4.jpg', '1-1F32G43JX63.jpg', '1-1F32G4353V35.jpg', '1-1F32G4401KK.jpg', '1-1F32G4403X93.jpg',
            '1-1F32G4403X93.jpg', '1-1F32G44102J5.jpg', '1-1F32G441441D.jpg', '1-1F32G43601919.jpg', '1-1F32G43621543.jpg', '1-1F32G43642612.jpg'
          ],
          logo_friends: [
            '1-1F32G43916126.jpg', '1-1F32G43935624.jpg', '1-1F32G44001295.jpg', '1-1F32G44126227.jpg', '1-1F32G44216226.jpg',
            '1-1F32G44216226.jpg', '1-1P1030915140-L.png', '1-1P1152206190-L.png'
          ]
        }
      },
      methods: {
        classSeries(item) {
          if (item % 2 === 1) {
            return 'brand-item normal'
          } else {
            if (item === 2) {
              return 'brand-item blue'
            } else if (item === 4) {
              return 'brand-item graygreen'
            } else if (item === 6) {
              return 'brand-item yellow'
            } else if (item === 8) {
              return 'brand-item green'
            }
          }
        }
      }
    }
</script>

<style scoped>
  /*color:#1CACA3*/
  .item-bar{position:relative;width: 90%;margin: 20px 5%;}
  .item-bar span{display: inline-block;width: 30%;height:0;border: 2.5px solid #1daca4}
  .item-bar div{display: inline-block;width: 38%;text-align: center;font-size: 4rem}
  .item-bar div.description{width: 100%;text-align: center;font-size: 1.5rem;color: #7f7f7f;margin: 20px;}

  .ellipsis{white-space:nowrap;overflow: hidden;text-overflow: ellipsis}

  #web-index{margin: 0;padding: 0;}
  .web-title{position: relative;width:100%;height: 2.75rem;background: #f5f5f5;border-bottom: 1px solid #eee;}
  .web-title .item1, .web-title .item2, .web-title .item3{display: inline-block}
  .web-title .item1 .text-icon{display: inline-block;position:relative;font-size: 1rem;font-weight: 600;color: #efefef;background: #1CACA3;color: #ececec;padding: 4px 12px;border-radius: 3px;}
  .web-title .item1 .text-icon .arrow-right{position:absolute;top:8px;right: -10px;height: 0;width: 0;border-width: 5px;border-style: solid;border-color: transparent transparent transparent #1CACA3}
  .web-title .item3{font-size: 1.125rem;color: #545454;line-height: 1.5rem;line-height: 1.5rem;}
  .web-title .item3 .item-title{display: inline-flex;position:relative;border-right:1px solid #545454;padding: 0 6px;}
  .web-title .item3 .item-title .arrow-down{position:absolute;top: 5px;right: -10px;height: 0;width: 0;border-width: 5px;border-style: solid;border-color: #545454 transparent transparent transparent}

  .web-header{width: 100%;height: 140px;display: flex;flex-flow:row nowrap;justify-content: space-around;align-items: center}
  .web-header>div{position: relative;height: 80px;display: inline-flex;align-items: center}
  .web-header .search-frame .search-bar{width: 100%;height: 40px;border: 2px solid #1CACA3;border-radius: 4px;}
  .web-header .code-img img, .web-header .code-img span{display: inline-block}
  .web-header .code-img .text{display: inline-flex;height: 80px;width: 2rem;font-size: 1.125rem;color: #ccc;flex-flow: column wrap}
  >>> .el-input-group__append{background: #1daca4;border:none;color:#fff;font-size: 18px;border-radius: 0px;}
  >>> .el-input{border: none}

  .web-nav{width: 100%;height: 380px;}
  .web-nav .nav-bar{width: 90%;height: 42px;padding: 0 5%;font-size: 1.5rem;border-bottom: 4px solid #1CACA3}
  .web-nav .nav-bar span{display: inline-block;padding: 10px 2.25rem;}
  .web-nav .nav-bar span:nth-child(1){display: inline-block;padding: 10px 2.25rem;background: #1CACA3;color: #efefef}
  .web-nav .nav-images{position: relative}
  .web-nav .nav-images .fix-content{position: absolute;right: 2.25rem; top: 50px;z-index: 20;display: inline-flex;flex-flow: column nowrap;font-size: 10px;color:red}
  .web-nav .nav-images .fix-content a{display: inline-block;width:50px;height: 50px;}

  .web-items{width: 90%;height:225px;padding: 0 5%;position:relative;display:flex;flex-flow: row nowrap;align-items: flex-start}
  .web-items .item-name{display:inline-block;height:220px;width: 80px;display: inline-flex;align-items: center;text-align: center;background: #1CACA3;color:#efefef;font-size: 2.4rem;border-radius: 4px;word-wrap: break-word}
  .web-items .items .child{display: inline-block;margin-left: 15px;}
  .web-items .items .child>a{display: inline-block;border-right: 1px solid #eee;height: 100px;width: 19%;display: inline-flex;align-items: center;justify-content: flex-start;margin-bottom: 10px;text-align: center}

  .web-content{width: 90%;margin: 0 5%;height: auto;display: flex;flex-flow:row wrap;justify-content: space-around}
  .web-content .example-item{position:relative;width: 22%;background: #ccc;margin-bottom: 20px;}
  .web-content .example-item>div:nth-child(1){height: 300px;width: 100%;border-bottom: 2px solid #1daca4;}
  .web-content .example-item>div:nth-child(2){height: 120px;width: 93%;padding: 5px 3%;}

  .web-news{width: 90%;margin: 0 5%;height: auto;display: flex;flex-flow:row wrap;justify-content: space-around}
  .web-news .news-item{position:relative;display: inline-block;width: 48%;margin-bottom: 20px;}
  .web-news .news-item>div:nth-child(1){display: inline-block;height:145px;width: 220px;}
  .web-news .news-item>div:nth-child(2){display: inline-block;height:145px;width: 340px;}
  .web-news .news-item>div:nth-child(2)>p{word-wrap: break-word;text-overflow:ellipsis; -o-text-overflow:ellipsis; overflow: hidden;}

  .web-news .news-module{position:relative;display: inline-block;width: 31%;margin-bottom: 20px;border-right: 1px solid #ccc}
  .web-news .news-module:last-child{border:none}
  .web-news .news-module .module-name{font-size: 2.25rem;height: 36px}
  .web-news .news-module .module-cont{height: 175px}
  .web-news .news-module .module-cont>div{display: inline-block;}

  .web-brand{position:relative;width: 90%;margin: 0 5%;height: auto;display: flex;flex-flow: row wrap; justify-content: flex-start}
  .web-brand .brand-item{height: 285px;width: 33%;}
  .web-brand .brand-item .title{height: 75px;font-size:3rem;text-align: center;margin: 20px;}
  .web-brand .brand-item .content{height: 200px;font-size:2rem;padding:0 15px;}
  .web-brand .brand-item.normal{background: #f5f5f5;}
  .web-brand .brand-item.normal .title{color: #1daca4}
  .web-brand .brand-item.blue{background: #2b96cc;color: #fff}
  .web-brand .brand-item.green{background: #29a466;color: #fff}
  .web-brand .brand-item.graygreen{background: #1daca4;color: #fff}
  .web-brand .brand-item.yellow{background: #f0a226;color: #fff}
  .web-brand .brand-item.blue, .web-brand .brand-item.green, .web-brand .brand-item.graygreen, .web-brand .brand-item.yellow{font-size:4rem;color:#FFF}

  .many-logo{width: 90%; margin: 20px 5%;}
  .many-logo .logo-pane{position: relative;width: 20%;height: 100px;display: inline-flex;flew-flow: row wrap;justify-content: space-around}
</style>
