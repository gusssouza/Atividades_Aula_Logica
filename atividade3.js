function calcular() {
    var valorParafuso = 0.50;
    var valorPorca = 0.30;
    var valorArruela = 0.10;
    var nome = document.getElementById("nome").value;
    var parafuso = document.getElementById("parafuso").value;
    var porca = document.getElementById("porca").value;
    var arruela = document.getElementById("arruela").value;
    var totalParafuso = (parafuso * valorParafuso) - (parafuso * 0.20);
    var totalPorca = (porca * valorPorca) - (porca * 0.10);
    var totalArruela = (arruela * valorArruela) - (arruela * 0.30); 

    alert("Olá " + nome + " Quantidade de parafusos: " + parafuso + " Valor: " + totalParafuso + " Quantidade de porcas: " + porca + " Valor: " + totalPorca + " Quantidade de arruelas " + arruela + " Valor " + totalArruela)
} 