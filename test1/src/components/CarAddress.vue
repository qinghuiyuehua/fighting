<template>
    <div class="caraddress">
      <van-nav-bar id="one"
                   title="选择地址"
                   left-text=""
                   right-text=""
                   left-arrow
                   @click-left="onClickLeft"
      />
      <!--收货地址列表-->
      <section class="one">
          <ul>
            <li v-for="(k,i) in newaddress">
              <span style="font-size: 2rem;font-weight: 600">{{k.name}}先生</span>
              <span>{{k.phone1}}</span>
              <p>
                <span style="background: lightgreen;color: white">
                  公司
                </span>
                {{k.address2}}
              </p>
            </li>
          </ul>
      </section>
      <section class="two">
        增加收货地址
      </section>
    </div>
</template>

<script>
    export default {
        name: "CarAddress",
        data(){
          return{
            newaddress:"",
          }
        },
        methods:{
          onClickLeft() {
            this.$router.go(-1);
          },
        },
        created(){
          this.newaddress = this.$store.state.a.newaddress1;
          console.log(this.newaddress)
        },
    }
</script>

<style scoped>
  .caraddress{
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
  li{
    background: white;
    color: black;
    font-size: 1.5rem;
    padding: 0.5rem;
  }
  .two{
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 2rem;
    color: lightskyblue;
    width: 100%;
    text-align: center;
  }
</style>
