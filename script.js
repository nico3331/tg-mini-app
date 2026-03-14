function Calc() {
    let n1 = parseInt(document.getElementById("number").value);
    n1 = Math.round(n1 / 1.05);
    document.getElementById("resultat").innerHTML = n1.toLocaleString('ru-RU');
    console.log(typeof n1);
}
function Copy() {
    let copyText = document.getElementById("resultat").textContent;
    let cleanNumber = copyText.replace(/\s/g, '');
    navigator.clipboard.writeText(cleanNumber);
    
}
