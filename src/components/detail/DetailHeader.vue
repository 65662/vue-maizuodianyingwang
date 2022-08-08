<template>
    <div class="header">
        <i class="iconfont icon-direction-left" @click="handleBack"></i>
        <slot></slot>

    </div>
</template>
<script>
export default {
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 2.444444rem;
    line-height: 2.444444rem;
    background-color: white;
    text-align: center;
    i{
        font-size: 30px;
        position: fixed;
        left: .5556rem;
        top: 0px;

    }
}

</style>>
