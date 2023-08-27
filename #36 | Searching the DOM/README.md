# Searching the Dom
DOM navigation properties are helpful when the elements are close to each other. If they are not close to each other, we have some mare methods to search the DOM

### document.getElementById
This method is used to get the element with a given "id" attribute 

let span = document.getElementById('span')
span.style = 'red'

### ducument.querySelectorAll
Return all elements inside an element matching the given css slector

### document.querySelector
Return the first element for the given css Selector .
A efficient version of elem.querySelectorAll  (CSS) [0]

### document.getElementByTagName
Returns elements with the given tag name

### document.getElementsByClassName 
Return elements that have the given CSS class
<!-- Dont forget the "s" letter -->
### document.getElementsByName 
Select elements by the name attribute