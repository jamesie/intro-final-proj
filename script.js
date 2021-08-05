function compute()
{
    var x = document.getElementById("principal").value;
    if (!x || x < 1){
        alert(`Error: you must enter a positive number for amount!`)
        document.getElementById("principal").focus();
        return
    } 
    document.getElementById("res").innerHTML = null
    var y = document.getElementById("rate").value;
    var z = document.getElementById("years").value;
    const calc = (x * y * z) / 100
    var a = new Date()
    const date = a.getFullYear() + parseInt(z);
    const response = [createResponseLine("If you deposit $", ",", x) , createResponseLine("at an interest rate of ", "%.", y), createResponseLine("You will recieve an amount of ", ",", calc), createResponseLine("in the year ", ".", date)]
    response.forEach((element) => {
        document.getElementById("res").appendChild(element)
    })
}

function stringHighlighter(text){
    const element  = document.createElement("mark")
    element.innerHTML = text
    return element
}

function createResponseLine(text, text2, highlight,){
    const element = document.createElement("div")
    const textnode = document.createTextNode(text);
    const text2node = document.createTextNode(text2);
    element.appendChild(textnode)
    element.appendChild(stringHighlighter(highlight))
    element.appendChild(text2node)
    element.setAttribute("class", "flex")
    return element
}


function rate(){
    var rate = document.getElementById("rate").value;
    if (!document.getElementById("rate")){
 
        document.getElementById("interestRate").innerHTML = `3.5%`
        return
    }
    document.getElementById("interestRate").innerHTML = `${rate}%`
}
