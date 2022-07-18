var names = document.querySelectorAll("#name");

console.log(names);

names.forEach((name) => {
    name.innerHTML = "Ahmed Fahmy";
})

var loc = document.querySelector("#loc");
loc.innerHTML = "Cairo";
console.log(loc);

var photoContainer = document.querySelector(".profile");

var img = document.createElement("img");

img.src = "./assets/MicrosoftTeams-image.png";
img.classList.add(photoContainer.classList);
photoContainer.append(img);

var photoContainer = document.querySelector(".mini-profile");

var img = document.createElement("img");

img.src = "./assets/MicrosoftTeams-image.png";
img.classList.add(photoContainer.classList);
photoContainer.append(img);

var themeInput = document.querySelector("#theme");

var buttons = document.querySelectorAll(".button-menu");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        buttons.forEach((button) => {
            button.classList.remove("clicked-button");
        })

        button.classList.add("clicked-button");
    })
})

themeInput.addEventListener("click", (e) => {
    console.log(themeInput.checked)
    var themeText = document.querySelector("#themeText")
    if(themeInput.checked === true){
        themeText.innerHTML = "Dark Theme";

        document.documentElement.style.setProperty('--primary-color', '#151e2b');
        document.documentElement.style.setProperty('--secondary-color', '#fff');
        document.documentElement.style.setProperty('--slider-border-color', '#fff');
    }else{
        themeText.innerHTML = "Light Theme";
        document.documentElement.style.setProperty('--primary-color', '#fff');
        document.documentElement.style.setProperty('--secondary-color', '#000');
        document.documentElement.style.setProperty('--background-color', '#44b1f6');
        document.documentElement.style.setProperty('--grey-color', 'grey');
        document.documentElement.style.setProperty('--light-grey-color', '#949494');
        document.documentElement.style.setProperty('--simon-color', '#ead1cc');
        document.documentElement.style.setProperty('--border-color', '#ebebeb');
        document.documentElement.style.setProperty('--profile-photo-color', '#bd9281');
        document.documentElement.style.setProperty('--slider-background', '#000');
        document.documentElement.style.setProperty('--slider-border-color', '#000');

    }
})


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

var bgColorOne = document.querySelector("#color-one");
bgColorOne.addEventListener("click", (e) => {
    document.documentElement.style.setProperty('--background-color', '#44b1f6');
})

var bgColorTwo = document.querySelector("#color-two");
bgColorTwo.addEventListener("click", (e) => {
    document.documentElement.style.setProperty('--background-color', '#000080');
})