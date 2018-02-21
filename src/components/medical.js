import Vue from 'vue'
Vue.component('car-medical', {
  template: `  
    <ul class='car-medical' v-swipe:left="cb_left" v-swipe:right="cb_right">
      <li>
        <span>
          <input 
            type="checkbox" 
            v-model="items.checked" 
            @click="check">
            {{items.title}}
        </span>
        <b>
        </b>
      </li>
      <li>
        ￥{{items.price}} 
        <span>
          <button @click="add">＋</button>
          <input type="text" :value="count">
          <button @click="reduce">－</button>
        </span>
      </li>
      <li class="del" :class="{'del-active':isDel}">
        <span>删<br>除<br> X</span>
      </li>
    </ul>
  `,
  props: {
    items: {
      require: true,
      type: Object
    }
  },
  data () {
    return {
      isDel: false,
      count: 1
    }
  },
  methods: {
    check () {
      this.$emit('deselect')
    },
    cb_left () {
      this.isDel = true
    },
    cb_right () {
      this.isDel = false
    },
    add () {
      this.count++
    },
    reduce () {
      this.count--
    }
  }
})
