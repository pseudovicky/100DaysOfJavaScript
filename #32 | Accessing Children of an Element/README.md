## firstChile, lastChild & childNodes

element.fisstChild -> first child Element
element.lastChild -> last child element
element.childNodes -> All child nodes

Following is always true:

elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.child.length - 1] === elem.lastChild

There is also a method elem.hasChildNodes() to check whether there are child nodes.

Notes: childNodes looks like an array But its not actually an array but a collection. we can use array from (collection) to convert it into an array -> Array methods went work