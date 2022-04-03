console.log('This is body scetion')
document.getElementById("root").innerHTML = '<h1>This is H1 inside Div</h1>'

console.log(document.getElementsByClassName("para"))

document.getElementsByClassName("para")[0].innerHTML = 'This is p element'

console.log(document.getElementsByClassName("para")[0].innerHTML)

document.getElementById("root").style.backgroundColor = 'crimson'
document.getElementById("root").style.color = 'white'

function callMe() {
    //alert('Did you click me ?')
    var message = prompt('Please provide comments ?')
    console.log(message)
}