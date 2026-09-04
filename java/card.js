count = 0;
function add() {
    // var show = document.getElementById('cycle').style.display = "Block";
    count++;
    document.getElementById("add-number").innerText = count;
}
function dele() {
     if (count > 0) { // Check if count is greater than 0
        count--;
    }
    document.getElementById("add-number").innerText = count;
}
function showqr() {
    // alert("hel");
    const overlay = document.getElementById('content-popup');
    overlay.classList.toggle('show');
};
