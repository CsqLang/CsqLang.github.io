var counter = 0;
function increment() {
    counter++;
    document.getElementById("views").innerHTML = counter;
}

function rest_copy_btn_name() {
    // function that rest previous clipboard copy button inner text
    document.querySelectorAll('.copy-button').forEach((blck) => {
        blck.innerText = 'Copy';
    });
}
