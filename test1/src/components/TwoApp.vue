<template>
    <div class="two_app">
      <Nav></Nav>
      <transition enter-active-class="animated fadeIn" leave-active-class="opacity 0" >
      <router-view></router-view>
      </transition>
    </div>
</template>

<script>
    import Nav from "./Nav";
    export default {
        name: "TwoApp",
      components: {Nav}
    }
</script>

<style scoped>
  .two_app{
    width: 100%;
    height: 100%;
  }

</style>
