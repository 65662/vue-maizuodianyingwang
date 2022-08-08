<template>
    <div>
        <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  :immediate-check="false"
  offset="10"
>

            <van-cell v-for="data in datalist" :key="data.filmId"  @click="handleChangePage(data.filmId)">
                <img :src="data.poster"/>
                <div>
                <div class="title">
                  <span class="name">{{data.name}}</span>
                  <span class="score">{{data.filmType.name}}</span>
                </div>
                <div class="content">
                  <div>观众评分:<span style="color:red;">{{data.grade}}</span></div>
                  <div>{{data.nation}}|{{data.runtime}}分钟</div>
                  <div class="actors">主演：{{data.actors|actorsFilter}}</div>
                </div>
                </div>

            </van-cell>
            </van-list>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import http from '@/util/http'
Vue.filter('actorsFilter', (data) => {
  if (data === undefined) return '暂无主演'
  return (data.map(item => item.name)).join('')
})
export default {
  data () {
    return {
      loading: false,
      finished: false,
      datalist: [],
      current: 1,
      total: 0
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
        // console.log(res.data.data)
        this.datalist = res.data.data.films
        this.total = res.data.data.total
      })
  },
  methods: {
    onLoad () {
      // console.log(this.datalist.length)
      if (this.datalist.length === this.total && this.total !== 0) {
        this.finished = true
        return
      }
      // console.log('到底了')
      this.current++
      http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=4935531`,
        headers: {

          'X-Host': 'mall.film-ticket.film.list'

        }
      })
        .then(res => {
          // console.log(res.data.data.films)
          this.datalist = [...this.datalist, ...res.data.data.films]
          this.loading = false
        })
    },
    handleChangePage (id) {
      this.$router.push({
        name: 'lqDetail',
        params: {
          id
        }
      })
    }

  }

}
</script>
<style lang="scss" scoped>
.van-list{
   .van-cell{
        overflow: hidden;
        padding: .9375rem;
        img{
            width:4.125rem;
            float:left;
        }
        .title{
          font-size:16px;
        }
        .content{
          font-size: 13px;
          color:gray;
        }
        .actors{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width:12.5rem
        }
        .score{
          font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;

        }
        .name{
          margin-right: .2778rem;
        }

    }
}
</style>
