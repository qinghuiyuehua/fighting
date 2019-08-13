<template>
    <div class="city">
      <!--蓝色区域-->
    <div class="header">
      <span class="word" >
        <a href="" target="_top" >ele.me</a>
      </span>
      <span class="login_zhuce pull-right ">
        <router-link :to="{path:'/login'}" style="color: white" v-if="get1">登录|注册</router-link>
        <router-link :to="{path:'/mine'}" v-if="get2">小人</router-link>
      </span>
    </div>
      <!--当前定位城市-->
      <div class="nows">
        <div class="nows1">
          <span>当前定位城市: </span>
          <span class="pull-right">定位不准时,请在城市列表中选择 </span>
        </div>
      </div>
      <hr>
      <!--定位城市-->
      <div class="dingwei">
        <div class="dingwei1" @click="guessClick(city3)">
            <span>{{city3.name}}</span>
          <van-icon name="arrow" class="van1"/>
        </div>
      </div>

      <!--灰色分隔条-->
      <div class="gray"></div>
      <!--热门城市-->
      <div class="hot">
        <h4 class="hot1">
          热门城市
        </h4>
        <ul class="hot2">
          <li v-for="(k,i) in city1" @click="hotClick(k)">{{k.name}}</li>
        </ul>
      </div>

      <div class="allcity">
        <ul class="allcity1">
          <li v-for="(k,i) in city2" class="one">
            <h4>{{k[0]}}</h4>
            <ul class="two">
              <li v-for="(kk,ii) in k[1]" class="three" @click="groupClick(kk)">{{kk.name}}</li>
            </ul>
          <div class="line"></div>
          </li>
        </ul>
        <span class="paixu">(按字母排序)</span>
      </div>

      <!--<div v-for="(k,i) in city1">{{k.name}}</div>-->
      <!--<hr>-->
      <!--<div v-for="(k,i) in city2">-->
        <!--<span>{{k[0]}}</span>-->
        <!--<hr>-->
        <!--<div v-for="(kk,ii) in k[1]">-->
          <!--<span>{{kk.name}}</span>-->
        <!--</div>-->
      <!--</div>-->
    </div>
</template>

<script>
    import Vue from "vue";
    export default {
        name: "city",
        data(){
          return{
            city1:[],
            city2:[],
            city3:[],
            get1:true,
            get2:false,
            name1:[],
          }
        },
      methods:{
        hotClick(v){
          console.log(v);
          this.$store.commit("getCityMsg1",v);
          this.$store.commit("getid",v.id);
          this.$router.push({path:"/citysearch"});
          // this.$router.push({path:"/SearchPage",query:{arrObj:V.id}});
        },
        guessClick(v){
          console.log(v);
          this.$store.commit("getCityMsg1",v);
          this.$store.commit("getid",v.id);
          this.$router.push({path:"/citysearch"});
          // this.$router.push({path:"/SearchPage",query:{arrObj:v.id}});
        },
        groupClick(v){
          console.log(v);
          this.$store.commit("getCityMsg1",v);
          this.$store.commit("getid",v.id);
          this.$router.push({path:"/citysearch"});
          // this.$router.push({path:"/SearchPage",query:{arrObj:v.id}});
        }
          },
        created(){
          //当前城市
          Vue.axios.get("https://elm.cangdu.org/v1/cities?type=guess").then((res)=>{
            // console.log(res.data);
            this.city3=res.data;
          }).catch((error)=>{
            console.log(error);
          });
          //热门城市
          Vue.axios.get("https://elm.cangdu.org/v1/cities?type=hot").then((result)=>{
            // console.log(result);
            this.city1 = result.data;
            this.city1.map(function(value,index){
              // console.log(index,value.name);
            });
          }).catch((error)=>{
            console.log(error);
          });

          // 所有城市
          Vue.axios.get("https://elm.cangdu.org/v1/cities?type=group").then((result)=>{
            // console.log(result);
            console.log(result.data);
            //排序A-Z
            let a = [];
            for (let i = 65; i <= 90; i++) {
              const b = String.fromCodePoint(i);
              if (result.data[b]) {
                a.push([b,result.data[b]])
              }
            }
            // console.log(a);
            this.city2 = a;


          }).catch((error)=>{
            console.log(error);
          });

          // 判断是否已经登陆过或者注册过,如发生过,就将字变成小图标
          if(this.$store.state.a.flag=="ok"){
              this.get1 = false;
              this.get2 = true;

          }
        }
    }
</script>

<style scoped>
.header{
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #3190e8;
}
  .word{
    left: .4rem;
    font-weight: 400;
    font-size: 2rem;
    color: #fff;
    width: 2.3rem;
    height: .7rem;
    position: absolute;
    top: 25%;
    /*transform: translateY(-80%);*/
  }
  .word a{
    text-decoration: none;
  }

.word a:active{
  color: white;
}
.word a:visited{
  color: white;
}

  .login_zhuce{
    font-size: 2rem;
    font-weight: 400;
    color: #fff;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  .nows{
    width: 100%;
    height: 4rem;
    position: absolute;
    top: 4rem;
    font-size: 1rem;
    line-height: 4rem;
    border-bottom: 0.1rem solid gray;
    padding: 0 1rem;
  }
  .dingwei{
    padding: 0 1rem;
    width: 100%;
    height: 4rem;
    position: absolute;
    top: 8rem;
    font-size: 1.5rem;
    line-height: 4rem;
    border-bottom: 0.1rem solid gray;
  }
  .gray{
    width: 100%;
    height: 1.5rem;
    background: lightgrey;
    position: absolute;
    top: 12rem;
  }

  .hot{
    width: 100%;
    position: absolute;
    top: 13rem;
  }
  .hot2{
    width: 100%;
  }
  .hot2 li{
    text-align: center;
    display: inline-block;
    width: 25%;
    color: #3190e8;
    border: .1rem solid lightgrey;
    padding: 0.5rem;
  }
  .allcity{
    width: 100%;
    position: absolute;
    top: 22rem;
  }
  .two li{
    width: 25%;
    display: inline-block;
    color: gray;
    text-align: center;
    padding: 0.2rem;
    border: .1rem solid lightgrey;
    border-left: none;
    border-bottom: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .allcity h4{
    width: 100%;
    height: 100%;
    color: gray;
    padding-left: 1rem;
    border-left: .1rem solid lightgrey;
    border-right: .1rem solid lightgrey;
  }
  .line{
    width: 100%;
    height: 1rem;
    background: lightgrey;
  }
  .paixu{
    position: absolute;
    font-size: 1.5rem;
    top: 0;
    left: 3rem;
    line-height: 3rem;
    color: #999;;
  }
  .three{

  }
.van1{
  position: absolute;
  right: .8rem;
  top: 1rem;
  color:#666;
}
.dingwei1{
  position: relative;
  color: #3190e8;
}
  .hot1{
    padding: 0 1rem;
  }
</style>
