# Browser Events :

An event is a single that somethings has happend . All the Dom nodes generate such singles.

Some important DOM events are:

Mouse events : click, contextmenu (right click), mouseover/ mouseout, mousedown/mouseup, mousemove

Keyboard events: keydown and keyup

form element events: submit, focus etc.

### Handling Events
Events can be handleed through HTML attributes
<input value="Hey" onclick="alert('hey')" type="button">  - here also can be another js function

Events can also be handled through the onclick 

elem.onclick = function(){
    alert("yes")
};

Note : Adding a handler with javascript overwrites the existing handler.