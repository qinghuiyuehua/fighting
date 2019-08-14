<template>
    <div class="details">
     <div v-if="ty70===1">
       <van-nav-bar
         title="商家详情"
         left-arrow
         @click-left="onClickLeft"
       />
       <div class="two">
         <header class="headerU">活动与属性</header>
         <ul class="actibities_ul">
           <li v-for="page7 in cc5.activities">
             <span class="actibitiesSpan1">{{page7.icon_name}}</span>
             <span class="actibitiesSpan2">{{page7.description}}(APP专享)</span>
           </li>
         </ul>
         <ul class="actibities_ul">
           <li v-for="page8 in cc5.supports">
             <span class="actibitiesSpan1">{{page8.icon_name}}</span>
             <span class="actibitiesSpan2">{{page8.description}}(APP专享)</span>
           </li>
         </ul>
       </div>
       <div class="shop_status_container">
         <div class="shop_status_header">
           <div @click="pppp">
             <span class="shop_detail_title">食品监督安全公示</span>
             <div class="qiye">
               <span class="identification_detail">企业认证详情</span>
               <van-icon name="arrow" />
             </div>
           </div>
           <div class="shop_statu_detail">
             <div><img src="../img/cha.png" v-if="img6===1" class="res-well"><img src="../img/hao.png" v-if="img6===2" class="res-well"></div>
             <div class="check_date"><p><span>监督检查结果：</span><span class="shop_status_bad">{{ratings}}</span></p>
               <p><span>检查日期：</span><span></span></p></div>
           </div>
         </div>
       </div>
       <div class="shop_status_info">
         <header>商家信息</header>
         <p>{{cc5.name}}</p>
         <p>地址：{{cc5.address}}</p>
         <p>营业时间：{{page90[0]}}</p>
         <p @click="showPopup1">
           <span>营业执照</span> <van-icon name="arrow" class="a1" />
         </p>
         <p @click="showPopup2">
           <span>餐饮服务许可证</span> <van-icon name="arrow" class="a2"/>
         </p>
         <van-popup v-model="show1"><img :src="'//elm.cangdu.org/img/'+license.business_license_image"></van-popup>
         <van-popup v-model="show2"><img :src="'//elm.cangdu.org/img/'+license.catering_service_license_image"></van-popup>
       </div>
     </div>
      <div v-if="ty70===2">
        <van-nav-bar
          title="食品监督安全公示"
          left-arrow
          @click-left="onClickLeft1"
        />
        <div class="shop_status_container">
          <div class="shop_status_header">
            <span class="shop_detail_title">食品监督安全公示</span>
            <div class="shop_statu_detail">
              <div><img src="../img/cha.png" v-if="img6===1" class="res-well"><img src="../img/hao.png" v-if="img6===2" class="res-well"></div>
              <div class="check_date"><p><span>监督检查结果：</span><span class="shop_status_bad">{{ratings}}</span></p>
                <p><span>检查日期：</span><span></span></p></div>
            </div>
          </div>
        </div>
        <div class="shop_status_container">
          <div class="header"><span>工商登记信息</span></div>
          <ul>
            <li>企业名称：{{ty71.company_name}}</li>
            <li>工商执照注册号：{{ty71.registered_number}}</li>
            <li>注册资本：</li>
            <li>注册地址：{{ty71.registered_address}}</li>
            <li>属地监管所：{{ty71.identificate_agency}}</li>
            <li>法定代表人：{{ty71.legal_person}}</li>
            <li>经营范围：{{ty71.operation_period}}</li>
          </ul>
        </div>
        <div class="shop_status_container">
          <div class="header"><span>工商登记信息</span></div>
          <ul>
            <li>营业范围：</li>
            <li>许可证有效期：{{ty71.licenses_date}}</li>
            <li>许可证号：{{ty71.licenses_number}}</li>
            <li>发证时间：{{ty71.operation_period}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BusinessDetails",
      data(){
          return{
            cc5:{},
            ratings:'',
            img6:'1',
            page90:[],
            show1: false,
            show2: false,
            license:{},
            ty70:1,
            ty71:{},
            cc78:{}
          }
      },
      mounted(){
        let geo=localStorage.getItem('arrObj9');
        this.cc78 = JSON.parse(geo);
        this.cc5 = JSON.parse(geo);
        this.ty71=JSON.parse(geo).identification;
        let rating=JSON.parse(geo).rating;
        this.page90=JSON.parse(geo).opening_hours;
        this.license=JSON.parse(geo).license;
        if (rating>=3){
          this.ratings='良好';
          this.img6=2;
        } else {
          this.ratings='差';
        }
        // console.log(this.cc5,"传来的商家详情值",rating,this.ratings);
      },
      methods:{
        onClickLeft() {
          window.history.go(-1);
        },
        showPopup1() {
          this.show1 = true;
        },
        showPopup2() {
          this.show2 = true;
        },
        pppp(){
          this.ty70=2;
        },
        onClickLeft1(){
          this.ty70=1;
        }
      }
    }
</script>

<style scoped>
.van-nav-bar{
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
}
  .van-icon-arrow-left{
    color: #fff;
    font-size: 2.5rem;
  }
  .van-nav-bar__title{
    font-size: 1.6rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
  .two{
    margin-top: 4.4rem;
    background-color: #fff;
    padding-bottom: 1.2rem;
  }
  .headerU{
    font-size: 1.8rem;
    color: #333;
    line-height: 4rem;
    padding-left: 1rem;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: .3rem;
  }
  .actibitiesSpan1{
    background-color: rgb(240, 115, 115);
    font-size: 1.3rem;
    color: #fff;
    padding: .2rem;
    border: 1px;
    border-radius: .2rem;
    margin-right: .8rem;
    margin-left: 1rem;
  }
  .actibitiesSpan2{
    font-size: 1rem;
    color: #666;
    display: inline-block;
    padding-top: 1rem;
  }
.shop_status_container{
  background-color: #fff;
  margin-bottom: .8rem;
}
.shop_status_header{
  /*display: -ms-flexbox;*/
  /*display: flex;*/
  position: relative;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  line-height: 3rem;
  padding: 1rem;
  border-bottom: .05rem solid #f1f1f1;
}
.shop_detail_title{
  font-size: 1.5rem;
  color: #333;
}
.qiye{
  display: inline-block;
   margin-left: 10rem;
}
.identification_detail{
  font-size: 1.4rem;
  color: #bbb;
  vertical-align: middle;
}
.shop_statu_detail{
  display: -ms-flexbox;
  display: flex;
  padding: 1.2rem;
}
.res-well{
  width: 4rem;
  height: 4rem;
  margin-right: 1.2rem;
}
.check_date p{
  margin: 0;
  padding: 0;
}
 .check_date span{
  font-size: 1.1rem;
  color: #666;
}
.shop_status_info {
  background-color: #fff;
  margin-bottom: .4rem;
}
.shop_status_info header{
  line-height: 2rem;
  padding: 1rem;
  font-size: 1.8rem;
  color: #333;
  border-bottom: .025rem solid #f1f1f1;
}
.shop_status_info p{
  font-size: 1.6rem;
  color: #666;
  padding: 1rem 1rem .2rem 0;
  margin-left: .6rem;
  border-bottom: .025rem solid #f5f5f5;
  width: 100%;
}
  .a1{
    margin-left: 22rem;
  }
  .a2{
    margin-left: 18rem;
  }
.shop_status_container {
  background-color: #fff;
  margin-bottom: .4rem;
}
.shop_status_container .header {
  line-height: 2rem;
  padding: .6rem;
  border-bottom: .05rem solid #f1f1f1;
  font-size: 1.5rem;
  color: #333;
}
 .shop_status_container ul {
  margin-left: 1.2rem;
  padding: .8rem 0;
}
.shop_status_container ul li {
  margin-bottom: .8rem;
}
</style>
