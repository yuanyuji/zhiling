import Vue from 'vue'
Vue.component('car-footer', {
  template: `
    <footer class="footer">
      <div>总金额：<slot></slot></div>
      <button>申请分期</button>
    </footer>
  `
})
