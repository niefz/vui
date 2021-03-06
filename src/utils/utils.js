/**
 * Created by niefz on 2018/1/8.
 */
const scrollTop = (el, from = 0, to, duration = 500) => {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
      window.webkitRequestAnimationFrame
      || window.mozRequestAnimationFrame
      || window.msRequestAnimationFrame
      || function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  }

  const difference = Math.abs(from - to);
  const steps = Math.ceil(difference / duration * 50);

  const scroll = (start, end, step) => {
    if (start === end) return;
    let d = (start + step > end) ? end : start + step;
    if (start > end) {
      d = (start - step < end) ? end : start - step;
    }
    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el.scrollTop = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  };

  scroll(from, to, steps);
};

export default { scrollTop };
