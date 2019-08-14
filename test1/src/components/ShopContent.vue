<template>
    <div class="shopcontent">
      <!--上部分-->
      <div id="top">
        <!--返回箭头-->
        <span class="back" @click="backs">&lt</span>
        <!--上部分中的第一部分-->
        <div id="topone">
          <!--第一部分的左边的图片-->
          <section class="imghead">
            <img :src="'//elm.cangdu.org/img/' + result.image_path" alt="">
          </section>
          <!--第一部分的右边的文字介绍-->
          <section class="jieshao">
            <p style="font-size: 2rem">{{result.name}}</p>
            <p>商家配送/分钟送达/配送费¥{{result.float_delivery_fee}}</p>
            <p>公告:{{result.promotion_info}}</p>
          </section>
          <!--进入详情箭头-->
          <span class="enter">
            &gt
          </span>
        </div>
        <!--上部分的第二部分-->
        <div id="toptwo">
          <!--第二部分的左边-->
          <!--满减活动提示-->
          <span v-for="(k,i) in result.activities" class="jian">
            {{k.icon_name}}
          </span>
          <span class="manjian" v-for="(k,i) in result.activities">
            {{k.description}}(APP专享)
          </span>
          <!--多少个活动-->
          <!--这里做判断的原因是:data中刚开始是空值,由于created中请求的赋值是异步的,所以会比直接赋值慢一步,导致不写判断会报length...undefined的问题-->
          <!--加上判断之后,会走第二遍赋值,因为第一遍直接渲染v-if为false,所以不走,第二遍赋值正确,就可以渲染上-->
          <span v-if="result" class="activities">{{result.activities.length}}个活动</span>
          <span class="enter2">&gt</span>
        </div>
        <!--后面的大图-->
        <div class="imgbig">
          <img :src="'//elm.cangdu.org/img/' + result.image_path" alt="">
        </div>
      </div>

      <!--中间层:商品和评价切换的选项按钮-->
      <div id="mid">
        <div class="midone">
          <section class="shangpin" @click="changes(1)"><span :class="{changeStyle:key == 1}">商品</span></section>
          <section class="pingjia" @click="changes(2)"><span :class="{changeStyle: key== 2}">评价</span></section>
        </div>
        <!--选项下面的蓝色指示条-->
        <div class="midtwo">
          <div class="line1" v-if="show1"></div>
          <div class="line2" v-if="show2"></div>
        </div>
      </div>
      <!--商品列表-->
      <div id="good">
        <!--左半边-->
        <!--侧导航栏-->
        <van-sidebar v-model="activeKey">
          <van-sidebar-item :title="k.name"  v-for="(k,i) in good" @click="selectBtn(k,i)"/>
        </van-sidebar>
        <!--右半边-->
        <div class="detail" ref="detail">
          <ul>
            <li v-for="(k,i) in good" class="everycon">
              <!--商品介绍标题-->
              <div class="sliceline">
                <span class="biaoti">{{k.name}}</span>
                <span class="biaotijieshao">{{k.description}}</span>
              </div>
              <!--标题里的详情-->
              <div class="con" v-for="(kk,ii) in k.foods">
                <!--商户图片-->
                <!--商品里左边的内容-->
                <div class="leftcon">
                  <img :src="'//elm.cangdu.org/img/'+kk.image_path">
                </div>
                <!--详情里右边的内容-->
                <div class="rightcon">


                  <!--商品内容详情第一行-->
                  <section class="conline1">
                    <!--商品名字-->
                    <span class="s1">{{kk.name}}</span>
                    <!--商品的销售的分类-->
                    <div class="xinpin" v-if="kk.attributes[0]">
                      <span v-if="kk.attributes[0]" class="s8">新品</span>
                    </div>
                    <div class="zhaopai">
                      <span v-if="kk.attributes[1]" class="s9">招牌</span>
                    </div>

                  </section>


                  <!--商品内容详情第二行-->
                  <section class="conline2">
                    <!--商品解释-->
                    <span class="s2">{{kk.description}}</span>
                  </section>


                  <!--商品内容详情第三行-->
                  <section class="conline3">
                    <!--商品月销售-->
                    <span class="s3">月售{{kk.month_sales}}份</span>
                    <!--商品满意度-->
                    <span class="s4">好评率{{kk.satisfy_rate}}%</span>
                  </section>


                  <!--商品内容详情第四行-->
                  <section class="conline4">
                    <!--商品参与的活动-->
                    <span class="s5" v-if="kk.activity">{{kk.activity.image_text}}</span>
                  </section>


                  <!--商品内容详情第五行-->
                  <section class="conline5">
                    <span v-for="(kkk,iii) in kk.specfoods" class="s3">
                    <!--每个商品的价钱-->
                    <span class="s6" v-if="iii == 0">¥{{kkk.price}}</span>
                      <!--每个商品的规格-->
                    <!--<span class="s7" v-if="kkk.specs_name != '默认'">{{kkk.specs_name}}</span>-->
                      <!--商品的规格的价钱的起步价-->
                      <span class="s7" v-if="kkk.specs_name != '默认'">起</span>
                      <!--商品的添加按钮-->
                      <span class="tianjia" v-if="kk.specfoods.length<=1" @click="addcar(kkk.price,kk)">+</span>
                      <!--商品的删减按钮-->
                      <span class="shanjian" v-if="kk.ishas" @click="cutcar(kkk.price,kk)">一</span>
                      <!--每个商品的加减数量-->
                      <span v-if="iscount">{{kk.count}}</span>
                      <!--商品的选规格按钮-->
                      <span class="xuanguige" v-if="kk.specfoods.length>1" @click="covers(kk)">选规格</span>

                  </span>
                  </section>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="car" @click.stop="carshow">
        <span class="carimg">
          <i class="el-icon-shopping-cart-2"></i>
        </span>
        <span v-model="nums" class="nums" v-if="nums>0">{{nums}}</span>
        <span v-model="prices" class="prices1">¥{{totalprice}}</span>
        <span class="prices2">配送费{{result.float_delivery_fee}}</span>
        <!--差多少起送-->
        <span class="cha" v-if="totalprice<result.float_minimum_order_amount">还差¥{{result.float_minimum_order_amount-totalprice}}起送</span>
        <!--去结算-->
        <span class="jiesuan" v-if="totalprice>=result.float_minimum_order_amount" @click="pay">去结算</span>
      </div>

      <!--购物车点击详情-->
      <div class="cardetail" v-if="cardetailshow">
        <!--第一行-->
        <section style="background: #eceff1;padding: 0.5rem">
          <span style="font-size: 2rem">购物车</span>
          <span @click="out" class="pull-right">清空</span>
        </section>
        <!--第二行-->
        <section v-for="(m,n) in cardetail" v-if="m.count!=0" style="background: white">
          <!--名字-->
          <span >{{m.name}}</span>
          <!--价钱-->
          <span  class="detailprice" style="color:#f60;font-size: 1rem;margin-top: 1.2rem">¥{{m.specfoods[0].price}}</span>
          <!--减号-->
          <span class="detailcut" @click="newcut(m,m.specfoods[0].price)">-</span>
          <!--数量-->
          <span class="detailnum" style="font-size: 1.5rem;margin-top: 1rem;">{{m.count}}</span>
          <!--加号-->
          <span class="detailadd" @click="newadd(m,m.specfoods[0].price)">+</span>
        </section>
      </div>


      <!--选规格的弹框内容-->
      <!--遮罩层-->
      <div class="cover"  v-if="cover">
      </div>
      <!--弹框-->
      <div class="alerts" v-if="cover">
        <!--第一行-->
        <section class="a1">
          {{name1.name}}
          <!--第一行的关闭按钮-->
          <span @click="nocovers" class="pull-right" style="margin-right: 1rem">X</span>
        </section>
        <!--第二行-->
        <section class="a2">
          <p>规格</p>
          <span v-for="(k,i) in name1.specfoods">
            <!--点击事件赋值下标-->
            <span @click="which=i" class="aa2">
              {{k.specs_name}}
            </span>
          </span>
        </section>
        <!--第三行-->
        <section class="a3">
           <span>
            <span class="aa3">
              ¥{{name1.specfoods[which].price}}
            </span>
          </span>
          <span class="aa4 pull-right">加入购物车</span>
        </section>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ShopContent",
        data(){
          return{
            id:localStorage.getItem("shopid"),
            result:"",
            good:"",
            key:"",
            show1:true,
            show2:false,
            one:true,
            two:false,
            activeKey: 0,
            cover:false,
            name1:"",
            which:0,
            prices:0,
            //最终面板上
            nums:0,
            totalprice:0,
            //二维数组
            arr:[],
            num2:[],
            showcut:false,
            iscount:false,
            cardetail:[],
            cardetailshow:false,
            newNum:false,
          }
        },
      methods:{
        changes(id){
          this.key= id;
          //当点击商品按钮
          if(this.key == 1){
            this.show1 = true;
            this.show2 = false;

            this.one = true;
            this.two = false;
          //当点击评价按钮
          }else if(this.key == 2){
            this.show2 = true;
            this.show1 = false;

            this.one = false;
            this.two = true;
          }
        },
        selectBtn(k,i){
          console.log(i);
          let a = document.querySelectorAll('.detail li');
          // console.log(a[i].offsetTop);
          this.$refs.detail.scrollTop = a[i].offsetTop;
        },
        backs(){
          this.$router.go(-1);
        },
        covers(kk,kkk){
          this.name1 = kk;
          this.cover = true;
          console.log(this.name1);
        },
        nocovers(){
          this.cover = false;
        },
        selectwhich(i){
          console.log(i);
        },
       //正常的加号添加到购物车
       addcar(price,val){
          this.nums++;
          this.totalprice += price;
          //点击哪一个拿到哪一个的具体属性
          // console.log(val);
          //判断点击哪一个商品,给哪一个商品设置count属性,如果没有就设置,有的话就加1
          if(val.count){
            val.count++;
            this.$set(val,"ishas",true);
            this.iscount = true;
          }else{
            this.$set(val,"count",1);
            this.$set(val,"ishas",true);
            this.iscount = true;
            //把这些添加过的数据放到购物车详情里
            //筛选是否之前添加过
            let abc = this.cardetail.find((newval)=>{return newval.name == val.name});
            if(!abc){
              this.cardetail.push(val);
            }

          }
          console.log(this.cardetail);
          //对原数据进行操作
          this.$store.commit("getCarGoodNums1",this.good);
       },
        //正常的减号从购物车减少
        cutcar(price,val){
          this.nums--;
          this.totalprice -= price;
          // console.log(this.totalprice);
          // console.log(this.prices);
          if(val.count >= 1){
            val.count--;
          }
          if(val.count == 0) {
            this.$delete(val,"ishas");
            this.iscount = false;
          }
        },
        //购物车购买详情
        carshow(){
          this.cardetailshow = true;
          console.log(this.cardetailshow.toString());
        },
        //暂时退出功能
        out(){
          this.cardetailshow = false;
          console.log(3333333);
          console.log(this.cardetailshow.toString());
        },
        //购物车详情的添加
        newadd(num,price){
          this.totalprice += price;
          this.nums++;
          num.count++;
          this.newNum = true;

        },
        //购物车详情的删减
        newcut(num,price){
          this.totalprice -= price;
          this.nums--;
          num.count--;
          if(num.count==0){
            this.newNum = false;
            this.$delete(num,"ishas");
            this.iscount = false;

          }
        },
        pay(){
          this.$router.push({path:"/pay"});
        }
      },
        created(){
          console.log(this.id);
          //获取商户详情
          this.$http({
            method: 'get',
            url: "https://elm.cangdu.org/shopping/restaurant/" + this.id,
          }).then(res => {
            console.log(res.data);
            this.result = res.data;
          });

          //获取商品列表
            this.$http({
              method: 'get',
              url: "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+ this.id,
            }).then(res => {
              console.log(res.data);
              this.good = res.data;
              // for(var i in res.data){
              //   var fArr = [];
              //   for (var j in res.data[j].foods) {
              //     var sArr = [];
              //     fArr.push(sArr)
              //   }
              //   this.arr.push(fArr)
              // }
              // console.log(this.arr)
              // this.$store.commit("getCarGoodNum",res.data);
            });
        }
    }
</script>

<style scoped>
  .back{
    color: white;
    position: absolute;
    top: 0;
    left: 0.5rem;
    font-size: 3rem;
    font-weight: 600;
  }
.imghead img{
  width: 6rem;
}
  .enter{
    color: white;
    position: absolute;
    top: 2.5rem;
    right: 1rem;
    font-size: 3rem;
    font-weight: 600;
  }
  #topone{
    display: flex;
    padding: 1rem;
  }
  #topone p {
    margin: 0.1rem;
  }
  .jieshao{
    margin-left: 0.5rem;
    color: white;
  }
  .jian{
    color: white;
    background-color: rgb(240, 115, 115);
    border-color: rgb(240, 115, 115);
  }
  #toptwo{
    margin-left: 1rem;
  }
  .manjian{
    color: white;
    margin-left: 0.5rem;
  }
  .enter2{
    color: white;
    font-size: 2rem;
  }
  .activities{
    color: white;
    margin-left: 6rem;
  }
  .imgbig{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .imgbig img{
    width: 100%;
    filter: blur(0.5rem);
  }
  #top{
    position: relative;
    z-index: 99;
    overflow: hidden;
  }
  #mid{
    background-color: #fff;
    padding: 1rem 0.5rem;
    border-bottom: 1px solid #ebebeb;
    font-size: 1.5rem;
    position: relative;
  }
  .midone{
    display: flex;
  }
  .shangpin{
    flex: 1;
    text-align: center;
  }
  .pingjia{
    flex: 1;
    text-align: center;
  }
  .line1{
    width: 3rem;
    background: #3190e8;
    height: 0.5rem;
    position: absolute;
    top: 2.7rem;
    left: 6.5rem;
  }
  .line2{
    width: 3rem;
    background: #3190e8;
    height: 0.5rem;
    position: absolute;
    top: 2.7rem;
    right: 6.5rem;
  }
  .changeStyle{
    color: #3190e8;
  }
  #good{
    display: flex;
  }
  .van-sidebar {
    flex: 1;
  }
  .detail{
    flex: 4;
    height: 41.5rem;
    overflow-y: scroll;
    position: relative;
  }
  .sliceline{
    background: #f5f5f5;
    padding: 1rem;
    overflow: hidden;
  }
  .biaoti{
    font-size: 2rem;
  }
  .con{
    padding: 1rem;
    background: white;
    border-bottom: .2rem solid #f5f5f5;
    display: flex;
    position: relative;
    overflow: hidden;
  }
  .con img{
    width: 4rem;
  }
  .s1{
    font-size: 2rem;
    font-weight: 600;
  }
  .s2{
    font-size: .5rem;
    color: #999;
    line-height: .6rem;
  }
  .s3{
    font-size: .5rem;
    color: #333;
  }
  .s4{
    font-size: .5rem;
    color: #333;
  }
  .s5{
    color: rgb(241, 136, 79);
    border-color: rgb(240, 115, 115);
    font-size: .3rem;
    border: 1px solid currentColor;
    border-radius: 1rem;
    padding: .08rem;
    display: inline-block;
    transform: scale(.8);
    margin-left: -.35rem;
  }
  .s6{
    font-size: 1.5rem;
    color: #f60;
    font-weight: 700;
    margin-right: .3rem;
  }
  .s8{
    display: inline-block;
    font-size: 0.5rem;
    color: #fff;
    text-align: center;
    line-height: 3rem;
    transform: translate(0.5rem,1rem);
  }
  .s9{

  }
  .con div{

  }
  .leftcon{

  }
  .rightcon{
    margin-left: 1.5rem;
  }
  .xinpin{
    color: rgb(94, 196, 82);
    border-color: rgb(94, 196, 82);
    position: absolute;
    top: 0;
    left: 0;
    background-color: #4cd964;
    width: 3rem;
    height: 3rem;
    transform: rotate(-45deg) translate(0rem,-2rem);
  }
  .everycon{
    overflow: hidden;
  }
  .s9{
    color: rgb(240, 115, 115);
    font-size: 1rem;
    border: 0.1rem solid rgb(240, 115, 115);
    border-radius: 1rem;
  }
  .zhaopai{
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  .tianjia{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 2rem;
    border: 0.2rem solid #3190e8;
    border-radius: 50%;
    line-height: 1rem;
    background:  #3190e8;
    color: white;
  }
  .shanjian{
    position: absolute;
    bottom: 1rem;
    right: 3rem;
    font-size: 1.5rem;
    border: 0.2rem solid #3190e8;
    border-radius: 50%;
    line-height: 1rem;
    background:  white;
    color: #3190e8;
    width: 1.5rem;
  }
  .xuanguige{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.2rem;
    border: 0.2rem solid #3190e8;
    border-radius: 10%;
    line-height: 1rem;
    background:  #3190e8;
    color: white;
  }
  .van-sidebar[data-v-26aa0523] {
     overflow-y: scroll;
     height: 41.5rem;
  }
  .cover{
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:#000;
    opacity:0.5;
    z-index: 999;
  }
  .alerts{
    position: absolute;
    left: 6rem;
    top: 20rem;
    background: white;
    width: 20rem;
    height: 15rem;
    opacity: 1;
    z-index: 9999;
  }
  .a1{
    font-size: 2rem;
    text-align: center;
    padding: 1rem;
  }
  .a2{
    padding: 1rem;
  }
  .a2 p{
    margin: 0;
    padding: 0;
  }
  .aa2{
    border: 0.1rem solid #3199e8;
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    font-size: 2rem;
  }
  .a3{
    background: #f9f9f9;
    padding: 1rem;
  }
  .aa3{
    color: #ff6000;
    font-size: 2rem;
  }
  .aa4{
    /*width: 4rem;*/
    /*height: 1.3rem;*/
    background-color: #3199e8;
    border: 1px;
    border-radius: .15rem;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    /*line-height: 1.3rem;*/
    margin-top: 0.5rem;
    padding: 0.5rem;
  }
  .car{
    position: absolute;
    font-size: 3rem;
    bottom: 0;
    left: 0;
    background: #333;
    width: 100%;
    height: 4rem;
  }
  .carimg{
    background-color: #3d3d3f;
    position: absolute;
    padding: 0.5rem;
    border: .18rem solid #444;
    border-radius: 50%;
    left: 1rem;
    top: -1.5rem;
    color: white;
    width: 4.5rem;
    z-index: 9;
  }
  .prices1{
    position: absolute;
    left: 6rem;
    font-size: 2rem;
    color: white;
    z-index: 99;
  }
  .prices2{
    position: absolute;
    left: 6.5rem;
    bottom: 0;
    font-size: 1rem;
    color: white;
    z-index: 99;
  }
  .cha{
    position: absolute;
    top: 0;
    right: 0;
    background: #535356;
    height: 100%;
    font-size: 2rem;
    color: white;
    text-align: center;
    line-height: 4rem;
  }
  .jiesuan{
    position: absolute;
    top: 0;
    right: 0;
    background: #4cd964;
    height: 100%;
    font-size: 2rem;
    color: white;
    text-align: center;
    line-height: 4rem;
  }
  .nums{
    position: absolute;
    top: -1.7rem;
    left: 4rem;
    width: 2rem;
    background: red;
    color: white;
    font-size: 1.5rem;
    border-radius: 50%;
    text-align: center;
  }
  .cardetail{
    position: absolute;
    left: 0;
    bottom: 6rem;
    background: red;
    font-size: 3rem;
    width: 100%;

  }
  .detailadd{
    position: absolute;
    right: 0.5rem;
    font-size: 2rem;
    margin-top: 0.7rem;
  }
  .detailcut{
    position: absolute;
    right: 5rem;
  }
  .detailnum{
    position: absolute;
    right: 1.5rem;
    width: 2rem;
    height: 2rem;
  }
  .detailprice{
    position: absolute;
    right: 8rem;
    width: 2rem;
    height: 2rem;
  }
  .nums{
    z-index: 9;
  }
</style>
