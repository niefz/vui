/**
 * Created by niefz on 2018/1/8.
 */
export default (ref) => {
  return {
    methods: {
      focus() {
        this.$refs[ref].focus();
      },
    },
  };
};
