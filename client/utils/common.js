export const resolveImgSrc = (imgName) => require('../images/' + imgName);

/*
 * toggle the checkbox and returns the checked value of the checkbox
 */
export const toggleCheckbox = (chk) => {
  chk.checked = !chk.checked;
  return chk.checked;
}
