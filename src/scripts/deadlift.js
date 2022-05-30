class Deadlift {

    deadlift_picture_sources = [
        "../src/images/deadlift_pics/00001.png",
        "../src/images/deadlift_pics/00002.png",
        "../src/images/deadlift_pics/00003.png",
        "../src/images/deadlift_pics/00004.png",
        "../src/images/deadlift_pics/00005.png",
        "../src/images/deadlift_pics/00006.png",
        "../src/images/deadlift_pics/00007.png"
    ]

    constructor() {

        const canvasEl = document.getElementById("canvas");
        canvasEl.width = 400;
        canvasEl.height = 600;
        const ctx = canvasEl.getContext("2d");
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 400, 600);

        let img = new Image();
        img.src = this.deadlift_picture_sources[0]
        img.onload = function () {
            ctx.drawImage(img, 0, 0)
        }

        let container = document.querySelector('.our_container')

        let buttonSubmit = document.getElementsByClassName("change")
        const element1 = document.getElementById("next");
        if (element1) {
            element1.remove();
        }
        const element2 = document.getElementById("back");
        if (element2) {
            element2.remove();
        }


        var x = document.createElement("BUTTON");
        x.setAttribute("id", "back")
        var t = document.createTextNode("Back");
        x.appendChild(t);
        document.body.appendChild(x);
        container.appendChild(x)

        var y = document.createElement("BUTTON");
        // y.classList.add("change");
        y.setAttribute("id", "next")
        var u = document.createTextNode("Next");
        y.appendChild(u);
        document.body.appendChild(y);
        container.appendChild(y)
    }

    nextPicture() {
        const element2 = document.getElementById("back");
    }
}

module.exports = Deadlift