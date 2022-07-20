// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
$(".modal-trigger").click((e) => {
    $("#modal-title").text($(e.target).closest(".modal-trigger").find(".card-title").text())
    console.log($(e.target).closest("#modal-trigger").find("#card-title").text());
    modal.style.display = "block";
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// modalTrigger.addEventListener("click", (e) => {
    
// })
// modalTrigger.onclick = function () {
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}