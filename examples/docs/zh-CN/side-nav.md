# SideNav 侧导航

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Menu from '@/components/menu';
  import MenuSub from '@/components/menu-sub';
  import MenuItem from '@/components/menu-item';
  import MenuItemGroup from '@/components/menu-item-group';
  import navigations from '../../nav.json';

  export default {
    components: {
      Row,
      Col,
      Menu,
      MenuSub,
      MenuItem,
      MenuItemGroup,
    },
    data() {
      return {
        navigations,
      };
    },
    methods: {
    },
  };
</script>