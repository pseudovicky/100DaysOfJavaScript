setTimeout(() => {
    console.log('hacking wifi......... please wait..............')
}, 1000)

// console.log(rahul) // handle this error


// error handled

// try{
//     console.log(rahul) // handle this error
// } catch (error){
//     console.log('Balle Balle')
// }


// non handling error

try {
    setTimeout(() => {
        console.log(rahul)
    }, 1000)
} catch (error) {
    console.log('Balle Balle')
}

setTimeout(() => {
    console.log('hacking wifi......... please wait..............')
    console.log('Fetching username and password....... please wait..........')
}, 2000)

setTimeout(() => {
    console.log('Fetching username and password....... please wait..........')
    console.log('hacking wifi......... please wait..............')
    console.log('hacking wifi......... please wait..............')
    console.log('hacking wifi......... please wait..............')
}, 3000)

setTimeout(() => {
    console.log('Wifi Hacked !! ')
}, 5000)