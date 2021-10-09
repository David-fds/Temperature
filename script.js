function convert(){
        var element1 = document.getElementById("input1");
        var element2 = document.getElementById("c1");
        var element3 = document.getElementById("c2");
        var elementf = document.getElementById("farenheit");
        var elementc = document.getElementById("celsius");
        
        var degr = element3.textContent;
        var checkf = elementf.checked;
        var checkc = elementc.checked;

    alert(checkf + " " + checkc + " " + degr);

        var farencolor;
        var answer;
        var num3;
        var hotcold;
        var num1 = element1.value;

    // FIRST CHECK UNITS, THEN CONVERT

    if(checkf == true) {
        num3 = ((num1 - 32) * 5) / 9;
        answer = num3 + " " + degr + "C";
        farencolor = num1;
    }

    else {
        num3 = ((num1 * 9) / 5) + 32;
        answer = num3 + " " + degr + "F";
        farencolor = num3;
    }

    // NOW DETERMINE COLOR OF THE RETURNED TEMPERATURE

    if(farencolor >= 85) {
        element2.style.color = "red";
    }

    else if(farencolor >= 60) {
        element2.style.color = "green";
    }

    else {
        element2.style.color = "blue";
    }

    element2.textContent = answer;
}

function wipe(){
        var element1 = document.getElementById("input1");
        var element2 = document.getElementById("c1");
        var element3 = document.getElementById("c2");
        var degr = element3.textContent;
        
    element1.value = "";
    element2.textContent = degr;
}
