class Squat {
    $current_image_number = null

    squat_picture_sources = [
        "./assets/squat_pics/00001.png",
        "./assets/squat_pics/00002.png",
        "./assets/squat_pics/00003.png",
        "./assets/squat_pics/00004.png",
        "./assets/squat_pics/00005.png",
        "./assets/squat_pics/00006.png",
        "./assets/squat_pics/00007.png"
    ]

    squat_recommendation = [
        "squatting part 1",
        "squatting part 2",
        "squatting part 3",
        "squatting part 4",
        "squatting part 5",
        "squatting part 6",
        "squatting part 7",
    ]

    recommendation($exercise_number) {
        return this.squat_recommendation[$exercise_number]
    }

    constructor(textbox) {

        const canvasEl = document.getElementById("canvas");
        canvasEl.width = 400;
        canvasEl.height = 600;
        const ctx = canvasEl.getContext("2d");
        // ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, 350, 600);
        this.$current_image_number = 0
        textbox = this.squat_recommendation[0]
        console.log(textbox)
        this.renderCurrentImage(ctx, this.$current_image_number)
        this.ctx = ctx
    }

    renderCurrentImage(ctx, number) {
        let img = new Image();
        img.src = this.squat_picture_sources[number]
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        }

        //draw circle here
        // ctx.beginPath();
        // ctx.fillStyle = "red";
        // ctx.arc(100, 100, 40, 0, 2* Math.PI)
        // ctx.closePath();

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

    nextImage() {
        this.$current_image_number = this.$current_image_number + 1
        this.renderCurrentImage(this.ctx, ((this.$current_image_number) % 7))
        return this.$current_image_number % 7
    }

    lastImage() {
        if (this.$current_image_number === 0) {
            this.$current_image_number === 6
        } else {
            this.$current_image_number = this.$current_image_number - 1
        }
        this.renderCurrentImage(this.ctx, ((this.$current_image_number) % 7))
        return this.$current_image_number % 7
    }
}

module.exports = Squat