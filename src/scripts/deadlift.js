class Deadlift {

    constructor(ctx) {
        let img = new Image();
        img.src = "../src/images/deadlift_pics/00001.png"
        img.onload = function () {
            ctx.drawImage(img, 0, 0)
        }

        let buttonSubmit = document.querySelector(".change")
        if (buttonSubmit) {
            CredentialsContainer.removeChild(buttonSubmit)
        }

        var x = document.createElement("BUTTON");
        var t = document.createTextNode("Back");
        x.appendChild(t);
        x.classList.add("change");
        document.body.appendChild(x);
        var y = document.createElement("BUTTON");
        y.classList.add("change");
        var u = document.createTextNode("Next");
        y.appendChild(u);
        document.body.appendChild(y);
    }
}

module.exports = Deadlift