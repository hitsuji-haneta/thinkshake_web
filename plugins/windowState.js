import Vue from 'vue'

const windowState = {
  install: function(Vue) {
    // ウィンドウの状態
    const state = {
      scrollX: 0,
      scrollY: 0,
      width: 0,
      height: 0
    }
    // スクロール数値を取得
    const onScroll = function() {
      state.scrollX = window.pageXOffset
      state.scrollY = window.pageYOffset
    }
    document.addEventListener('scroll', onScroll)
    // ウィンドウのサイズを取得
    const onResize = function() {
      state.width = document.documentElement.clientWidth
      state.height = document.documentElement.clientHeight
    }
    window.addEventListener('resize', onResize)
    onResize()

    // 指定した要素のY位置を取得
    state.getElementPos = function(id, base) {
      let [topPos, bottomPos] = [0, 0]
      if (document.getElementById(id)) {
        topPos = document.getElementById(id).getBoundingClientRect().top + state.scrollY - base
        bottomPos = document.getElementById(id).getBoundingClientRect().bottom + state.scrollY - base
      }
      return [topPos, bottomPos]
    }
    // 初期値を更新
    window.addEventListener('load', onScroll)
    // プロパティ $window を定義
    Vue.util.defineReactive(Vue.prototype, '$window', state)
  }
}

Vue.use(windowState)