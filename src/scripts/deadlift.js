class Deadlift {
    $current_image_number = null

    deadlift_picture_sources = [
        "./assets/deadlift_pics/00001.png",
        "./assets/deadlift_pics/00002.png",
        "./assets/deadlift_pics/00003.png",
        "./assets/deadlift_pics/00004.png",
        "./assets/deadlift_pics/00005.png",
        "./assets/deadlift_pics/00006.png",
        "./assets/deadlift_pics/00007.png"
    ]

    deadlift_recommendation = [
        "Step 1/7: First take a deep breath in and contract your lats.",
        "Step 2/7: Push off the ground very hard. Good blastoff is necessary.",
        "Step 3/7: Instead of thinking about pulling the weight up, push the ground down.",
        "Step 4/7: Keep following a straight upward bar path.",
        "Step 5/7: Push your hips in!",
        "Step 6/7: The upper back is especially important for the lockout.",
        "Step 7/7: Standing up while holding the bar concludes your deadlift!",
    ]

    recommendation($exercise_number) {
        return this.deadlift_recommendation[$exercise_number]
    }

    constructor() {

        const canvasEl = document.getElementById("canvas");
        canvasEl.width = 400;
        canvasEl.height = 600;
        const ctx = canvasEl.getContext("2d");
        ctx.fillRect(0, 0, 350, 600);
        this.$current_image_number = 0
        this.renderCurrentImage(ctx, this.$current_image_number)
        this.ctx = ctx
    }

    renderCurrentImage(ctx, number) {

        let img = new Image();
        img.src = this.deadlift_picture_sources[number]
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

module.exports = Deadlift