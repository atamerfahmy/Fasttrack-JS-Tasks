let vars = {
    London: "England",
    Paris: "France",
    Cairo: "Egypt"
}

$(document).ready(() => {
    $('.toggle-botton').click((e) => {
        $('.toggle-botton').removeClass("toggle-bottom-active");
        $(e.target).addClass("toggle-bottom-active");

        $(".text").text(e.target.innerHTML);
        $(".sub-text").text(e.target.innerHTML + " is the capital of " + vars[e.target.innerHTML]);
    })
})