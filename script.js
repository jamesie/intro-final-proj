function compute()
{
    var x = document.getElementById("principal").value;
    if (!x) return
    var y = document.getElementById("rate").value;
    var z = document.getElementById("years").value;
    const calc = (x * y * z) / 100
    var a = new Date()
    const date = a.getFullYear() + parseInt(z);

    document.getElementById("res").innerHTML = `If you deposit $${x}, \nat an interest rate of ${y}%. \nYou will recieve an amount of ${calc},\nin the year ${date}`
    
}


function rate(){
    var rate = document.getElementById("rate").value;
    if (!document.getElementById("rate")){
 
        document.getElementById("interestRate").innerHTML = `3.5%`
        return
    }
    document.getElementById("interestRate").innerHTML = `${rate}%`
}
