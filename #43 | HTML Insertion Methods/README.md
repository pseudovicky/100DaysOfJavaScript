# Insertiion Methods

We looked at some ways to insert elements in the DOM. Here is another way:

let fiv = document.createElement('div') //create

div.className = "alert" // set class
div.innerHTML = "<span>hello</span>

document.body.append(div)

Here are some more insertion methods:

1. node.append(e) - append at the end of node

2. node.prepend(e) - Insert at the beginning of node

3. node.before(e) - Insert before node

4. node.after(e) - Insert after node

5. node.replaceWith(e) - replace node with the given node 

<!-- tast  -->
Quick Quiz : Try out all these methods with your own webpage.


