<template>
  <div class="sort">
    <!--  头部  -->
    <div class="head">
      <van-icon name="arrow-left" class="arrow-left pull-left" @click="go_back" />
      <span class="title_name">{{this.titleArr}}</span>
    </div>
    <!--  下拉头部  -->
    <van-row class="two">

      <van-col span="8" class="col_1">
        <span @click="threeArrow(1)" v-if="show_1" >{{this.titleArr}}</span>
        <span style="color:blue" @click="threeArrow(1)" v-if="!show_1">分类</span>
        <i :class="[!show_1 ? 'el-icon-caret-bottom go_1' : 'el-icon-caret-bottom anti_1']"></i>
      </van-col>

      <van-col span="8" class="col_2">
        <span @click="threeArrow(2)" v-if="show_2">排序</span>
        <span  style="color:blue" @click="threeArrow(2)" v-if="!show_2">排序</span>
        <i :class="[!show_2 ? 'el-icon-caret-bottom go_2' : 'el-icon-caret-bottom anti_2']"></i>
      </van-col>

      <van-col span="8" class="col_3">
        <span @click="threeArrow(3)" v-if="show_3">筛选</span>
        <span  style="color:blue" @click="threeArrow(3)" v-if="!show_3">筛选</span>
        <i :class="[!show_3 ? 'el-icon-caret-bottom go_3' : 'el-icon-caret-bottom anti_3']"></i>
      </van-col>
    </van-row>
      <!--  分类下拉框  -->
        <van-row v-if="!show_1" class="drop_down_list">
          <!--  左侧下拉框 -->
          <van-col span="12" class="left_12">
            <span class="foreign_name">异国料理</span>
            <span class="pull-right foreign_count sort_count">{{sortCountOne}}</span>
            <ul v-for="(leftV,index) in sortList">
              <li class="sortList_left" :class="{changeStyle:key == leftV.name}" @click="selectTitle(leftV.name)">
                <img v-if="leftV.image_url" :src="getImgPath(leftV.image_url)"class="sort_img">
                {{leftV.name}}
                <van-icon name="arrow" class="pull-right sort_arrow"/>
                <span class="pull-right sort_count">{{leftV.count}}</span>
              </li>
            </ul>
          </van-col>
          <!--  分类   右侧下拉框  -->
          <van-col span="12" class="right_12">
            <ul v-for="(left,index) in rightArr">
              <li class="down_right" v-for="(a,index) in left.sub_categories.slice(1)" @click="click100(a.name,left.name)" :key="index">
                <span >{{a.name}}</span>
                <span class="pull-right">{{a.count}}</span>
              </li>
            </ul>
          </van-col>
        </van-row>
      <!--  排序下拉框  -->
      <div  v-if="!show_2" class="drop_down_sort">
        <ul>
          <li @click="select(4)">
            <i class="el-icon-sort"></i>
            <span>智能排序</span>
          </li>
          <li @click="select(5)">
            <i class="el-icon-location-outline"></i>
            <span>距离最近</span>
          </li>
          <li @click="select(6)">
            <van-icon name="fire-o" class="fire-o"/>
            <span>销量最高</span>
          </li>
          <li @click="select(1)">
            <van-icon name="after-sale" class="after-sale" />
            <span>起送价最低</span>
          </li>
          <li @click="select(2)">
            <i class="el-icon-time"></i>
            <span>配送速度最快</span>
          </li>
          <li @click="select(3)">
            <i class="el-icon-star-off"></i>
            <span>评分最高</span>
          </li>
        </ul>

      </div>
      <!--  筛选下拉框 -->
      <div  v-if="!show_3"  class="screen">
        <div class="screen_top">
          <span>配送方式</span>
          <van-row>
            <van-col span="8">
              <p class="screen_btn" @click="duihao(0)">
                <van-icon name="logistics" v-if="show_duihao_0" class="bird"/>
                <i class="el-icon-check" v-if="!show_duihao_0"></i>
                <span class="kind_name" :class="{bgc: checkKey==0}">蜂鸟专送</span>
              </p>
            </van-col>

            <van-col span="24">商家属性(可以多选)</van-col>

            <van-col span="8">
              <p type="default" class="screen_btn btn_6" @click="duihao(1)">
                <span class="pin" v-if="show_duihao_1">品</span>
                <i class="el-icon-check" v-if="!show_duihao_1"></i>
                <span class="kind_name" :class="{bgc: checkKey==1}">品牌商家</span>
              </p>
            </van-col>
            <van-col span="8">
              <p type="default" class="screen_btn btn_6" @click="duihao(2)">
                <span class="bao" v-if="show_duihao_0">保</span>
                <i class="el-icon-check" v-if="!show_duihao_0" :class="{icon_check: checkKey==2}"></i>
                <span class="kind_name">外卖保</span>
              </p>
            </van-col>
            <van-col span="8">
              <p type="default" class="screen_btn btn_6" @click="duihao(3)">
                <span class="zhun" v-if="show_duihao_0">准</span>
                <i class="el-icon-check" v-if="!show_duihao_0" :class="{icon_check: checkKey==3}"></i>
                <span class="kind_name">准时达</span>
              </p>
            </van-col>

            <van-col span="8">
              <p type="default" class="screen_btn btn_6" @click="duihao(4)">
                <span class="xin" v-if="show_duihao_0">新</span>
                <i class="el-icon-check" v-if="!show_duihao_0" :class="{icon_check: checkKey==4}"></i>
                <span class="kind_name">新店</span>
              </p>
            </van-col>
            <van-col span="8">
              <p type="default" class="screen_btn btn_6" @click="duihao(5)">
                <span class="fu" v-if="show_duihao_0">付</span>
                <i class="el-icon-check" v-if="!show_duihao_0" :class="{icon_check: checkKey==5}"></i>
                <span class="kind_name">在线支付</span>
              </p>
            </van-col>
            <van-col span="8">
              <p type="default" class="screen_btn btn_6" @click="duihao(6)">
                <span class="piao" v-if="show_duihao_0">票</span>
                <i class="el-icon-check" v-if="!show_duihao_0" :class="{icon_check: checkKey==6}"></i>
                <span class="kind_name">开发票</span>
              </p>
            </van-col>

          </van-row>
        </div>
        <!--  清空  确认按钮  -->
        <div class="clear_sure">
          <van-row>
            <van-col span="12">
              <p class="clear">清空</p>
            </van-col>
            <van-col span="12">
              <p class="sure">确定</p>
            </van-col>
          </van-row>
        </div>
      </div>
    <!--   三个下拉框的 黑色透明背景   -->
    <van-overlay :show="show" @click="overlay"/>

    <!--  商品列表  -->
    <div class="inf">
      <van-row>
        <div  class="infA" v-for="(img,index) in infImgArr" @click="click23(img)">
          <!--第一行-->
          <img class="infImg pull-left" :src="'http://elm.cangdu.org/img/'+ img.image_path">
          <span class="infBrand">品牌</span>
          <span class="infName">{{img.name}}</span>
          <span class="bzp pull-right">{{supportsArr2.icon_name}}</span>
          <span class="bzp pull-right">{{supportsArr1.icon_name}}</span>
          <span class="bzp pull-right">{{supportsArr0.icon_name}}</span>

          <br>
          <!--第二行-->
          <van-rate class="star"
                    v-model="img.rating"
                    size="1"
                    readonly
                    score-template="{value}">
          </van-rate>
          <span class="rating">{{img.rating}}</span>
          <span class="recent_order_num">月售{{img.recent_order_num}}单</span>
          <span class="zsd pull-right">准时达</span>
          <span v-if="img.delivery_mode" class="delivery_mode_text pull-right">{{img.delivery_mode.text}}</span>
          <br>
          <!--第三行-->
          <span class="float_minimum_order_amount">￥{{img.float_minimum_order_amount}}起送/配送费约￥{{img.float_delivery_fee}}</span>
          <span class="forty_minute pull-right"> {{img.order_lead_time}}</span>
          <span class="ten_km pull-right">{{img.distance}}/</span>
        </div>
      </van-row>
    </div>
  </div>
</template>
<script>
  import Vue from "vue"
  export default {
    name: "Sort",
    data(){
      return{
        supportsArr0: '',
        supportsArr1: '',
        supportsArr2: '',
        titleArr:localStorage.getItem("lunboname"),
        show: false,
        show_1:true,
        show_2:true,
        show_3:true,
        show_duihao_0:true,
        show_duihao_1:true,
        checkKey:'',
        key1:'',
        SortSelect:[],
        sortCountOne:[],
        sortList:[],
        infImgArr:[],
        rightArr:[],
        key:'',
        qwer:[],
        cityLatitude:[],
        cityLongitude:[],
      }
    },
    methods:{
      //点击跳转商家
      click23(v){
        this.$router.push({path:"/BusinessInformation",query:{id: v.id}});
      },
      //分类商品
      click100(k,j){
        //点击分类显示对应商铺
        let list_category1 = j+'/'+k;
        console.log(list_category1);
        //根据商铺名称进行筛选
        this.infImgArr = this.qwer.filter((shop)=>{
          return shop.category == list_category1;
        });
        this.show_1=!this.show_1;
        this.show = false;
      },
      //   获取分类的  左下拉框的图标
      getImgPath(v){
        //传递过来的图片地址需要处理后才能正常使用
        let suffix;
        if (!v) {
          return '//elm.cangdu.org/img/default.jpg'
        }
        if (v.indexOf('jpeg') !== -1) {
          suffix = '.jpeg'
        } else {
          suffix = '.png'
        }
        let url = '/' + v.substr(0, 1) + '/' + v.substr(1, 2) + '/' + v.substr(3) + suffix;
        return 'https://fuss10.elemecdn.com' + url
      },
      //   点击黑色透明背景，让黑色背景，下拉框消失
      overlay (){
        this.show = false;
        this.show_1 = true;
        this.show_2 = true;
        this.show_3 = true;
      },
      //  当前只显示1个下拉列表
      threeArrow (v) {
        if (v == 1){
          this.show_1 = !this.show_1;
          this.show_2 = true;
          this.show_3 = true;
          this.show = true;
          if (this.show_1) {
            this.show =false;
          }
        }
        else if(v == 2){
          this.show_2 = !this.show_2;
          this.show_1 = true;
          this.show_3 = true;
          this.show = true;
          if (this.show_2) {
            this.show =false;
          }
        }
        else {
          this.show_3 = !this.show_3;
          this.show_2 = true;
          this.show_1 = true;
          this.show = true;
          if (this.show_3) {
            this.show =false;
          }
        }

      },
      //  点击左上角箭头，返回外卖页面
      go_back (){
        this.$router.push({path:"/home"});
      },
      //   分类下拉框中，点击左侧名称，右侧显示对应内容, key是改变 li 背景的标识(在data中定义)
      selectTitle (leftName){
        this.key = leftName;
        this.rightArr = this.sortList.filter((m) => {
          return m.name === leftName;
        });
      },
    //   点击，选择排序方式
      select (v){
        //   选择排序方式之后，将排序下拉框收起、遮罩层取消
        this.show = false;
        this.show_2 = true;
        //   获取排序之后的数据
        Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.cityLatitude}&longitude=${this.cityLongitude}&order_by=${v}`).
        then((result)=>{
          // console.log(result.data);
          this.infImgArr = result.data;
        }).catch((error)=>{
          console.log(error);
        });
        //
      },
      duihao (v){
        this.checkKey = v;
        this.show_duihao_0 = !this.show_duihao_0;
      }
    },
    created(){
      // this.show = !this.show;
      //  16个分类，每一个分类名字
      this.titleArr = localStorage.getItem("lunboname");
      console.log(this.titleArr);
      //  下拉列表
      Vue.axios.get("https://elm.cangdu.org/shopping/v2/restaurant/category").then((result)=>{

        //  获取 异国料理的 count
        this.sortCountOne = result.data.slice(0,1)[0].count;
        this.sortList = result.data.slice(1,9);
        console.log(this.sortList.slice(1,9),'121');
        // console.log(this.sortList.slice(0,8));
      }).catch((error)=>{
        console.log(error);
      });

      //  获取  商家信息
      //   获取城市页面传来的   城市经纬度
      this.cityLatitude = localStorage.getItem('latitude');
      this.cityLongitude = localStorage.getItem('longitude');

      Vue.axios.get(`https://elm.cangdu.org/shopping/restaurants?latitude=${this.cityLatitude}&longitude=${this.cityLongitude}`).then((result)=>{
        // console.log(result.data);
        this.infImgArr = result.data;
        this.qwer=result.data;
        result.data.forEach( v=>{
          this.supportsArr0 = v.supports[0];
          this.supportsArr1 = v.supports[1];
          this.supportsArr2 = v.supports[2];
        })
      }).catch((error)=>{
        console.log(error)});
    },
  }
</script>

<style scoped>
  .changeStyle{
    background: white;
  }
  .sort{
    margin-bottom: 4rem;
  }
  /*  头部  */
  .head{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 4rem;
    text-align:center;
  }
  .arrow-left{
    font-size: 2.5rem;
    font-weight: 400;
    color: white;
    vertical-align: middle;
    line-height: 4rem;
    margin-left: 1rem;
  }
  .title_name{
    font-size: 2rem;
    color: #fff;
    font-weight: 700;
    display: inline-block;
    line-height: 4rem;
    margin-left: -2.5rem;
  }
  /*  三个下拉框  */
  .two{
    text-align: center;
    margin-top: 4rem;
    font-size: 1.5rem;
    color: #333;
    line-height: 3rem;
    width: 100%;
    border-bottom: 0.1rem solid gainsboro;
    background: white;
    position: fixed;
    z-index: 10;
  }
  /*  边框  */
  .col_1, .col_2{
    border-right: 0.05rem solid gainsboro;
  }
  /*  三个箭头的旋转  */
  .go_1, .go_2, .go_3{
    transform: rotate(180deg);
    transition: all 0.3s;
    color: blue;
  }
  .anti_1, .anti_2, .anti_3{
    transition: all 0.3s;
  }
  /*  分类下拉框  */
  .drop_down_list{
    margin-top: 7.1rem;
    animation: fadeInDown 0.25s linear forwards;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    position: fixed;
    z-index: 9;
  }
  .left_12{
    background: #f5f5f5;
  }
  /*  异国料理的样式*/
  .foreign_name{
    margin-left: 1rem;
    margin-bottom: 5rem;
    font-size: 1rem;
    line-height: 3rem;
  }
  .foreign_count{
    margin-right: 1.5rem;
  }
  .sortList_left{
    padding-left: 1rem;
    color: #333;
    font-size: 1rem;
    line-height: 3.5rem;
  }
  .sort_img{
    width: 1.5rem;
  }
  .sort_count{
    background: #ccc;
    display: inline;
    font-size: 1.2rem;
    color: white;
    line-height: 1rem;
    border: 0.2rem solid #ccc;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    margin-top: 1rem;
    padding-top: 0.1rem;
  }
  .sort_arrow{
    margin: 1.3rem 1rem 0 1rem;
  }
  /*  分类下拉框 ，右侧 CSS  */
  .right_12{
    background: white;
    height: 31rem;
    overflow-y: scroll;
  }
  .down_right{
    font-size: 1.3rem;
    line-height: 3.4rem;
    border-bottom: 0.05rem solid #e4e4e4;
    margin-left: 1rem;
    padding-right: 1rem;
  }

  .dark{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 8;
    background-color: rgba(0,0,0,0.3);
  }
  /*  排序下拉框*/
  .drop_down_sort{
    animation: fadeInDown 0.25s linear forwards;
    margin-top: 6.5rem;
    background: white;
    position: fixed;
    z-index: 9;
    line-height: 5rem;
    width: 100%;
    padding-left: 4rem;
  }
  .drop_down_sort > ul > li{
    border-bottom: 0.05rem solid gainsboro;
    width:100%;
  }
  /*  图标大小、颜色*/
  .drop_down_sort > ul > li > i{
    font-size: 1.7rem;
    padding-right:2rem;
  }
  .el-icon-sort, .el-icon-location-outline{
    color: rgb(42, 155, 211);
  }
  .fire-o {
    color: rgb(240, 115, 115);
  }
  .after-sale {
    color: rgb(230, 182, 26);
  }
  .el-icon-time {
    color: rgb(55, 199, 183);
  }
  .el-icon-star-off {
    color: rgb(235, 165, 59);
  }
  .drop_down_sort > li > span{
    color: #666;
  }

  /*  筛选下拉框  */
  .bgc{
    color: #3190e8;
  }
  .screen{
    animation: fadeInDown 0.25s linear forwards;
    margin-top: 6.5rem;
    position: fixed;
    z-index: 9;
    width: 100%;
    background: gainsboro;
    font-size: 1rem;
  }
  .screen_btn{
    border: 0.11rem solid #eee;
    border-radius: 0.3rem;
    padding-left: 1rem;
    line-height: 3rem;
    height: 3rem;
    width: 9rem;
    margin: 1rem 1.5rem 1rem 0;
    background: white;
  }
  .el-icon-check{
    color: blue;
    font-size: 1.8rem;
    font-family: Microsoft Yahei;
    font-weight: 800;
    position: fixed;
    margin: 0.5rem 0 0 -0.5rem;
  }
  .kind_name{
    margin-left: 1.5rem;
  }
  .btn_6{
    margin-bottom: -0.5rem;
    line-height: 3rem
  }
  .bird, .pin, .bao, .zhun, .xin, .fu, .piao{
    border: 0.115rem solid;
    border-radius: 0.25rem;
    font-size: 1rem;
    padding: 0.2rem 0.2rem 0rem 0.2rem;
    position: fixed;
    line-height: 1.4rem;
    margin: 0.5rem 0 0 -0.5rem;
  }
  .bird{
    border:0;
  }
  .pin{
    color: rgb(63, 189, 230);
    border-color: rgb(63, 189, 230);
  }
  .bao{
    color: rgb(153, 153, 153);
    border-color: rgb(153, 153, 153);
  }
  .zhun{
    color: rgb(87, 169, 255);
    border-color: rgb(87, 169, 255);
  }
  .xin{
    color: rgb(232, 132, 45);
    border-color: rgb(232, 132, 45);
  }
  .fu{
    color: rgb(255, 78, 0);
    border-color: rgb(255, 78, 0);
  }
  .piao{
    color: rgb(153, 153, 153);
    border-color: rgb(153, 153, 153);
  }
  /*  清空 和 确定按钮CSS  */
  .screen_top{
    background: white;
    width: 100%;
    height: 18rem;
    padding: 1rem 0 0 1rem;
  }
  .clear, .sure{
    width: 95%;
    line-height: 3.8rem;
    margin: 0.5rem 0 0.5rem 0.25rem;
    border-radius: 0.5rem;
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
  }
  .clear{
    background: white;
  }
  .sure{
    background: #56d176;
    color: white;
  }
  .clear_sure{
    z-index: 10;
  }

  /*  商家 信息*/
  .inf{
    padding-top: 7rem;
  }
  /* 第一行*/
  .infA{
    display: block;
    border-bottom: 0.05rem solid gainsboro;
    height: 8rem;
    padding: 1.5rem 0.7rem 8rem 0.7rem;
  }
  .infImg{
    width: 5.5rem;
    height: 5.5rem;
    margin-right: 1rem;
  }
  .infBrand{
    display: inline-block;
    font-size: 0.5rem;
    font-weight:600;
    line-height: 1.2rem;
    color: #333;
    background-color: #ffd930;
    border-radius: 0.2rem;
    margin-right: 0.2rem;
    width: 2.3rem;
    text-align: center;
  }
  .infName{
    color: #333;
    padding-top: 0.01rem;
    font-weight: 700;
  }
  .bzp{
    font-size: 0.5rem;
    color: #999;
    border: 0.1rem solid #f1f1f1;
    padding: 0.1rem 0.04rem 0 0.04rem;
    line-height: 1rem;
    border-radius: 0.2rem;
    font-weight: 400;
  }

  /*  第二行 */
  .star{
    display: inline-block;
    font-size: 0.4rem;
  }
  .rating{
    font-size: 0.4rem;
    color: #ff9a0d;;
    margin: 0 0.2rem;
  }
  .recent_order_num{
    font-size: 0.1rem;
    transform: scale(0.9);
    color: #666;
  }
  .delivery_mode_text{
    color: #fff;
    background-color: #3190e8;
    border: 0.025rem solid #3190e8;
    font-size: 0.05rem;
    font-weight: 400;
    transform: scale(0.7);
    padding: 0.2rem 0.1rem 0;
    border-radius: 0.2rem;
    margin-right: -1rem;
  }
  .zsd{
    color: #3190e8;
    border: 0.05rem solid #3190e8;
    font-weight: 400;
    transform: scale(0.7);
    border-radius: 0.2rem;
    padding: 0.1rem 0.1rem 0;
    font-size: 0.1rem;
  }

  /*  第三行 */
  .float_minimum_order_amount{
    font-size: 1rem;
    color: #666;
    line-height: 1rem;
  }
  .ten_km{
    font-size: 1rem;
    margin-top: 0.07rem;
    color: #666;
  }
  .forty_minute{
    font-size: 1rem;
    margin-top: 0.07rem;
  }
  .infA > span{
    display: inline-block;
    margin-bottom: 0.7rem;
  }

</style>
