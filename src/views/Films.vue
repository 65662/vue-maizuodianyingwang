<template>
    <div>
        <film-swiper :key="datalist.length" class="lunbo1">
          <!-- <div @click="handleCity" style="left:0px">{{$store.state.cityName}}<van-icon name="arrow-down"  /></div> -->
            <film-swiper-item v-for="data in datalist" :key="data.filmId" class="filmitemswiper"><img :src="data.poster" style="width:100%;"/></film-swiper-item>

        </film-swiper>
      <film-header class="sticky"></film-header>

       <router-view></router-view>
    </div>
</template>
<script>
import filmSwiperItem from '@/components/films/FilmSwiperItem'
import filmSwiper from '@/components/films/FilmSwiper'
import filmHeader from '@/components/films/FilmHeader'
import http from '@/util/http'

import 'swiper/swiper-bundle.min.css'

export default {
  data () {
    return {
      datalist: []

    }
  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=4935531`,
      headers: {

        'X-Host': 'mall.film-ticket.film.list'

      }
    })
      .then(res => {
        this.datalist = res.data.data.films
      })
  },
  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader
  }
  // methods: {
  //   handleLeft () {
  //     this.$router.push('/city')
  //   }
  // }
}
</script>
<style lang="scss" scoped>
.filmswiperitem{

    width:100%;

}
.lunbo1{
  height: 13.3333rem;

}
.sticky{
  position: sticky;
  top:0px;
  background:white;
  z-index: 100;
}

</style>
