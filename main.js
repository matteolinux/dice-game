const dices = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

window.addEventListener("load", function(e) {
    $(".win").css("visibility", "hidden");
})


document.querySelector("#btn").addEventListener("click", function() {
    let dice1 = Math.floor(Math.random() * dices.length);
    let dice2 = Math.floor(Math.random() * dices.length);

    let player = dices[dice1];
    let computer = dices[dice2];

    document.querySelector(".item-1").setAttribute("src", "images/" + player);
    document.querySelector(".item-2").setAttribute("src", "images/" + computer);

    if (dice1 > dice2) {
        document.querySelector(".win").innerHTML = "Vince: Player!"
    } else if (dice1 < dice2) {
        document.querySelector(".win").innerHTML = "Vince: Computer!"
    } else {
        document.querySelector(".win").innerHTML = "Pareggio!"
    }

    $(".win").css("visibility", "visible");

});