function compute()
{
    p = document.getElementById("principal").value;
    const rate =  document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    const interest = p*rate*years/100;
    const amount = parseInt(principal) + parseFloat(interest);

    var year = new Date().getFullYear() + parseInt(years);

    var result = document.getElementById("result");

    if(p <=0){
        alert("Please enter a positive number");
        document.getElementById("principal").focus();
    }

    else{
        result.innerHTML = "if you deposit $" + p + "\<br\> at an interest rate of " + rate + "%.\<br\> You will recieve an amount of $" + interest + ".\<br\> in the year " + year + "\<br\>";
    }
    
}


function updateRate(){
    const newRate = document.getElementById("rate").value;

    document.getElementById("rateval").textContent=newRate;
}
        
