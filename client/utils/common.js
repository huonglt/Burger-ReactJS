export const resolveImgSrc = (imgName) => require('../images/' + imgName);

/*
 * toggle the checkbox and returns the checked value of the checkbox
 */
export const toggleCheckbox = (chk) => {
  chk.checked = !chk.checked;
  return chk.checked;
}

/*
 * execute function f1 when expression is true. otherwise execute function f2
 * arguments to either functions is via rest parameter ...args
 */
export const toggleFn = (exp, f1, f2, ...args) => {
  return (exp) ? f1(args) : f2(args);
}
