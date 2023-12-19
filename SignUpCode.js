document.getElementById("submit-button").addEventListener('click', function() {
    let input = document.getElementById('4-digit').value;
    submitProcess(input);
}); //listener on button
function submitProcess(input) {
    console.log("User entered:", input);
    if (input == "1234") {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}