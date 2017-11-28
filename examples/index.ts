/**
 * Created by NieFZ on 2017/11/28.
 */
import Vue from 'vue'
/**
 * import plugins
 */
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'

let v = new Vue({
  el: '.wrapper',
  template: `
    <div>
        Name: <input v-model="name" type="text">
        <h1>{{ name }}</h1>
    </div>
    `,
  data: { name: 'World' }
})
