# chapter 8 - Events & other DOM properties 

### Console.dir function
console.log shows the element DOM tree console.log shows the element as an object with its properties.

### tagName/nodeName
used to read tag name of an element 
tagName - only exist for Element nodes
nodeName - defined for any node (test, command etc)

### InnerHTML and OuterHTML
The innerHTML property allows to get the HTML inside the element as a string. 
                                                                  | valid for element nodes only

The outerHTML property contains the full HTML innerHTML + the elemment itself.

innerHTML is valid only for element nodes. For other
node types we can use nodeValue or data

### textContent 
Provides access to the teat inside the element : only text, minus all tags.

### The hidded property
The hidded attribute and the DOM property specifies whether the element is visible or not.
eg:
    <div hidden> I am hidden </div>
    <div id="element">I can be hidden </div>
    <script>
        element.hidden = true;
    </script>
