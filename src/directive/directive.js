import Vue from 'vue'
Vue.directive('swipe', {
  bind: function (el, bindings, vnode) {
    var start
    var end
    var stime
    var etime
    var {arg, value} = bindings
    el.addEventListener('touchstart', function (e) {
      start = e.touches[0].pageX
      stime = new Date().getTime()
    })
    el.addEventListener('touchmove', function (e) {
      end = e.touches[0].pageX
    })
    el.addEventListener('touchend', function (e) {
      etime = new Date().getTime()
      if (arg === 'left' && end - start < 0 && Math.abs(end - start) > 30 && etime - stime < 1000) {
        value()
      }
      if (arg === 'right' && end - start > 0 && Math.abs(end - start) > 30 && etime - stime < 1000) {
        value()
      }
    })
  }
})
