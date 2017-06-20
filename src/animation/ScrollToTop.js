import $ from "jquery/dist/jquery.min.js";
const ScrollToTop = () => {
  window.scrollTo(0, 0);
  $('#menu-toggle').prop('checked', false);
  return null;
};
export default ScrollToTop;
