<template>
    <div class="swiper" :class="name">
        <div class="swiper-wrapper">
            <slot>
            </slot>
        </div>

    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  props: {
    preview: {
      type: Number,
      default: 1

    },
    name: {
      type: String,
      default: 'lq'

    }
  },

  mounted () {
    new Swiper('.' + this.name, {
      slidesPerView: this.preview,
      spaceBetween: 30,
      freeMode: true

    })
  }
}

</script>
