<template>
  <div id="app">
    <el-container id="container">
       
      <vue-page-transition name="fade">
        <router-view class="view"></router-view>
      </vue-page-transition>
      <el-footer>To My Dear Ou</el-footer>
    </el-container>
  </div>
</template>

<script>
import './js/bomb.js'
export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ddd;
  height: 100vh;
  width: 100vw;
  background: #2d2929;
 
}

#container {
  height: 100vh;
}

/* Global footer */
.el-footer {
  background-color: #2d2929;
  color: #f5f7fa;
  text-align: center;
  line-height: 60px;
  z-index: 1;
  bottom: 0;
  position: fixed;
  width: 100vw;
  font-family: "Gloria Hallelujah", cursive;
}

/* Global transition declaration*/
.slide-fade-enter-active {
  transition: all 0.8s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.el-loading-spinner .el-loading-text {
  color: #2d2929 !important;
}

.el-loading-spinner .path {
  stroke: #2d2929 !important;
}
</style>
