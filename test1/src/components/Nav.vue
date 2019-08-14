<template>
    <div class="nav">
      <div id="bottom">
        <section id="one" @click="changes(1)">
          <router-link :to="{path:'/home'}">
            <i class="el-icon-eleme a" :class="{changeStyle: key ==1}"></i>
            <p>外卖</p>
          </router-link>
        </section>
        <section id="two" @click="changes(2)">
          <router-link :to="{path:'/search'}">
            <i class="el-icon-discover a" :class="{changeStyle: key ==2}"></i>
            <p>搜索</p>
          </router-link>
        </section>
        <section id="three" @click="changes(3)">
          <router-link :to="{path:'/order'}">
            <i class="el-icon-tickets a" :class="{changeStyle: key==3}"></i>
            <p>订单</p>
          </router-link>
        </section>
        <section id="four" @click="changes(4)">
          <router-link :to="{path:'/mine'}">
            <i class="el-icon-user a" :class="{changeStyle: key==4}"></i>
            <p>我的</p>
          </router-link>
        </section>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Nav",
        data(){
          return{
            key:""
          }
        },
        methods:{
          changes(id){
            this.key = id;
          }
        }
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  section{
    display: inline-block;
    text-align: center;
    height: 4rem;
  }
  #bottom{
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
  #one{
    width: 24%;
  }
  #two{
    width: 24%;
  }
  #three{
    width: 24%;
  }
  #four{
    width: 24%;
  }
  i{
    font-size: 3rem;
  }
  .a{
    /*color: red;*/
  }
  .changeStyle{
    color: blue;
  }
</style>
