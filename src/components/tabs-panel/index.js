/**
 * Created by niefz on 2018/1/8.
 */
import VTabsPanel from './src/tabs-panel';

VTabsPanel.install = (Vue) => {
  Vue.component(VTabsPanel.name, VTabsPanel);
};

export default VTabsPanel;
