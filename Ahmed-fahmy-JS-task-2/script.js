var button = document.querySelector("#submit");
var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

var form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var input = document.querySelector("input");
    let value = input.value;

    if(format.test(value) || value === ""){
        return alert("Please do not add special characters or enter some text.");
    }else{
        var label = document.createElement("div");
        label.classList.add("label");
        label.innerText = input.value;
        label.addEventListener("click", (e) => {
            label.parentElement.removeChild(label);
        })

        input.value = "";
        var container = document.querySelector("#labels");
        container.append(label);
    }

})