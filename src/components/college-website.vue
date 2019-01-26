<template>
  <div id="college">
    <!--页面头部-->
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
      <div class="search-box">
        <div class="relative">
        <input type="text" placeholder="  关键字" name="keyword" class="form-control keyword">
        <input type="button" value="搜索" class="btn btn-default btn search-button">
        </div>
      </div>
      <!--导航栏-->
      <div class="navigation">
        <nav class="navbar navbar-default" role="navigation">
          <div class="container-fluid">
            <div>
              <ul class="nav nav-pills nav-justified">
                <li><a href="#">首页</a></li>
                <li><a href="#">关于我们</a></li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    研究机构
                  </a>
                  <ul class="dropdown-menu">
                    <li><a href="#">传播研究院</a></li>
                    <li><a href="#">新闻学部</a></li>
                    <li><a href="#">电视学部</a></li>
                  </ul>
                </li>
                <li><a href="#">学生培养</a></li>
                <li><a href="#">学术研究</a></li>
                <li><a href="#">国际合作</a></li>
                <li><a href="#">院系设置</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
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
  @import "../assets/css/college-website.css";
</style>
