console.log(document.getElementsByClassName("a"));

var getElementsWithClass = function(element, className, result) {

  for (var j = 0; j < element.children.length; j++) {
    getElementsWithClass(element.children[j], className, result);
  }
  if (element.className === className) {
    result.push(element);
  }

  return result;
};
console.log(getElementsWithClass(document.documentElement, "a", []));
