# Notes on DOM Collections :-

- They are read-only
- They are live elem-childNodes (reference) will automatically update if childNodes of elem is changed.
- They are iterable using for ... of loop.

### Siblings and the parent 
Siblings are nodes that are children of the same parent.

- For Example : <head> and <body> are siblings.
  Siblings have same parent. In the above   
  example its html.

<body> is said to be the "next" or "right" sibling of <head> </head> is said to be the "previous" or "left" sibling of <body> . 

The next sibling is in nextSibling property and the previous one is previousSibling .
The parent is available as parentNode.

alert(document.documentElement.parentNode); //document
alert (document.documentElement.parentElement) //null


