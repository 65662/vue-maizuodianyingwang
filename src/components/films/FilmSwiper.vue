<template>
    <div class="swiper lq">
        <div class="swiper-wrapper">
            <slot>
            </slot>
        </div>
    <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    var mySwiper = new Swiper('.lq', {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      loop: this.loop, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }

    })
    // console.log(mySwiper.support)
  }
}

</script>
