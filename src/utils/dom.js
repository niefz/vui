/**
 * Created by niefz on 2018/4/10.
 */
import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

const trim = (string) => {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

export const on = (() => {
  if (!isServer && document.addEventListener) {
    return (element, event, handler) => {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return (element, event, handler) => {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

export const off = (() => {
  if (!isServer && document.removeEventListener) {
    return (element, event, handler) => {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return (element, event, handler) => {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
})();

export const hasClass = (el, cls) => {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

export const addClass = (el, cls) => {
  if (!el) return;
  let curClass = el.className;
  let classes = (cls || '').split(' ');

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

export const removeClass = (el, cls) => {
  if (!el || !cls) return;
  let classes = cls.split(' ');
  let curClass = ' ' + el.className + ' ';

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};
