var button = document.querySelector("#button");


var counter = 0;

button.addEventListener("click", (e) => {
    
    var div = document.createElement("div");
    div.classList.add("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.innerText = counter;
    counter++;
    document.body.append(div);
});

const addGlobalListener = (type, selector, callback) => {
    document.body.addEventListener(type, (e) => {
        callback(e, selector);
    });
}

addGlobalListener("click", "div", (e, selector) => {
    if(e.target.matches(selector)){
        alert(e.target.innerText);
    }
})
