<template>
    <div class="addaddress">
      <van-nav-bar id="one"
                   title="新增地址"
                   left-text=""
                   right-text=""
                   left-arrow
                   @click-left="onClickLeft"
      />
      <ul>
        <li>
            <input v-model="value1" placeholder="请填写你的姓名" @input="one"/>
            <p class="pull-left" v-if="show1">请填写您的姓名</p>
        </li>
        <li>
            <router-link :to="{path:'/searchaddress'}">
              <input v-model="value2" placeholder="小区/写字楼/学校等" />
            </router-link>
        </li>
        <li>

            <input v-model="value3" placeholder="请填写详细送餐地址" @input="three"/>
            <p class="pull-left" v-if="show2">请详细填写送餐地址</p>
            <p class="pull-left" v-if="show3">送餐地址太短了不能识别</p>
        </li>
        <li>

            <input v-model="value4" placeholder="请填写能联系到您的手机号" @input="four"/>
            <p class="pull-left" v-if="show4">手机号不能为空</p>
          <p class="pull-left" v-if="show5">请输入正确的手机号</p>
        </li>
        <li>

            <input v-model="value5" placeholder="备用联系电话(选填)" @input="five"/>
            <p class="pull-left" v-if="show6">请输入正确的手机号</p>
        </li>
      </ul>
      <!--新增地址按钮-->
      <van-button type="primary" :disabled="no1||no2||no3||no4||no5" size="large" @click="ok">新增地址</van-button>
    </div>
</template>

<script>
    export default {
        name: "AddAddress",
      data(){
          return{
              //这是跟输入框绑定的5个变量值
              value1:"",
              value2:"",
              value3:"",
              value4:"",
              value5:"",
              //这几个变量是用来控制红字的显示隐藏
              show1:false,
              show2:false,
              show3:false,
              show4:false,
              show5:false,
              show6:false,
              show7:true,
              show8:false,
              //这个对象用来装对象的五个属性
              all:{},
              //这个数组装每个对象
              arr:[],
              //这个五个变量是用来监听5个输入框的值是否满足条件让提交按钮变量
              no1:true,
              no2:true,
              no3:true,
              no4:true,
              no5:true,
              //测试
              aa:[],
          }
      },
        methods: {
        onClickLeft() {
          this.$router.go(-1);
        },
        one(){
          if(this.value1 == ""){
             this.show1 = true;
          }else if(this.value1.length>0){
            this.show1 = false;
            this.all.name = this.value1;
            this.no1 = false;
          }
        },
        three(){
          if(this.value3 == ""){
              this.show2 = true;
              this.show3 = false;
          }else if(this.value3.length > 0 && this.value3.length < 3){
            this.show2 = false;
            this.show3 = true;
          }else if(this.value3.length >=3){
            this.show2 = false;
            this.show3 = false;
            this.all.address2 = this.value3;
            this.no3 = false;
          }
        },
          four(){
            if(this.value4 == ""){
              this.show4 = true;
              this.show5 = false;
            }else if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.value4))){
              this.show4 = false;
              this.show5 = true;
            }else if(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.value4)){
              this.show4 = false;
              this.show5 = false;
              this.all.phone1 = this.value4;
              this.no4 = false;
            }
          },
          five(){
            if(!(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(this.value5))){
              this.show6 = true;
            }else{
              this.show6 = false;
              this.all.phone2 = this.value5;
              this.no5 = false;
            }
          },
          //提交按钮
          ok(){
              this.aa = JSON.parse(localStorage.getItem("q"))||[];
              this.aa.unshift(this.all);
              localStorage.setItem("q",JSON.stringify(this.aa));
              console.log(this.aa);
              this.$router.go(-1);
          }
      },
      created(){
          this.value2 = localStorage.getItem("searchaddress");
          if(this.value2.length>0){
            console.log(11111)
            this.no2= false;
          }
      },
    }
</script>

<style scoped>
  .addaddress{
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

  ul{
    background: white;
  }

  li{
    text-align: center;
  }
  input{
    width: 90%;
    background: #f5f5f5;
    height: 3rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
    border: 1px solid #ddd;
    border-radius: 3px;
    color: black;
  }

  p{
    font-size: 1rem;
    color: red;
    margin: 0;
    margin-left: 1.5rem;
  }

  .disable{
    disabled:disabled;
  }
</style>
