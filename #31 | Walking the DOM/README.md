# Waling the DOM

DOM tree refers to the HTML page where all the nodes are objects there can be 3 main types of nodes in the DOM tree:

1- text nodes 
2- element nodes 
3- Comment nodes

In an HTML page <html> is at the root and <head> and <body> are it's children, etc.

Arext node is always a leaf of a tree

### Auto Correction :

If an erroneous HTML is encountered by the browser, it tends to correct it for example, if we put something after the body, it is automatically moved inside the body . Another example is <table> tag which must contain <tbody>.

## walking the DOM :

<html>
<head>
    <title>hello</title> <!--[document body ] -->
</head>
<dody>
<!-- Document - More children -->
</body>
</html>

