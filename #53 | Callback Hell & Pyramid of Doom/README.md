# Pyramid of DOOM

When we have callback inside callbacks, the code gets difficult to manage.

loadScript((...){
    loadScript..
        loadScript...
            loadScript
                        ...
})

As calls become more nested, the code becommes deeper and inereasingly more difficult to manage,
especially if we have real code instead of ...

This is sometimes called "Callback hell" or "Pyramid of Doom"

The "pyramid" of these calls grows towards the right with every asynchronous action. Soon it spirals out of control. so this way of coding isn't good!


