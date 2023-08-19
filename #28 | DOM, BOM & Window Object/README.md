# Window Object, BOM & DOM 

We have the following when Javascript runs in a browser.
    | WINDOW |
  ---------------
  |DOM|  |BOM|  |JavaScript Core|

Window object represents browser window and provides methods to control it. It is a global object.

### DOM (Document Object Model):

Dom represent the page content as HTML 
document.body -> page body ad Js Object
document.body.style.background = "green"
           |-> changes page background to green

## BOM (Browser Object Model):

The browser Object model (BOM) represents additional 
objects provided by the browser (host invoernment )
for working with everything except the document

The fuctions alert/confirm/prompt are also a part of the BOM.
  Location href = "www.google.com" -> Redirect to another URL