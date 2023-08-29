# SetTimeout and SetInterval

SetTimeout allows us to run a function once after the interval of time

syntax of setTimeout is as follows:

let timerId = setTimeout(function, <delay>,<arg1>,<arg2>)

- timerId return a timer id 
delay - in mili Seconds
1000 = 1 sec

# clearTimeout 

clearTimeout is udes to cancle the execution (in case we change our mind ) . 
For example:

let timeId = setTimeout(c => alert("never"),1000 ),
clearTimeout(timer Id) - cancle the execution

# setInterval method has a similar syntax as setTimeout : 

let timerId = setInterval (function, <delay>, <aer1>, <arg2> )

All arguments have the same meaning. But unlike setTimeout, it runs the function not only once, but regularly after the given interval of time.

To stop further calls, we can use clearInterval(timer)

