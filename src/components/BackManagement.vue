<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: "BackManagement",
    data() {
      return {
        msg: "后台管理系统"
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/back-management.css";
</style>
