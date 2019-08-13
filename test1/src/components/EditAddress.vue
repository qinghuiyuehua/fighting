<template>
    <div class="editaddress">
      <van-nav-bar id="one"
        title="编辑地址"
        left-text=""
        right-text=""
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <div class="make" v-if="show2" @click="make1">编辑</div>
      <div class="make" v-if="show3" @click="make2">完成</div>
      <ul>
        <!--在这个页面上,先存储一个初始的数组,这时的数组没有与Vuex联系,做不到及时渲染更新,所以需要将数组数据传入vuex中,在Vuex中定义了一个新的本地化存储(带有Vuex)功能的数组,并且在这个页面定义一个新的变量接收他,让li遍历这个新的变量,但是删除的时候,需要删除老的数据,而不是删除新的数据,是因为新的数据的来源于更新取决于老的数据-->
        <li v-for="(k,i) in newaddress">
          <span>{{k.address2}}<br>{{k.phone1}}</span>
          <span class="pull-right" @click="del(i)" v-if="show1">X</span>
        </li>
      </ul>

      <section id="adds" class="per">
        <router-link :to="{path:'/addaddress'}">
          <span style="line-height: 6rem;margin-left: 1rem">新增地址</span>
          <span class="pull-right" style="line-height: 6rem;margin-right: 1rem" id="f">&gt
        </span>
        </router-link>
      </section>


    </div>
</template>

<script>
  export default {
    data(){
      return{
        address:"",
        newaddress:"",
        show1:false,
        show2:true,
        show3:false,
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      onClickRight() {
        this.show1 = true;
      },
      del(i){
        console.log(i);
        this.address.splice(i,1);
        console.log(this.address);
        localStorage.setItem("q",JSON.stringify(this.address));
      },
      make1(){
        this.show2 = false;
        this.show3 = true;
        this.show1 = true;
      },
      make2(){
        this.show2 = true;
        this.show3 = false;
        this.show1 = false;
      }
    },
    created(){
      //在创建完时,用变量address接收转化过的localStorage.getItem("q")的数据
      this.address = JSON.parse(localStorage.getItem("q"));
      console.log(this.address);
      //在这时调用Vuex的一个方法,把装了数据的数组address返回到Vuex页面上
      this.$store.commit("getNewAddress",this.address);
      //用一个新的变量newaddresss接收从Vuex传来的(Vuex和localStorage结合过的数据)数据
      this.newaddress = this.$store.state.a.newaddress1;
      //以下三行是为了查看state的属性,无代码作用
      console.log(this.newaddress);
      let abc = this.$store.state;
      console.log(abc);
      // this.names = this.$store.state.a.message;
    }
  }
</script>

<style scoped>
  .editaddress{
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

  .per{
    width: 100%;
    height: 10%;
    background: white;
    font-size: 2rem;
    border:0.01rem solid #333;
    border-left: none;
    border-right: none;
  }

  a{
    color: black;
    display: inline-block;
    width: 100%;
  }

  #adds{
    margin-top: 1rem;
  }

  li{
    border-bottom: 1px solid #d9d9d9;
    padding: 1rem;
  }
   li:first-child {
    background: #fff8c3;
  }
  .make{
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 99;
    color: white;
    font-size: 2rem;
  }
</style>
