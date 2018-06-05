/**
 * Created by niefz on 2018/4/12.
 */
import Vue from 'vue';
import Bar from './loading-bar.vue';
import Message from "../../message/src/message";

let timer;
let instance;
const LoadingBarConstructor = Vue.extend(Bar);

const init = (() => {
  instance = new LoadingBarConstructor();
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  return instance.vm;
})();

const update = (options) => {
  instance.update(options);
};

const hide = () => {
  setTimeout(() => {
    update({
      visible: false,
    });
    setTimeout(() => {
      update({
        percent: 0,
      });
    }, 200);
  }, 800);
};

const clearTimer = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

const LoadingBar = {
  update(percent) {
    clearTimer();
    update({
      visible: true,
      percent: percent,
      status: 'success',
    });
  },
  start() {
    if (timer) return;
    let percent = 0;
    update({
      visible: true,
      percent: percent,
      status: 'success',
    });
    timer = setInterval(() => {
      percent += Math.floor(Math.random() * 3 + 5);
      if (percent > 95) {
        clearTimer();
      }
      update({
        visible: true,
        percent: percent,
        status: 'success',
      });
    }, 200);
  },
  finish() {
    clearTimer();
    update({
      visible: true,
      percent: 100,
      status: 'success',
    });
    hide();
  },
  error() {
    clearTimer();
    update({
      visible: true,
      percent: 100,
      status: 'error',
    });
    hide();
  },
  config(options) {
    if ('height' in height) {
      instance.height = options.height;
    }
    if ('status' in options) {
      instance.backgroundColor = [`${this.status}Color`];
    }
  },
  destroy() {
    clearTimer();
    instance.destroy();
  },
};

export default LoadingBar;
