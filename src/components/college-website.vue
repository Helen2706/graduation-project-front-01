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
    <div class="page">
      <div class="container">
        <div class="row clearfix">
          <div class="col-md-12 column">
            <div class="carousel slide" id="carousel-837124">
              <ol class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#carousel-837124">
                </li>
                <li data-slide-to="1" data-target="#carousel-837124">
                </li>
                <li data-slide-to="2" data-target="#carousel-837124">
                </li>
                <li data-slide-to="3" data-target="#carousel-837124">
                </li>
              </ol>
              <div class="carousel-inner">
                <div class="item active">
                  <img alt="" src="../assets/image/轮播图1.png" />
                  <div class="carousel-caption">
                    <h4>
                      “实践中的马克思主义新闻观”喜获国家级教学成果一等奖 新闻传播教育取得历史性突破
                    </h4>
                  </div>
                </div>
                <div class="item">
                  <img alt="" src="../assets/image/轮播图2.jpeg" />
                  <div class="carousel-caption">
                    <h4>
                      首届电视学院学生教学成果奖展示暨评审活动成功举办
                    </h4>
                  </div>
                </div>
                <div class="item">
                  <img alt="" src="../assets/image/轮播图3.png" />
                  <div class="carousel-caption">
                    <h4>
                      2018年度电视学院团学组织年终述职大会顺利召开
                    </h4>
                  </div>
                </div>
                <div class="item">
                  <img alt="" src="../assets/image/轮播图4.jpg" />
                  <div class="carousel-caption">
                    <h4>
                      2018-2022年新闻传播学类专业教指委第一次会议隆重召开
                    </h4>
                  </div>
                </div>
              </div> <a class="left carousel-control" href="#carousel-837124" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-837124" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
            </div>
          </div>
        </div>
      </div>
   </div>
    <div class="footer"></div>
  </div>
</template>

<script>
  export default {
    name: "college-website"
  }
  $('#myCarousel').carousel('pause')
</script>

<style scoped>
  @import "../assets/css/college-website.css";
</style>
