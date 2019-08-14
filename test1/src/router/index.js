import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login from "../components/login"
import City from  "../components/city"
import Person from "../components/Person"
import UpdateName from "../components/UpdateName"
import EditAddress from "../components/EditAddress"
import AddAddress from "../components/AddAddress"
import SearchAddress from "../components/SearchAddress"
import UpdatePassword from "../components/UpdatePassword"
import CitySearch from "../components/CitySearch"
import ShopContent from "../components/ShopContent"

import AllHome from "../components/AllHome"
import Home from "../components/Home"
import Search from "../components/Search"
import Order from "../components/Order"
import Mine from "../components/Mine"
import Sort from "../components/Sort"
import Pay from "../components/Pay"
import CarAddress from "../components/CarAddress"
import BusinessInformation from "../components/BusinessInformation"
import BusinessDetails from "../components/BusinessDetails"


//   我的余额
import MySurplus from "../components/MySurplus"
import SurplusDescribe from "../components/SurplusDescribe"
//   我的优惠
import MyBenefit from "../components/MyBenefit"
//  红包说明
import RedPacketDescribe from "../components/RedPacketDescribe"
//   代金券说明
import BusinessVouchersDescribe from "../components/BusinessVouchersDescribe"
//  查看红包历史
import CheckRedHistory from "../components/CheckRedHistory"
//  兑换红包
import ExchangeRed from "../components/ExchangeRed"
//   推荐有奖
import Introduce from "../components/Introduce"
//   我的积分
import MyIntegral from "../components/MyIntegral"
import IntegralDescribe from "../components/IntegralDescribe"
//   积分商城
import Integral from "../components/Integral"
//   饿了么会员卡
import MemberCenter from "../components/MemberCenter"
import MemberDescribe from "../components/MemberDescribe"
import OnlinePayment from "../components/OnlinePayment"
//   兑换会员
import UseCardNumber from "../components/UseCardNumber"
//   开发票
import WriteAnInvoice from "../components/WriteAnInvoice"
//   服务中心
import ServiceCenter from "../components/ServiceCenter"
//   下载饿了么APP
import DownloadApp from "../components/DownloadApp"

import FoodDetails from "../components/FoodDetails"
export default new Router({
  routes: [
    {path:"/",component:City},
    {path:"/city",component:City},
    {path:"/citysearch",component:CitySearch},
    {path:"/allhome",component:AllHome,children:[
        {path:"/home",component:Home,name:"home"},
        {path:"/search",component:Search,name:"search"},
        {path:"/sort",component:Sort},
        {path:"/order",component:Order,name:"order"},
        {path:"/mine",component:Mine,name:"mine"},
      ]},


    {path:"/shopcontent",component:ShopContent,name:"shopcontent"},
    {path:"/login",component:Login},
    {path:"/person",component:Person,name:"person"},
    {path:"/updatename",component:UpdateName,name:"updatename"},

    //   我的余额   我的优惠   我的积分
    {path:"/mysurplus",component:MySurplus},
    {path:"/surplusdescribe",component:SurplusDescribe},
    {path:"/mybenefit",component:MyBenefit},
    {path:"/redpacketdescribe",component:RedPacketDescribe},
    {path:"/businessvouchersdescribe",component:BusinessVouchersDescribe},
    {path:"/checkredhistory",component:CheckRedHistory},
    {path:"/exchangered",component:ExchangeRed},
    {path:"/introduce",component:Introduce},
    {path:"/myintegral",component:MyIntegral},
    {path:"/integraldescribe",component:IntegralDescribe},
    {path:"/integral",component:Integral},
    {path:"/membercenter",component:MemberCenter},
    {path:"/memberdescribe",component:MemberDescribe},
    {path:"/onlinepayment",component:OnlinePayment},
    {path:"/usecardnumber",component:UseCardNumber},
    {path:"/writeaninvoice",component:WriteAnInvoice},
    {path:"/servicecenter",component:ServiceCenter},
    {path:"/downloadapp",component:DownloadApp},



    {path:"/editaddress",component:EditAddress,name:"editaddress"},
    {path:"/addaddress",component:AddAddress,name:"addaddress"},
    {path:"/searchaddress",component:SearchAddress,name:"searchaddress"},
    {path:"/updatepassword",component:UpdatePassword,name:"updatepassword"},

    {path:"/BusinessInformation",component:BusinessInformation},
    {path:"/BusinessDetails",component:BusinessDetails},
    {path:"/FoodDetails",component:FoodDetails},
    {path:"/pay",component:Pay,name:"pay"},
    {path:"/caraddress",component:CarAddress,name:"caraddress"},
  ]
})
