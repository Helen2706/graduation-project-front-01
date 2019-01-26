<template>
  <div id="college">
    <div class="header">
      <div class="img">
        <img src="../assets/image/中国传媒大学-校徽.jpg" alt="中国传媒大学-校徽">
      </div>
      <div class="first-title">
        <span class="middle-title">中国传媒大学</span><br>
        <span class="small-title">新闻传播学部</span>
      </div>
      <div class="string"></div>
      <div class="second-title">传播研究院</div>
    </div>
    <div class="page"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
  export default {
    name: "college-website"
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .header {
    width: 80%;
    margin: 0 auto;
    height: 160px;
  }

  .header .img {
    width: 100px;
    height: 100px;
    padding: 30px;
    display: inline-block;
    float: left;
  }

  .header img {
    width: 100px;
    height: 100px;
  }

  .header .first-title {
    width: 300px;
    font-size: 30px;
    float: left;
    text-align: center;
    height: 160px;
    line-height: 60px;
    margin-top: 20px;
  }

  .header .first-title .middle-title{
    font-size: 35px;
  }

  .header .string{
    float:left;
    width: 2px;
    height: 80px;
    background: #000;
    margin: 40px;
  }

  .header .second-title {
    font-size: 50px;
    float: left;
    line-height: 160px;
  }

  .page {
    width: 80%;
    margin: 0 auto;
    background-color: blue;
    height: 600px;
  }

  .footer {
    width: 100%;
    height: 120px;
    background-color: green;
    margin-top: 20px;
  }
</style>
