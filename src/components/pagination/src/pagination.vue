<template>
  <div
    class="v-pagination"
    :class="[
      'v-pagination--' + pagerSize,
      'v-pagination--text-' + align,
    ]">
    <div class="v-pagination--total" v-if="showTotal">共 {{total}} 条</div>
    <div class="v-pagination--sizes" v-if="showSizeChanger">
      <v-select
        :value="pageSize"
        :size="pagerSize"
        @change="handlePageSize">
        <v-select-menu>
          <v-select-menu-option
            :label="item + ' 条/页'"
            :value="item"
            v-for="item in pageSizeOptions">
          </v-select-menu-option>
        </v-select-menu>
      </v-select>
    </div>
    <v-button
      type="text"
      :size="pagerSize"
      :disabled="disabled || current <= 1"
      @click="handlePrev">
      <template v-if="prevText">{{prevText}}</template>
      <template v-else>
        <v-icon icon="v-icon-arrow-left"></v-icon>
      </template>
    </v-button>
    <template v-if="simple">
      <div class="v-pagination--jumper">
        <v-input :value="current" :size="pagerSize" @keyup.enter="handlePageChange"></v-input>
      </div>
      / {{pageCount}}
    </template>
    <template v-else>
      <ul class="v-pager" @click="handlePager">
        <li
          class="v-pager--number"
          :class="[
            {
              ['active']: current === 1,
              ['disabled']: disabled,
            }
          ]"
          v-if="pageCount > 0">
          1
        </li>
        <li
          class="v-pager--quick-prev"
          :class="[
            {
              ['disabled']: disabled,
            }
          ]"
          @mouseenter="mouseenter('left')"
          @mouseleave="quickPrevIconClass = 'v-icon-more'"
          v-if="showPrevMore">
          <v-icon :icon="quickPrevIconClass"></v-icon>
        </li>
        <li
          class="v-pager--number"
          :class="[
            {
              ['active']: current === pager,
              ['disabled']: disabled,
            }
          ]"
          :key="pager"
          v-for="pager in pagers">
          {{pager}}
        </li>
        <li
          class="v-pager--quick-next"
          :class="[
            {
              ['disabled']: disabled,
            }
          ]"
          @mouseenter="mouseenter('right')"
          @mouseleave="quickNextIconClass = 'v-icon-more'"
          v-if="showNextMore">
          <v-icon :icon="quickNextIconClass"></v-icon>
        </li>
        <li
          class="v-pager--number"
          :class="[
            {
              ['active']: current === pageCount,
              ['disabled']: disabled,
            }
          ]"
          v-if="pageCount > 1">
          {{pageCount}}
        </li>
      </ul>
    </template>
    <v-button
      type="text"
      :size="pagerSize"
      :disabled="disabled || current >= pageCount"
      @click="handleNext">
      <template v-if="nextText">{{nextText}}</template>
      <template v-else>
        <v-icon icon="v-icon-arrow-right"></v-icon>
      </template>
    </v-button>
    <div class="v-pagination--jumper" v-if="showJumper">
      跳至
      <v-input :value="current" :size="pagerSize" @keyup.enter="handlePageChange"></v-input>
      页
    </div>
  </div>
</template>
<script>
  import Button from '@/components/button';
  import Input from '@/components/input';
  import Select from '@/components/select';
  import SelectMenu from '@/components/select-menu';
  import SelectMenuOption from '@/components/select-menu-option';
  import Icon from '@/components/icon';

  export default {
    name: 'Pagination',
    componentName: 'Pagination',
    components: {
      VButton: Button,
      VIcon: Icon,
      VInput: Input,
      VSelect: Select,
      VSelectMenu: SelectMenu,
      VSelectMenuOption: SelectMenuOption,
    },
    props: {
      size: {
        type: String,
        default: 'small',
      },
      align: {
        type: String,
        default: 'left',
      },
      pageSizeOptions: {
        type: Array,
        default: () => [10, 20, 30, 40, 50, 100],
      },
      prevText: {
        type: String,
        default: '',
      },
      nextText: {
        type: String,
        default: '',
      },
      pagerCount: {
        type: Number,
        default: 7,
      },
      currentPage: {
        type: Number,
        default: 1,
      },
      pageSize: {
        type: Number,
        default: 10
      },
      total: Number,
      showTotal: Boolean,
      showSizeChanger: Boolean,
      showJumper: Boolean,
      simple: Boolean,
      disabled: Boolean,
    },
    data() {
      return {
        showPrevMore: false,
        showNextMore: false,
        quickNextIconClass: 'v-icon-more',
        quickPrevIconClass: 'v-icon-more',
        current: this.currentPage,
      };
    },
    computed: {
      pagerSize() {
        return this.size || (this.$VUI || {}).size;
      },
      pageCount() {
        return Number(Math.ceil(this.total / this.pageSize));
      },
      pagers() {
        const pagerCount = this.pagerCount;
        const current = Number(this.current);
        const pageCount = Number(this.pageCount);
        let showPrevMore = false;
        let showNextMore = false;
        if (pageCount > pagerCount) {
          if (current > pagerCount - 3) {
            showPrevMore = true;
          }
          if (current < pageCount - 3) {
            showNextMore = true;
          }
        }
        const array = [];
        if (showPrevMore && !showNextMore) {
          const startPage = pageCount - (pagerCount - 2);
          for (let i = startPage; i < pageCount; i++) {
            array.push(i);
          }
        } else if (!showPrevMore && showNextMore) {
          for (let i = 2; i < pagerCount; i++) {
            array.push(i);
          }
        } else if (showPrevMore && showNextMore) {
          const offset = Math.floor(pagerCount / 2) - 1;
          for (let i = current - offset; i <= current + offset; i++) {
            array.push(i);
          }
        } else {
          for (let i = 2; i < pageCount; i++) {
            array.push(i);
          }
        }
        this.showPrevMore = showPrevMore;
        this.showNextMore = showNextMore;
        return array;
      },
    },
    watch: {
      showPrevMore(val) {
        if (!val) this.quickPrevIconClass = 'v-icon-more';
      },
      showNextMore(val) {
        if (!val) this.quickNextIconClass = 'v-icon-more';
      },
    },
    methods: {
      mouseenter(direction) {
        if (this.disabled) return;
        if (direction === 'left') {
          this.quickPrevIconClass = 'v-icon-arrow-d-left';
        } else {
          this.quickNextIconClass = 'v-icon-arrow-d-right';
        }
      },
      handlePageSize(val) {
        if (this.disabled) return;
        this.$emit('size-change', val);
      },
      computedCurrentPage(val) {
        let currentValue;
        const havePageCount = typeof this.pageCount === 'number';
        const value = Number(val);
        if (!havePageCount) {
          if (isNaN(value) || value < 1) currentValue = 1;
        } else {
          if (value < 1) {
            currentValue = 1;
          } else if (value > this.pageCount) {
            currentValue = this.pageCount;
          }
        }
        if (currentValue === undefined && isNaN(value)) {
          currentValue = 1;
        } else if (currentValue === 0) {
          currentValue = 1;
        }

        return currentValue === undefined ? value : currentValue;
      },
      handlePrev() {
        if (this.disabled) return;
        const page = this.current - 1;
        this.current = this.computedCurrentPage(page);
        this.$emit('page-change', this.current);
      },
      handlePager(event) {
        const target = event.target;
        if (this.disabled || target.tagName === 'UL') return;
        const pageCount = this.pageCount;
        const pagerCount = this.pagerCount;
        const current = this.current;
        let newPage = Number(event.target.textContent);
        if (target.className.indexOf('v-icon-arrow-d-left') > -1) {
          newPage = current - (pagerCount - 2);
        } else if (target.className.indexOf('v-icon-arrow-d-right') > -1) {
          newPage = current + (pagerCount - 2);
        }
        if (!isNaN(newPage)) {
          if (newPage < 1) {
            newPage = 1;
          }
          if (newPage > pageCount) {
            newPage = pageCount;
          }
        }
        this.current = newPage;
        if (newPage === current) return;
        this.$emit('page-change', newPage);
      },
      handleNext() {
        if (this.disabled) return;
        const page = this.current + 1;
        this.current = this.computedCurrentPage(page);
        this.$emit('page-change', this.current);
      },
      handlePageChange(event) {
        const page = Number(event.target.value);
        if (isNaN(page)) return;
        this.current = this.computedCurrentPage(page);
        this.$emit('page-change', this.current);
      },
    },
  };
</script>
