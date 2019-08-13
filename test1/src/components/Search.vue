<template>
    <div class="search">
      <van-nav-bar id="one"
                   title="搜索"
                   left-text=""
                   right-text=""
                   left-arrow
                   @click-left="onClickLeft"
      />
      <!--搜索输入框和按钮-->
      <section id="inp">
        <input type="text" placeholder="请输入商家或美食名称" v-model="value1" @input="changes">
        <button @click="searchs">提交</button>
      </section>
      <!--下面会出现的数据-->
      <!--不点击搜索出现的效果-->
      <h4 v-if="show2">搜索历史</h4>
      <!--历史记录-->
      <section id="lishi" v-if="show4">
        <ul>
          <li v-for="(k,i) in arr2" class="historyline">
            <span>{{k}}</span>
            <span @click="del(i)" class="pull-right">X</span>
          </li>
          <li style="text-align: center;padding: 1rem;background: white;color: #3190e8;font-size: 1.5rem;font-weight: 600" @click="removeall">清空搜索历史</li>
        </ul>
      </section>
      <!--点击搜索后出现的效果-->
      <h4 v-if="show1">商家</h4>
      <section id="datas" v-if="show3">
        <ul>
          <li v-for="(k,i) in result" class="every">
            <!--商户品牌图片-->
            <section class="left">
              <img :src="'//elm.cangdu.org/img/' + k.image_path">
            </section>
            <!--右半边介绍-->
            <section class="right">
              <!--第一行-->
              <p class="first">
                {{k.name}}
                <span class="logo">
                  支付
                </span>
              </p>
              <!--第二行-->
              <p class="second">
                月售{{k.recent_order_num}}单
              </p>
              <!--第三行-->
              <p class="third">
                {{k.float_minimum_order_amount}}元起送/距离{{k.distance}}
              </p>
            </section>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
    export default {
      name: "Search",
      data(){
        return{
            value1:"",
            jingdu:localStorage.getItem("jingdu"),
            weidu:localStorage.getItem("weidu"),
            jingweidu1:[],
            jingweidu2:[],
            result:"",
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            arr1:[],
            arr2:[],
        }
      },
      methods: {
        onClickLeft() {
          this.$router.go(-1);

        },
        searchs(){
          //请求商家数据
          this.$http({
            method: 'get',
            url: "https://elm.cangdu.org/v4/restaurants?geohash="+this.jingweidu2+"&keyword="+this.value1,
          }).then(res => {
            console.log(res.data);
            this.result = res.data;
            this.show1 = true;
            this.show2 = false;
            this.show3 = true;
            this.show4 = false;
            //保存搜索历史
            this.arr1 = JSON.parse(localStorage.getItem("searchhistory"))||[];
            this.arr1.push(this.value1);
            localStorage.setItem("searchhistory",JSON.stringify(this.arr1));
            console.log(this.arr1);
          });
        },
        del(i){
          this.arr1.splice(i,1);
          console.log(this.arr1);
          localStorage.setItem("searchhistory",JSON.stringify(this.arr1));
        },
        removeall(){
          this.arr1.splice(0,99);
          this.$store.commit("clearHistory");
        },
        changes(){
          if(this.value1 == ""){
            this.show1 = false;
            this.show3 = false;

            this.show2 = true;
            this.show4 = true;
          }else{
            this.show1 = true;
            this.show3 = true;

            this.show2 = false;
            this.show4 = false;
          }
        }
      },
      created(){
        console.log(this.jingdu,this.weidu);
        this.jingweidu1.push(this.weidu);
        this.jingweidu1.push(this.jingdu);
        console.log(this.jingweidu1);
        this.jingweidu2 = this.jingweidu1.join(",");
        console.log(this.jingweidu2);
        this.arr1 = JSON.parse(localStorage.getItem("searchhistory"));
      //删除记录时的vuex和localStorage的结合
        this.$store.commit("getSearchHistory",this.arr1);
        this.arr2 = this.$store.state.a.searchhistory;
        console.log(this.arr2);
      //判断搜索商家和历史记录出现的顺序
      if(this.arr1 != null){
          this.show2 = true;
          this.show4 = true;
          this.show1 = false;
          this.show3 = false;
      }else{
        this.show1 = true;
        this.show3 = true;
        this.show2 = false;
        this.show4 = false;
      }
      }
    }
</script>

<style scoped>
  .search{
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
  #one{
    background: #3190e8;
  }
  .van-nav-bar .van-icon {
    color: white;
    font-size: 2rem;
  }

  .van-nav-bar__title {
    color: white;
    font-weight: 700;
    font-size: 2rem;
  }

  .van-nav-bar__text {
    color: white;
    font-size: 2rem;
  }

  #inp{
    background-color: #fff;
    padding: .5rem;
    display: flex;
  }
  #inp input{
    flex: 4;
    border: .025rem solid #e4e4e4;
    font-size: 1.5rem;
    color: #333;
    border-radius: .125rem;
    background-color: #f2f2f2;
    font-weight: 700;
    padding: 0 .25rem;
    height: 3rem;
  }
  #inp button{
    flex: 1;
    border: .025rem solid #3190e8;
    margin-left: .2rem;
    font-size: 1.5rem;
    color: #fff;
    border-radius: .125rem;
    background-color: #3190e8;
    font-weight: 700;
    padding: 0 .25rem;
    height: 3rem;
  }
  datas{
    background: white;
  }
  img{
    width: 3.5rem;
  }
  #datas{

  }
  .every{
    display: flex;
    padding: 1.5rem;
    border-bottom: 0.1rem solid #e4e4e4;
    background: white;
  }
  .every p{
    margin: 0;
  }
  .left{

  }
  .right{
    border-bottom: 0.1rem solid #e4e4e4;
  }
  .historyline{
    background: white;
    border-bottom: .025rem solid #e4e4e4;
    font: 1.6rem Microsoft YaHei;
    padding: 1rem;
  }
</style>
