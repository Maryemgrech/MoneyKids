let balance = 100;

function addExpense() {
    let desc = document.getElementById("desc").value;
    let amount = parseFloat(document.getElementById("amount").value);

    if (!desc || !amount) {
        alert("Remplis les champs !");
        return;
    }

    balance -= amount;
    document.getElementById("balance").innerText = balance + " TND";

    let li = document.createElement("li");
    li.textContent = desc + " - " + amount + " TND";

    document.getElementById("list").appendChild(li);
}