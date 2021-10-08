function convert(){
    var element1 = document.getElementById("input1");
    var element2 = document.getElementById("c1");

    var num1 = element1.value;
    var num3 = ((num1 - 32) * 5) / 9;

    element2.textContent = num3;
}

function wipe(){
    var element1 = document.getElementById("input1");
    var element2 = document.getElementById("c1");

    element1.value = "";
    element2.textContent = "";
}
