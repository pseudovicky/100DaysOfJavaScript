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

