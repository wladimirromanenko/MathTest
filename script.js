let button = document.getElementById('finish');

button.addEventListener("click", checkTest);

function checkTest( ) {
    let result=0;

    let a1 = document.getElementById("q1").value;
    if (a1 ==="4") {
        result++;
    }
    let a2 = document.getElementById("q2").value;
    if (a2 ==="4") {
        result++;
    }
    let a3 = document.getElementById("q3").value;
    if (a3 ==="2") {
        result++;
    }
    let a4 = document.getElementById("q4").value;
    if (a4 ==="4") {
        result++;
    }
    let a5 = document.getElementById("q5").value;
    if (a5 ==="10") {
        result++;
    }

    alert(result)
}