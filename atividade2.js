function Compra(){
var custoCafe = 25
var custoLeite = 5
var custoBanana = 8
var kgCafe = document.getElementById("cafe").value * custoCafe;
var litrosLeite = document.getElementById("leite").value * custoLeite;
var kgBanana = document.getElementById("banana").value * custoBanana;
var total = kgCafe + litrosLeite + kgBanana;

alert("Custo café em R$: " + kgCafe + " Custo leite em R$: " + litrosLeite + " Custo banana em R$: " + kgBanana + " Custo total em R$: " + total)

}