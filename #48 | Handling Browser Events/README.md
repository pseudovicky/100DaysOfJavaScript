# addEventListner and removeeventListener

addEventListner is used to assign multiple handlers to an event.

element.addEventListener(event, handler)
element.removeEventListener(event, handler)
                   |- handler must be the same function object for this to work


# The Event Object
When an event happens, the browser create an event object, puts details into it and passes it as an argument to the handler.

elem.onclick = function(event){
    ...........
}

event.type: Event type
event.currentTarget : Element that handled the event
event.clintX/event.clientY : Cooedinates of the cursor

