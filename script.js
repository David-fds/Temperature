function convert(){
    var element1 = document.getElementById("input1");
    var element2 = document.getElementById("c1");
    var elementf = document.getElementById("farenheit");
    var elementc = document.getElementById("celsius");

    var checkf = elementf.checked;
    var checkc = elementc.checked;

    alert(checkf + "    " + checkc);

    var num3 = 0
    var num1 = element1.value;

    if(checkf == true) {
        num3 = ((num1 - 32) * 5) / 9;
    }

    else {
        num3 = ((num1 * 9) / 5) + 32;
    }

    element2.textContent = num3;
}

function wipe(){
    var element1 = document.getElementById("input1");
    var element2 = document.getElementById("c1");

    element1.value = "";
    element2.textContent = "";
}
