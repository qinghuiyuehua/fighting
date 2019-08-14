<template>
    <div class="mybenefit">
      <!--  上部蓝色框  -->
      <div class="head">
        <!--  头部  -->
        <div class="first_line">
          <van-icon name="arrow-left" class="arrow-left pull-left" @click="goBack()"/>
          <span class="title_name">我的优惠</span>
        </div>
        <!--  红包  商家代金券  -->
        <van-row class="two_line">
          <van-col span="12" class="text-center" >
            <span class="two_line_name":class="{two_line_name_click:key ==1}" @click="selectName1(1)">红包</span></van-col>
          <van-col span="12" class="text-center">
            <span class="two_line_name" :class="{two_line_name_click:key ==2}" @click="selectName2(2)">商家代金券</span></van-col>
        </van-row>
      </div>

      <!--  红包内容 -->
        <div class="red_packet">
          <!--  每一个红包   -->
          <div :class="{red:key ==1}" v-if="show_1">
            <span class="red_packet_first_line">
          <span class="due">有<span class="red_packet_number">{{redPacketNumber}}</span>个红包即将到期</span>
        <router-link :to="{path:'/redpacketdescribe'}">
          <span class="surplus_text pull-right">红包说明</span>
          <van-icon name="question" class="question_icon pull-right"/>
        </router-link>
        </span>
            <div class="red_content" v-for="(v,index) in redPacketData">
          <span class="red_left pull-left">
            <p class="v_icon">￥<span class="v_amount">{{v.amount}}</span>元</p>
            <p class="v_description_mapsum_condition">{{v.description_map.sum_condition}}</p>
          </span>
              <span class="red_right pull-left">
            <li>
              <span class="v_name">{{v.name}}</span>
              <span class="v_description_map_validity_delta pull-right">{{v.description_map.validity_delta}}</span>
            </li>
            <li class="v.description_map_validity_periods">{{v.description_map.validity_periods}}</li>
            <li class="names">限货手机号为{{names}}</li>
                <!--<li v-if="v.limit_map" class="v_limit_map_restaurant_flavor_ids pull-left">{{v.limit_map.restaurant_flavor_ids}}</li>-->
          </span>

            </div>
            <router-link :to="{path:'/checkredhistory'}">
              <p class="check_red_history">查看红包历史 <van-icon name="arrow" class="check_red_history_arrow arrow-right"/></p>
            </router-link>
            <!--  footer -->
            <van-row class="footer">
              <router-link :to="{path:'/exchangered'}">
                <van-col span="12" class="left_border">
                  <span class="footer_name_left">兑换红包</span>
                </van-col>
              </router-link>

              <router-link :to="{path:'/introduce'}">
                <van-col span="12">
                  <span class="footer_name_right">推荐有奖</span>
                </van-col>
              </router-link>

            </van-row>
          </div>
          <!--    商家代金券页面   -->
          <div :class="{business_vouchers:key ==2}" v-if="!show_2">

            <li class="top_line">
              <router-link :to="{path:'/businessvouchersdescribe'}">
                <span class="surplus_text pull-right">商家代金券说明</span>
                <van-icon name="question" class="question_icon_business_vouchers_describe pull-right"/>
              </router-link>
            </li>
            <li class="img_li">
              <img src="../img/voucher.png" class="vouchers_img">
            </li>
            <li class="text1">无法使用代金券</li>
            <li class="text2">非客户端或客户端版本过低</li>
            <router-link :to="{path:'/downloadapp'}">
              <p class="download_update" @click="download_update()">下载或升级客户端</p>
            </router-link>

          </div>
      </div>

    </div>
</template>

<script>
  import Vue from "vue"
    export default {
      name: "MyBenefit",
      data(){
        return{
          key: '',
          redPacketNumber: "",
          redPacketData: [],
          names: "",
          //   控制红包和商家代金券两列的显隐
          show_1: true,
          show_2: true,
        }
      },
      methods:{
        goBack(){
          window.history.go(-1);
        },
        selectName1(id){
          this.key = id;
          this.show_1 = true;
          this.show_2 = true;
        },
        selectName2(id){
          this.key = id;
          this.show_1 = false;
          this.show_2 = false;
        },

      },
      created(){
        //    默认显示红包页面
        this.key = 1;
        //   获取 限货手机号
        this.names = this.$store.state.a.message;
        let abc = this.$store.state;
        //    获取红包数据
        Vue.axios.get("https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0").then((result)=>{
          // console.log(result.data);
          //     红包个数  result.data.length
          this.redPacketNumber = result.data.length;
        //    红包数据
          this.redPacketData = result.data;
        }).catch((error)=>{
          console.log(error);
        })
      }
    }
</script>

<style scoped>
  .mybenefit{
    background:  #f5f5f5;
    height: 100%;
  }
  .head{
    background: #3190e8;
    width: 100%;
  }
  .first_line{
    line-height: 4rem;
    text-align: center;
  }
  .arrow-left{
    line-height: 4rem;
    color: white;
    font-size: 2rem;
  }
  .title_name{
    color: white;
    font-size: 2rem;
    text-align: center;
  }
  .two_line{
    background: white;
    font-size: 1.5rem;
  }
  .two_line_name{
    line-height: 4rem;
    padding-bottom: 0.3rem;
  }
  .two_line_name_click{
    color: #3190e8;
    border-bottom: 0.2rem solid #3190e8;
  }
  /*  红包  */
  .red_packet{
    padding: 0 1rem 0 1rem;
  }
  .red_packet_number{
    color: #ff5f3e;
    margin: 0 0.3rem 0 0.3rem;
  }
  .red_packet_first_line{
    line-height: 4rem;
  }
  .due{
    line-height: 4rem;
  }
  .question_icon{
    line-height: 4rem;
    color: #3190e8;
    margin-right: 0.3rem;
    font-size: 1.7rem;
  }

  /*   红包内容  */
  .red_content{
    display: flex;
    align-items: center;
    width: 96%;
    background: white;
    margin-left: 2%;
    margin-bottom: 2rem;
    border-radius: 0.8rem;
    border-top: 0.25rem dashed #ff5340;
    padding: 1rem 1.2rem 1rem 1.2rem;
    height:8rem;

  }
  .red_left{
    vertical-align: middle;
    border-right: 0.05rem dotted #ccc;
    padding-right: 1rem;
    margin-right: 1.5rem;
  }
  .v_icon{
    color: #ff5340;
  }
  /*   1.0  */
  .v_amount{
    font-size: 3rem;
  }
  /*   满20元可用  */
  .v_description_mapsum_condition{
    margin-top: -1rem;
  }
  /*   剩 3 日*/
  .v_description_map_validity_delta{
    color: #ff5340;
    font-size: 2rem;
    margin-right: -1.5rem;
  }

  /*   商家代金券   */
  .business_vouchers{
    margin-top: 1.5rem;
    text-align: center;
  }
  .top_line{
    line-height: 1rem;
  }
  .question_icon_business_vouchers_describe{
    line-height: 1rem;
    font-size: 1.7rem;
  }
  .surplus_text, .question_icon_business_vouchers_describe{
    color: #3190e8;
  }
  .img_li{
    padding-top: 9rem;
  }
  .vouchers_img{
    width: 13rem;
  }
  .text1{
    color: #666;
    line-height: 2.5rem;
   }
  .text2{
    color: #999;
    font-size: 1rem;
    line-height: 2rem;
  }
  /*   下载或升级客户端按钮   */
  .download_update{
    background: #56d176;;
    font-size:1.5rem;
    color: white;
    border-radius: 0.5rem;
    width: 40%;
    margin-left: 30%;
    line-height: 3rem;
    text-align: center;
  }

  /*   查看红包历史   */
  .check_red_history{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
  }
  /*   footer  */
  .footer{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 4rem;
    text-align: center;
    font-size: 2rem;
    background: white;
  }
  .left_border{
    border-right: 0.05rem solid rgb(245, 245, 245);
  }
</style>
