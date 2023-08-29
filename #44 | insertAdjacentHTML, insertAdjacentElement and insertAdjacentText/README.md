# insertAdjacentHTML, insertAdjacentElement and insertAdjacentText

This method is used to insert HTML. The first parameter is a code word, specifying where to insert. Must be one of the following:

1. "beforebegin" - Insert HTML immediatily before element

2. "afterbegin" - Insert HTML into element at the beginning 

3. "beforeend" - Insert HTML into element at the end 

4. "afterend" - Insert HTML immediately after element

The second parameter is an HTML string :

Example: 

<div id="div"></div>
<script>
    div.insertAdjacentHTML('beforebegin','<p>Hello</p>');
    div.insertAdjacentHTML('afterend','<p>Bye</p>');
</script>

The output would be : 
<p> Hello </p>
<div id="div"></div>
<p>Bye</p>

### Node removal 
To remove a node, there's a method node.remove()

let id1 = document.getElementById("id1")

id1.remove()