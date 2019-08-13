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
import Pay from "../components/Pay"
import CarAddress from "../components/CarAddress"


export default new Router({
  routes: [
    {path:"/",component:City},
    {path:"/city",component:City},
    {path:"/citysearch",component:CitySearch},
    {path:"/allhome",component:AllHome,children:[
        {path:"/home",component:Home,name:"home"},
        {path:"/search",component:Search,name:"search"},
        {path:"/order",component:Order,name:"order"},
        {path:"/mine",component:Mine,name:"mine"},
      ]},
    {path:"/shopcontent",component:ShopContent,name:"shopcontent"},
    {path:"/login",component:Login},
    {path:"/person",component:Person,name:"person"},
    {path:"/updatename",component:UpdateName,name:"updatename"},

    {path:"/editaddress",component:EditAddress,name:"editaddress"},
    {path:"/addaddress",component:AddAddress,name:"addaddress"},
    {path:"/searchaddress",component:SearchAddress,name:"searchaddress"},
    {path:"/updatepassword",component:UpdatePassword,name:"updatepassword"},

    {path:"/pay",component:Pay,name:"pay"},
    {path:"/caraddress",component:CarAddress,name:"caraddress"},
  ]
})
