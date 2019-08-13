<template>
    <div class="updatename">
      <van-nav-bar id="one"
                   title="修改用户名"
                   left-text=""
                   right-text=""
                   left-arrow
                   @click-left="onClickLeft"
      />
      <van-cell-group >
        <van-field v-model="value" placeholder="请输入用户名" @input="change0" />
      </van-cell-group>
      <span style="color: gray" v-if="change1">用户名只能修改一次(5-24字符之间)</span>
      <span style="color: red" v-else>用户名长度在5-24字符之间</span>

      <van-button type="danger"  size="large" @click="ok">确认修改</van-button>
    </div>
</template>

<script>
  // <!--if(ones.value.length>0 && ones.value.length<6){-->
  //   <!--this.change1 = false;-->
  //   <!--this.change2 = true;-->
  // <!--}-->
    export default {
        name: "UpdateName",
       data(){
          return{
               value:"",
               change1:true,
          }
       },
        methods: {
        onClickLeft() {
          this.$router.go(-1);
        },
          //不能实现,v-model绑定
          change0(){
          if(this.value.length<6){
            this.change1 = false;
          }else{
              this.change1 = true;
          }
          console.log(this.value);
          },
          ok(){
            this.$router.go(-1);
            this.$store.commit("getNewName",this.value);
            // this.$router.push({name:'person',params:{name:this.value}});
          }
      }
    }


</script>

<style scoped>
  .updatename{
    background: #f5f5f5;
    width: 100%;
    height: 100%;
  }
  #one{
    background: #3190e8;
  }
  .van-nav-bar .van-icon {
    color: white;
  }

  .van-nav-bar__title {
    color: white;
    font-weight: 700;
    font-size: 2rem;
  }

</style>
