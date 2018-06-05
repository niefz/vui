/**
 * Created by niefz on 2018/4/12.
 */
import Vue from 'vue';
import Msg from './message.vue';

let index = 1;
let instance;
const instances = [];
const MessageConstructor = Vue.extend(Msg);

const Message = (options) => {

  if (Vue.prototype.$isServer) return;

  options = options || {};

  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }

  const id = 'message-' + index++;
  const userOnClose = options.onClose;

  options.onClose = () => {
    Message.close(id, userOnClose);
  };

  instance = new MessageConstructor({
    data: options,
  });

  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = '10001';
  instances.push(instance);
  return instance.vm;
};

['info', 'success', 'warning', 'error'].forEach((theme) => {
  Message[theme] = (options) => {
    if (typeof options === 'string') {
      options = {
        message: options,
      };
    }

    options.theme = theme;

    return Message(options);
  };
});

Message.close = (id, userOnClose) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (instances[i] && (id === instances[i].id)) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
    }
  }
};

Message.closeAll = () => {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Message;
