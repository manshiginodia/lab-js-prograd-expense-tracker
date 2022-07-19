// let storeData = () =>{
//     let key = document.querySelector('#text').value 
//     let amount = document.querySelector('#amount').value
    
// }

let balance = 0;
let income = 0;
let expense = 0;
let arr=[];

let addTran = ()=> {
    let text = document.getElementById("text").value;
    let amount = parseInt(document.getElementById("amount").value);
    arr.push({text, amount});
    document.getElementById("text").value = " ";
    document.getElementById("amount").value ="";
    document.getElementById("text").focus();
    localStorage.setItem((Math.random()*10000).toFixed(0),JSON.stringify(arr));
    if(amount >= 0 ){
        income = income + amount;
        balance = balance + amount;
        document.getElementById("balance").innerHTML = "$"+balance.toFixed(2);
        document.getElementById("money-plus").innerHTML = "$"+income.toFixed(2);
        document.getElementById("money-minus").innerHTML = "$"+expense.toFixed(2);
        let listIN = document.getElementById("list");
        let li = document.createElement("li");
        li.setAttribute("class","plus");
        li.innerText = text + ": $" + amount;
        listIN.appendChild(li);
    }
    else{
        expense = expense + amount;
        balance = balance + amount;
        document.getElementById("balance").innerHTML = "$"+balance.toFixed(2);
        document.getElementById("money-plus").innerHTML = "$"+income.toFixed(2);
        document.getElementById("money-minus").innerHTML = "$"+expense.toFixed(2);
        let listIN = document.getElementById("list");
        let li = document.createElement("li");
        li.setAttribute("class","minus");
        li.innerText = text + ": $" + amount;
        listIN.appendChild(li);
    }
 return false;
}

