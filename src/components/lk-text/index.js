import Component from './component/index.vue'
import Config from './config/index.vue'

const install = function(Vue) {
  Vue.component(Component.name, Component)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

Component['Config'] = Config
Component.install = install

Component.info = {
  title: '文字',
  icon: ''
}

export default Component