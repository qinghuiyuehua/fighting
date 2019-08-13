<template>
    <div class="citysearch">
      <van-nav-bar id="one"
                   :title="names"
                   left-text=""
                   right-text="切换城市"
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight"
      />
      <section id="first">
      <input type="text" placeholder="输入学校/商务楼/地址" v-model="value1">
      <van-button type="info"  size="large"  style="width: 90%;height: 3.5rem" @click="searchs">提交</van-button>
    </section>
      <div>搜索历史</div>

      <!--这里出现的是搜索记录-->
      <ul>
        <li v-for="(k,i) in arr" @click="choose(k,i)" v-if="show1">
          <h4>{{k.name}}</h4>
          <p>{{k.address}}</p>
        </li>
      </ul>

      <!--这里出现的是搜索历史-->
      <ul>
        <li v-for="(k,i) in arr2" @click="choose2(k,i)" v-if="show2" >
          <h4>{{k.name}}</h4>
          <p>{{k.address}}</p>
        </li>
      </ul>

    </div>
</template>

<script>
    export default {
        name: "CitySearch",
        data(){
          return{
            names:"",
            value1:"",
            id:"",
            arr:[],
            oldarr:{},
            newarr:[],
            arr2:JSON.parse(localStorage.getItem("history")),
            show1:false,
            show2:true,
            jingdu:"",
            weidu:"",
          }
        },
        methods:{
          onClickLeft() {
            this.$router.go(-1);
          },
          onClickRight() {
            this.$router.go(-1);
          },
          searchs(){
            this.$http({
              method: 'get',
              url: "https://elm.cangdu.org/v1/pois?city_id="+this.id+"&keyword="+this.value1+"&type=search",
            }).then(res => {
              console.log(res);
              this.arr = res.data;
              this.show1 = true;
              this.show2 = false;
            });
          },
          choose(k,i){
            console.log(k.name,k.address);
            //把搜索到的选择项存到vuex中,让主页使用
            this.$store.commit("getCityMsg2",k.name);
            //把选择的地址的名字和地址存到一个对象里
            this.oldarr.name = k.name;
            this.oldarr.address = k.address;
            //依次把对象放进数组里,并且把数组传到localstorage中
            this.newarr = JSON.parse(localStorage.getItem("history"))||[];
            this.newarr.push(this.oldarr);
            localStorage.setItem("history",JSON.stringify(this.newarr));
            //把选择的地址的经纬度存储到localstorage中
            this.weidu = k.latitude;
            this.jingdu = k.longitude;
            //存入localStorage里
            localStorage.setItem("jingdu",this.jingdu);
            localStorage.setItem("weidu",this.weidu);
            //测试
            console.log(this.newarr);
            console.log(this.oldarr);
            //跳转
            this.$router.push({path:"/home"});
          },
          choose2(k,i){
            //把搜索到的选择项存到vuex中,让主页使用
            this.$store.commit("getCityMsg2",k.name);
            //把选择的地址的经纬度存储到localstorage中
            this.weidu = k.latitude;
            this.jingdu = k.longitude;
            //存入localStorage里
            localStorage.setItem("jingdu",this.jingdu);
            localStorage.setItem("weidu",this.weidu);
            //跳转
            this.$router.push({path:"/home"});
          }
        },
       created(){
          this.names = this.$store.state.a.citymsg1.name;
          this.id = this.$store.state.a.citymsg1.id;
          console.log(this.$store.state.a.citymsg1.id);
          console.log(this.newarr);
      }
    }
</script>

<style scoped>
  .citysearch{
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

  #first{
    text-align: center;
    margin-top: 1rem;
    background: white;
    padding: 1rem;
  }
  #first input{
    width: 90%;
    height: 3rem;
    border: 1px solid #e4e4e4;
    padding: 0 .3rem;
    font-size: .65rem;
    color: #333;
    margin-bottom: 1rem;
  }
  li{
    margin: 0 auto;
    padding-top: 0.5rem;
    border-bottom: 1px solid #e4e4e4;
    background: white;
    padding-left: 2rem;
  }
  p{
    color: gray;
  }
</style>
