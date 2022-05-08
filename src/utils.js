export const closest = (target, selector) => {
  var clos_res;

  try {
    let clos_res = target.closest(selector)
  } catch (e) {
    clos_res = target;
  }
  return clos_res;
}

export const getOffsetRect = (elem) => {
  var box = elem.getBoundingClientRect()

  return { top: Math.round(box.top), left: Math.round(box.left) }
}

export const getTransformProps = (x, y) => {
  return {
    transform: 'translate(' + x + 'px, ' + y + 'px)'
  }
}

export const listWithChildren = (list, childrenProp) => {
  return list.map(item => {
    return {
      ...item,
      [childrenProp]: item[childrenProp]
        ? listWithChildren(item[childrenProp], childrenProp)
        : []
    }
  })
}
