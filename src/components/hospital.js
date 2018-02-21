import Vue from 'vue'
Vue.component('car-hospital', {
  template: `
    <div class="shop">
      <p @click="toggle">
        <a class="select-all" :class="{'select-all-active':active}"></a>{{tit}}
      </p>
        <car-medical 
          v-for="(item, idx) in datas" :key="idx" 
          :items="item" 
          @deselect="deselect(idx)">
        </car-medical>      
      <p class="pl10">
        <span>订单留言</span>
        <i class="fa fa-angle-right"></i>
      </p>      
    </div>
  `,
  props: {
    tit: {
      require: true,
      type: String
    },
    datas: {}
  },
  data () {
    return {
      active: false,
      count: 0,
      arr: []
    }
  },
  methods: {
    inlit () {
      let nums = 0
      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i]) {
          nums++
        }
      }
      if (nums === this.arr.length) {
        this.active = true
      } else {
        this.active = false
      }
    },
    toggle () {
      this.active = !this.active
      for (let i = 0; i < this.arr.length; i++) {
        this.datas[i].checked = this.active
        this.arr[i] = this.active
      }
    },
    deselect (n) {
      this.datas[n].checked = !this.datas[n].checked
      this.arr[n] = !this.arr[n]
      this.inlit()
    }
  },
  mounted () {
    this.arr = new Array(this.datas.length)
  }
})
