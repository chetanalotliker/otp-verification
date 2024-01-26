const inputs = document.getElementById("inputs");

inputs.addEventListener("input", function (e) {
    const target = e.target;
    const val = target.value;

    if (isNaN(val)) {
        target.value = "";
        return;
    }

    if (val != "") {
        const next = target.nextElementSibling;
        if (next) {
            next.focus();
        }
    }
});

inputs.addEventListener("keyup", function (e) {
    const target = e.target;
    const key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
            prev.focus();
        }
        return;
    }
});

function verifyOtp() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;

    if (input1 && input2 && input3 && input4) {
        document.getElementById('main_container').innerHTML = `<h4>OTP Verified Successfully </h4><a href=index.html data-toggle="tooltip" title="Go to Home Page"
        ><i class="fa fa-home home-class"></i></a>`
    }
}