<template>
    <div class="allhome">
      <router-view></router-view>
      <Nav></Nav>
    </div>
</template>

<script>
    import Nav from "./Nav";
    export default {
        name: "AllHome",
      components: {Nav}
    }
</script>

<style scoped>

</style>
