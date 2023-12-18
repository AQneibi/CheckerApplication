document.getElementById('submit-button').addEventListener('click', submitProcess()); //listener on button
function submitProcess() {
    let input  = document.getElementById('4-digit').value; //content within button
    console.log("User entered:", input);
    if (input == "1234") {
    console.log(true);
        return true;}
}