/**
 * Created by niefz on 2018/1/16.
 */

// import Affix from './components/affix/index.js';
// import Alert from './components/alert/index.js';
// import Anchor from './components/anchor/index.js';
// import Avatar from './components/avatar/index.js';
// import Backtop from './components/backtop/index.js';
// import Badge from './components/badge/index.js';
// import Breadcrumb from './components/breadcrumb/index.js';
import Button from './components/button/index.js';
import ButtonGroup from './components/button-group/index.js';
// import Calendar from './components/calendar/index.js';
// import Card from './components/card/index.js';
// import Carousel from './components/carousel/index.js';
// import Cascader from './components/cascader/index.js';
// import Checkbox from './components/checkbox/index.js';
// import Col from './components/col/index.js';
// import Collapse from './components/collapse/index.js';
// import DateTimePicker from './components/datetimepicker/index.js';
// import Divider from './components/divider/index.js';
// import DropDown from './components/dropdown/index.js';
// import DropdownMenu from './components/dropdown-menu/index.js';
// import DropdownMenuItem from './components/dropdown-menu-item/index.js';
// import Empty from './components/empty/index.js';
// import Exception from './components/exception/index.js';
// import Form from './components/form/index.js';
import Icon from './components/icon/index.js';
// import Input from './components/input/index.js';
// import Layout from './components/layout/index.js';
// import LoadingBar from './components/loadingbar/index.js';
// import Menu from './components/menu/index.js';
// import Message from './components/message/index.js';
// import Modal from './components/modal/index.js';
// import Notification from './components/notification/index.js';
// import Pagination from './components/pagination/index.js';
// import Popover from './components/popover/index.js';
// import Progress from './components/progress/index.js';
// import Radio from './components/radio/index.js';
// import Rate from './components/rate/index.js';
// import Row from './components/row/index.js';
// import ScrollBar from './components/scrollbar/index.js';
// import Select from './components/select/index.js';
// import Slider from './components/slider/index.js';
// import Spin from './components/spin/index.js';
// import Steps from './components/steps/index.js';
// import Switch from './components/switch/index.js';
// import Table from './components/table/index.js';
// import Tabs from './components/tabs/index.js';
// import Tag from './components/tag/index.js';
// import TimeLine from './components/timeline/index.js';
// import Tooltip from './components/tooltip/index.js';
// import Transfer from './components/transfer/index.js';
// import Tree from './components/tree/index.js';
// import Upload from './components/upload/index.js';
// import locale from './locale/index.js';

const components = [
  // Affix,
  // Alert,
  // Anchor,
  // Avatar,
  // Backtop,
  // Badge,
  // Breadcrumb,
  Button,
  ButtonGroup,
  // Calendar,
  // Card,
  // Carousel,
  // Cascader,
  // Checkbox,
  // Col,
  // Collapse,
  // DateTimePicker,
  // Divider,
  // DropDown,
  // DropdownMenu,
  // DropdownMenuItem,
  // Empty,
  // Exception,
  // Form,
  Icon,
  // Input,
  // Layout,
  // LoadingBar,
  // Menu,
  // Modal,
  // Pagination,
  // Popover,
  // Progress,
  // Radio,
  // Rate,
  // Row,
  // ScrollBar,
  // Select,
  // Slider,
  // Steps,
  // Switch,
  // Table,
  // Tabs,
  // Tag,
  // TimeLine,
  // Tooltip,
  // Transfer,
  // Tree,
  // Upload,
];

const install = function(Vue, opts = {}) {
  // locale.use(opts.locale);
  // locale.i18n(opts.i18n);

  components.map(component => {
    Vue.component(component.name, component);
  });

  // Vue.use(Spin.directive);

  const VUI = {};
  VUI.size = opts.size || '';

  // Vue.prototype.$spin = Spin.service;
  // Vue.prototype.$notify = Notification;
  // Vue.prototype.$message = Message;

  Vue.prototype.$VUI = VUI;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const exports = {
  version: '1.0.0',
  // locale: locale.use,
  // i18n: locale.i18n,
  install,
  // Affix,
  // Alert,
  // Anchor,
  // Avatar,
  // Backtop,
  // Badge,
  // Breadcrumb,
  Button,
  ButtonGroup,
  // Calendar,
  // Card,
  // Carousel,
  // Cascader,
  // Checkbox,
  // Col,
  // Collapse,
  // DateTimePicker,
  // Divider,
  // DropDown,
  // DropdownMenu,
  // DropdownMenuItem,
  // Empty,
  // Exception,
  // Form,
  Icon,
  // Input,
  // Layout,
  // LoadingBar,
  // Menu,
  // Modal,
  // Pagination,
  // Popover,
  // Progress,
  // Radio,
  // Rate,
  // Row,
  // ScrollBar,
  // Select,
  // Slider,
  // Steps,
  // Switch,
  // Table,
  // Tabs,
  // Tag,
  // TimeLine,
  // Tooltip,
  // Transfer,
  // Tree,
  // Upload,
};

module.exports.default = module.exports = exports; // eslint-disable-line no-undef