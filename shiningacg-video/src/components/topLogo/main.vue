<template>
  <div id="topImage">
    <div class="top-image-logo"></div>
    <div class="top-image-title">小主姬</div>
  </div>
</template>
<style>
#topImage {
  position: relative;
  top: 2px;
  left: 2.5%;
  width: 95%;
  height: 170px;
  border: 2px solid #888888;
  border-radius: 3px;
  box-shadow: 0px 0px 10px #888888;
  background: url('./2.png') no-repeat;
  background-size: 100%;
}
.top-image-logo {
  position: absolute;
  left: 30%;
  top: 80px;
  background: url('./logo.png') no-repeat;
  width: 180px;
  height: 40px;
  transform: scale(2);
}
.top-image-title{
  position: absolute;
  color: white;
  left: 70%;
  top: 70px;
  font-size: 30px;
}
</style>