<template>
  <div
    class="v-pagination"
    :class="[
      'v-pagination--' + pagerSize,
      'v-pagination--text-' + align,
    ]">
    <div class="v-pagination--total" v-if="showTotal">共 {{total}} 条</div>
    <div class="v-pagination--sizes" v-if="showSizeChanger">
      <Select
        :value="pageSize"
        :size="pagerSize"
        @change="handlePageSize">
        <SelectMenu>
          <SelectMenuOption
            :label="item + ' 条/页'"
            :value="item"
            :key="item"
            v-for="item in pageSizeOptions">
          </SelectMenuOption>
        </SelectMenu>
      </Select>
    </div>
    <Button
      type="text"
      :size="pagerSize"
      :disabled="disabled || validCurrentPage <= 1"
      @click="handleTurn('prev')">
      <slot name="prev">
        <Icon icon="v-icon-caret-left"></Icon>
        <template v-if="prevText">{{prevText}}</template>
      </slot>
    </Button>
    <template v-if="simple">
      <div class="v-pagination--jumper">
        <Input
          :value="validCurrentPage"
          :size="pagerSize"
          @keyup.enter="handleJumper"/>
      </div>
      / {{pageCount}}
    </template>
    <template v-else-if="!minimal">
      <ul class="v-pager" @click="handlePage">
        <li
          class="v-pager--number"
          :class="[
            {
              ['active']: validCurrentPage === 1,
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
          <Icon :icon="quickPrevIconClass"></Icon>
        </li>
        <li
          class="v-pager--number"
          :class="[
            {
              ['active']: validCurrentPage === pager,
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
          <Icon :icon="quickNextIconClass"></Icon>
        </li>
        <li
          class="v-pager--number"
          :class="[
            {
              ['active']: validCurrentPage === pageCount,
              ['disabled']: disabled,
            }
          ]"
          v-if="pageCount > 1">
          {{pageCount}}
        </li>
      </ul>
    </template>
    <Button
      type="text"
      :size="pagerSize"
      :disabled="disabled || validCurrentPage >= pageCount"
      @click="handleTurn('next')">
      <slot name="next">
        <Icon icon="v-icon-caret-right"></Icon>
        <template v-if="nextText">{{nextText}}</template>
      </slot>
    </Button>
    <div class="v-pagination--jumper" v-if="showJumper">
      跳至
      <Input
        :value="validCurrentPage"
        :size="pagerSize"
        @keyup.enter="handleJumper"/>
      页
    </div>
  </div>
</template>
<script>
  import Button from 'free-vui/src/components/button';
  import Input from 'free-vui/src/components/input';
  import Select from 'free-vui/src/components/select';
  import SelectMenu from 'free-vui/src/components/select-menu';
  import SelectMenuOption from 'free-vui/src/components/select-menu-option';
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Pagination',
    componentName: 'Pagination',
    components: {
      Button,
      Icon,
      Input,
      Select,
      SelectMenu,
      SelectMenuOption,
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
        default: () => [10, 20, 30, 40, 50],
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
      minimal: Boolean,
      disabled: Boolean,
    },
    data() {
      return {
        showPrevMore: false,
        showNextMore: false,
        quickNextIconClass: 'v-icon-more',
        quickPrevIconClass: 'v-icon-more',
        internalCurrent: this.currentPage,
        internalPageSize: this.pageSize,
      };
    },
    computed: {
      pagerSize() {
        return this.size || (this.$VUI || {}).size;
      },
      pageCount() {
        return Number(Math.ceil(this.total / this.internalPageSize));
      },
      pagers() {
        const pagerCount = this.pagerCount > 5 ? this.pagerCount : 5;
        const halfPagerCount = (pagerCount - 1) / 2;
        const internalCurrent = Number(this.internalCurrent);
        const pageCount = Number(this.pageCount);
        let showPrevMore = false;
        let showNextMore = false;
        if (pageCount > pagerCount) {
          if (internalCurrent > pagerCount - halfPagerCount) {
            showPrevMore = true;
          }
          if (internalCurrent < pageCount - halfPagerCount) {
            showNextMore = true;
          }
        }
        const array = [];
        if (showPrevMore && !showNextMore) {
          const startPage = pageCount - (pagerCount - 2);
          for (let i = startPage; i < pageCount; i += 1) {
            array.push(i);
          }
        } else if (!showPrevMore && showNextMore) {
          for (let i = 2; i < pagerCount; i += 1) {
            array.push(i);
          }
        } else if (showPrevMore && showNextMore) {
          const offset = Math.floor(pagerCount / 2) - 1;
          for (let i = internalCurrent - offset; i <= internalCurrent + offset; i += 1) {
            array.push(i);
          }
        } else {
          for (let i = 2; i < pageCount; i += 1) {
            array.push(i);
          }
        }
        this.showPrevMore = showPrevMore;
        this.showNextMore = showNextMore;
        return array;
      },
      validCurrentPage() {
        let internalCurrent;
        const current = this.internalCurrent;
        const havePageCount = typeof this.pageCount === 'number';
        const currentValue = Number(current);
        if (!havePageCount) {
          if (isNaN(currentValue) || currentValue < 1) internalCurrent = 1;
        } else {
          if (currentValue < 1) {
            internalCurrent = 1;
          } else if (currentValue > this.pageCount) {
            internalCurrent = this.pageCount;
          }
        }
        if (internalCurrent === undefined && isNaN(currentValue)) {
          internalCurrent = 1;
        } else if (internalCurrent === 0) {
          internalCurrent = 1;
        }

        return internalCurrent === undefined ? currentValue : internalCurrent;
      },
    },
    watch: {
      showPrevMore(val) {
        if (!val) this.quickPrevIconClass = 'v-icon-more';
      },
      showNextMore(val) {
        if (!val) this.quickNextIconClass = 'v-icon-more';
      },
      internalCurrent() {
        this.$emit('page-change', this.validCurrentPage);
      },
    },
    methods: {
      mouseenter(direction) {
        if (this.disabled) return;
        if (direction === 'left') {
          this.quickPrevIconClass = 'v-icon-arrow-d-left-o';
        } else {
          this.quickNextIconClass = 'v-icon-arrow-d-right-o';
        }
      },
      handlePageSize(val) {
        if (this.disabled) return;
        this.internalPageSize = val;
        this.$emit('size-change', val);
        this.$emit('update:currentPage', this.validCurrentPage);
      },
      handleTurn(direction) {
        if (this.disabled) return;
        if (direction === 'prev') {
          this.internalCurrent -= 1;
        } else {
          this.internalCurrent += 1;
        }
      },
      handlePage(event) {
        const target = event.target;
        if (this.disabled || target.tagName === 'UL') return;
        const pageCount = this.pageCount;
        const pagerCount = this.pagerCount;
        const internalCurrent = this.internalCurrent;
        let newPage = Number(event.target.textContent);
        if (target.className.indexOf('v-icon-arrow-d-left-o') > -1) {
          newPage = internalCurrent - (pagerCount - 2);
        } else if (target.className.indexOf('v-icon-arrow-d-right-o') > -1) {
          newPage = internalCurrent + (pagerCount - 2);
        }
        if (!isNaN(newPage)) {
          if (newPage < 1) {
            newPage = 1;
          }
          if (newPage > pageCount) {
            newPage = pageCount;
          }
        }
        if (newPage === internalCurrent) return;
        this.internalCurrent = newPage;
      },
      handleJumper(event) {
        const currentValue = Number(event.target.value);
        if (isNaN(currentValue)) return;
        this.internalCurrent = currentValue;
      },
    },
  };
</script>
