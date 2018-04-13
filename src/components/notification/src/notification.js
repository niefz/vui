/**
 * Created by niefz on 2018/4/12.
 */
import Vue from 'vue';
import Notify from './notification.vue';

let index = 1;
let instance;
const instances = [];
const NotificationConstructor = Vue.extend(Notify);

const Notification = (options) => {

  if (Vue.prototype.$isServer) return;

  options = options || {};

  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }

  const id = 'message-' + index++;
  const userOnClose = options.onClose;
  const placement = options.placement || 'top-right';
  let offset = options.offset || 0;

  options.onClose = () => {
    Notification.close(id, userOnClose);
  };

  instance = new NotificationConstructor({
    data: options,
  });

  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = '10001';

  instances.filter(item => item.placement === placement).forEach((item) => {
    offset += item.$el.offsetHeight + 16;
  });
  offset += 16;
  instance.offset = offset;
  instances.push(instance);
  return instance.vm;
};

['info', 'success', 'warning', 'danger'].forEach((theme) => {
  Notification[theme] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options,
      };
    }

    options.theme = theme;

    return Notification(options);
  };
});

Notification.close = (id, userOnClose) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (instances[i] && (id === instances[i].id)) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
    }
  }
};

Notification.closeAll = () => {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Notification;
