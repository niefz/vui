<template>
 	<div
		:class="classList"
		:style="style">
		<slot></slot>
	</div>
</template>
<script>
  export default {
    name: 'Row',
    componentName: 'Row',
    props: {
      gutter: {
        type: Number,
        default: 0,
      },
      flex: {
        type: Boolean,
        default: false,
      },
      align: {
        type: String,
        default: 'start',
      },
      justify: {
        type: String,
        default: 'start',
      },
    },
    computed: {
      classList() {
        let classList = [];

        if (this.flex) {
          classList.push('v-row__flex');

          ['align', 'justify'].forEach(prop => {
            if (this[prop]) {
              classList.push(`v-row__flex-${prop}-${this[prop]}`);
            }
          });
				} else {
          classList.push('v-row');
				}

        return classList;
      },
      style() {
        const style = {};

        if (this.gutter) {
          style.marginLeft = `-${this.gutter / 2}px`;
          style.marginRight = style.marginLeft;
        }

        return style;
      },
    },
  };
</script>
