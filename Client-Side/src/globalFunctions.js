export function getElementWidth(element) {
  return getElementPosition(element).right - getElementPosition(element).left;
}

export function getElementHeight(element) {
  return getElementPosition(element).bottom - getElementPosition(element).top;
}

export function getElementPosition(element) {
  let position = element.getBoundingClientRect();
  return {
    top: position.top + window.scrollY,
    bottom: position.bottom + window.scrollY,
    left: position.left,
    right: position.right,
  };
}
