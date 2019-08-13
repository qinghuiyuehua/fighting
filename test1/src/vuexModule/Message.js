const MessageModule = {
  state:{
    //已登录的城市标识
    flag:localStorage.getItem("flag")||"",
    //用户名
    message:localStorage.getItem("name")||"",
    //新增地址的所有信息
    addaddress:localStorage.getItem("address")||"",
    //编辑删除地址时的地址信息的更新
    newaddress1:JSON.parse(localStorage.getItem("newaddress")),
    //获取城市列表中各个城市的信息
    citymsg1: JSON.parse(localStorage.getItem("citymsg")),
    //返回到主页上面的详细地址信息
    citymsg2:localStorage.getItem("citymsg2"),
    //添加地址需要用到城市页面所选的城市id
    cityid:localStorage.getItem("cityid"),
   //删除搜索商店的记录
    searchhistory:JSON.parse(localStorage.getItem("searchhistory2")),
   //购物车的二维数组
   carnums1:[],
  },
  mutations:{
    //退出登录
    clearUser(state){
      state.flag = null;
      state.message = null;

      localStorage.removeItem("flag");
      localStorage.removeItem("name");

    },
    //删除所有搜索记录
    clearHistory(state){
      state.searchhistory = null;
      localStorage.removeItem("searchhistory");
      localStorage.removeItem("searchhistory2");
    },
    getFlag(state,msg){
      state.flag = msg;
      localStorage.setItem("flag",msg)
    },
    getMsg(state,msg){
      state.message = msg;
      localStorage.setItem("name",msg);
    },
    updateMsg(state,msg){
      state.message = msg;
      localStorage.setItem("name",msg);
    },
    getAddress(state,msg){
      state.addaddress = msg;
      localStorage.setItem("address",msg);
    },
    getNewAddress(state,msg){
      state.newaddress1 = msg;
      localStorage.setItem("newaddress",JSON.stringify(msg));
    },
    getid(state,msg){
      state.cityid = msg;
      localStorage.setItem("cityid",msg);
    },
    getCityMsg1(state,msg){
      state.citymsg1 = msg;
      localStorage.setItem("citymsg",JSON.stringify(msg));
    },
    getCityMsg2(state,msg){
      state.citymsg2 = msg;
      localStorage.setItem("citymsg2",msg);
    },
    getSearchHistory(state,msg){
      state.searchhistory = msg;
      localStorage.setItem("searchhistory2",JSON.stringify(msg));
    },
    getCarGoodNums1(state,msg){
    state.carnums1 = msg;
    console.log(state.carnums1);
     // let abc =  state.carnums1.find((msgs)=>{return msgs.item_id === msg.item_id });
     //  if(!abc){
     //    state.carnums1.push(msg)
     //  }
     //  console.log(state.carnums1);
      // let indexs;
      // let ifhas = state.carnums1.find((id1,index1)=>{
      //   if(id1.item_id == msg.item_id)indexs =index1;
      //   return id1.item_id = msg.item_id;
      // })
    },
  }
}
export default MessageModule;
