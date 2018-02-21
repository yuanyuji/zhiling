import Vue from 'vue'
Vue.component('car-header', {
  props: {
    type: String,
    require: true
  },
  template: `
    <header>
      <i class="fa fa-angle-left" @click='back'></i>
      {{title}}
    </header>
  `,
  data () {
    return {
      title: '我的购物车'
    }
  },
  methods: {
    back () {
      window.location.go(-1)
    }
  }
})
