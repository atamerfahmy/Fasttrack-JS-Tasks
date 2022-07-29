var model = {
    data: [
        {
            name: "Spider Man",
            image: "./images/spiderman.avif",
            counter: 0
        },
        {
            name: "Super Man",
            image: "./images/superman.jpg",
            counter: 0
        }
    ]
}

var controller = {
    init: function () {
        // model.data = model.data.reverse();
        this.setCurrentInit();
        view.init();
    },
    current: model.data[0],
    currentIndex: 0,
    setCurrentInit: function () {  
        this.current = model.data[0];
        this.currentIndex = 0;
    },
    setCurrent: function (index) {
        this.current = model.data[index];
        this.currentIndex = index;
        view.renderCurrent();
    },
    increment: function () {  
        model.data[this.currentIndex].counter++;
        this.setCurrent(this.currentIndex);
        view.renderCurrent();
    }
}

var view = {
    init: function () {  
        this.setMainElements();
        this.renderList();
        this.bindListener();
        this.renderCurrent();
    },
    setMainElements: function () {  
        this.list = document.querySelector("#images-list");
        this.img = document.querySelector("#img");
        this.name = document.querySelector("#name");
        this.counter = document.querySelector("#counter");

    },
    renderList: function () { 
        model.data.map((item, i) => {
            var listItemContainer = document.createElement("div");
            var listItemImage = document.createElement("img");
            listItemImage.setAttribute("src", item.image);
            listItemImage.setAttribute("alt", item.name);
            listItemImage.setAttribute("data-i", i);
            listItemImage.setAttribute("width", 40);
            listItemImage.setAttribute("height", 50);
            listItemImage.classList.add("mini-img");

            listItemContainer.appendChild(listItemImage);
            this.list.append(listItemContainer);
        })
    },
    renderCurrent: function () {  
        var current = controller.current;
        this.img.setAttribute("src", current.image);
        this.name.innerHTML = current.name;
        this.counter.innerHTML = current.counter;

    },
    bindListener: function () { 
        $(".mini-img").click(function (e) { 
            controller.setCurrent($(this).attr("data-i"));
        });

        $("#img").click(function (e) { 
            controller.increment();
        });
    }
}

controller.init();