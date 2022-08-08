<template>
<div>
    <tabbar v-show="$store.state.isTabbarShow"></tabbar>
    <section>
    <router-view>
    </router-view>
    </section>
</div>
</template>
<script>
// //全局注册组件方法
import Vue from 'vue'
import Vant from 'vant'
import tabbar from '@/components/Tabbar'

import 'vant/lib/index.css'
Vue.use(Vant)
export default {
  components: {
    tabbar
  }
  // 局部注册组件方法

}

</script>
<style lang="scss">
*{
    margin:0;
    padding: 0;
}
html,body{
    height: 100%;
    font-size: 16px;
}
ul{
    list-style: none;
}
section{
  padding-bottom: 2.72222rem;
}

</style>
