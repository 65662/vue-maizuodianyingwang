<template>
  <div v-if="filmInfo">
    <!-- <img :src="filmInfo.poster" /> -->
    <detail-header>{{ filmInfo.name }}</detail-header>
    <div
      :style="{
        backgroundImage: 'url(' + filmInfo.poster + ')',
      }"
      class="poster"
    ></div>
    <div class="content">
      <div class="col">
        <div>
          <span class="name">{{ filmInfo.name }}</span>
          <span class="score">{{ filmInfo.filmType.name }}</span>
        </div>
        <div class="filmgrade">
          <span class="grade">{{ filmInfo.grade }}</span>
          <span class="grade-text">分</span>
        </div>
      </div>

      <div>
        <div class="content-text">{{ filmInfo.category }}</div>
        <div class="content-text">
          {{ filmInfo.premiereAt | dateFilter }}上映
        </div>
        <div class="content-text">
          {{ filmInfo.nation }}|{{ filmInfo.runtime }}分钟
        </div>
        <div
          class="content-text"
          style="line-height: 0.8333rem"
          :class="isHidden ? 'hidden' : ''"
        >
          {{ filmInfo.synopsis }}
        </div>
        <div style="text-align: center">
          <i class="iconfont icon-arrow-down" @click="isHidden = !isHidden"></i>
        </div>
      </div>

      <div>
        <div>演职人员</div>
        <detail-swiper :preview="3.5" name="actors">
          <detail-swiper-item
            v-for="(data, index) in filmInfo.actors"
            :key="index"
          >
            <div
              :style="{
                backgroundImage: 'url(' + data.avatarAddress + ')',
              }"
              class="avatar"
            ></div>
            <div style="text-align: center; font-size: 12px">
              {{ data.name }}
            </div>
            <div style="text-align: center; font-size: 13px">
              {{ data.role }}
            </div>
          </detail-swiper-item>
        </detail-swiper>
      </div>
      <div>
        <div>剧照</div>
        <detail-swiper :preview="2" name="avatars">
          <detail-swiper-item
            v-for="(data, index) in filmInfo.photos"
            :key="index"
          >
            <div
              :style="{
                backgroundImage: 'url(' + data + ')',
              }"
              class="avatar"
              @click="handlePreview(index)"
            ></div>
          </detail-swiper-item>
        </detail-swiper>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/util/http'
import moment from 'moment'
import Vue from 'vue'
import detailSwiper from '@/components/detail/DetailSwiper'
import detailSwiperItem from '@/components/detail/DetailSwiperItem'
import detailHeader from '@/components/detail/DetailHeader'
import { ImagePreview } from 'vant'
import obj from '@/util/mixinObj'

moment.locale('zh-cn')
Vue.filter('dateFilter', (date) => {
  return moment(date * 1000).format('YYYY-MM-DD')
})
Vue.directive('scroll', {
  inserted (el, binding) {
    el.style.display = 'none'
    // console.log('filmInfo.data')
    window.onscroll = () => {
      if (
        (document.documentElement.scrollTop || document.body.scrollTop) >
        binding.value
      ) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})
export default {
  mixins: [obj],
  data () {
    return {
      filmInfo: null,
      isHidden: true
    }
  },
  methods: {
    handlePreview (index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        closeable: true
      })
    }
  },
  components: {
    detailSwiper,
    detailSwiperItem,
    detailHeader
  },
  mounted () {
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=5387949`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      this.filmInfo = res.data.data.film
    })
  },

  destroyed () {
    window.onscroll = null
  }
}

</script>>
<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 12.7778rem;
  background-position: center;
  background-size: cover;
}
.content {
  padding: 0.8333rem;
  padding-top: 0.6667rem;
}
.content-text {
  color: #797d82;
  font-size: 13px;
  margin-top: 0.2222rem;
}
.col {
  display: flex;
}
.hidden {
  overflow: hidden;
  height: 1.6667rem;
}
.avatar {
  width: 100%;
  height: 4.7222rem;
  background-position: center;
  background-size: cover;
}
.score {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
}
.name {
  margin-right: 0.2778rem;
}
.filmgrade {
  width: calc(100% - 250px);
  text-align: right;
  color: #ffb232;
}
.grade {
  font-size: 18px;
  font-style: italic;
}
.grade-text {
  font-size: 10px;
}
</style>
