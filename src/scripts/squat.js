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
        "Step 1: Take a deep breath in and make your back and abdominals rigid.",
        "Step 2: Push hips back and have knees bend as a response, not the other way around.",
        "Step 3: While still keeping back straight, descend slowly into the bottom position.",
        "Step 4: When at bottom, accelerate quickly upward. More speed = more power.",
        "Step 5: A common mistake is not focusing on pushing hips forward. This is key.",
        "Step 6: Keep driving. If you got here, you can definitely finish the motion.",
        "Step 7: Standing up straight concludes your squat!",
    ]

    recommendation($exercise_number) {
        return this.squat_recommendation[$exercise_number]
    }

    constructor(textbox) {

        const canvasEl = document.getElementById("canvas");
        canvasEl.width = 400;
        canvasEl.height = 600;
        const ctx = canvasEl.getContext("2d");
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