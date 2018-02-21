<template>
  <div class="hello">
    <car-header :title="'我的购物车'"></car-header>
    <section>
      <car-hospital v-for="(i,ind) in list" :key="ind" :tit="i.tit" :datas="i.datas">
      </car-hospital>
    </section>
    <car-footer>{{num}}</car-footer>
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [],
      num: 0
    }
  },
  mounted () {
    fetch('../../src/data/data.json').then(res => {
      return res.json()
    }).then(res => {
      this.list = res.hospital
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
