class Bench {
    $current_image_number = null

    bench_picture_sources = [
        "./assets/bench_pics/00001.png",
        "./assets/bench_pics/00002.png",
        "./assets/bench_pics/00003.png",
        "./assets/bench_pics/00004.png",
        "./assets/bench_pics/00005.png",
        "./assets/bench_pics/00006.png",
        "./assets/bench_pics/00007.png"
    ]

    bench_recommendation = [
        "Step 1/7: Arch your back and take a deep breath in.",
        "Step 2/7: Descend slowly. Heavy weights can descend quicker than you think.",
        "Step 3/7: On the way down, the bar moves SLIGHTLY closer to the feet.",
        "Step 4/7: Use the force of your feet to send energy along your body to push.",
        "Step 5/7: Push hard with chest and triceps while still following the arched path.",
        "Step 6/7: Once at this position, the lift is much easier. Finish the movement.",
        "Step 7/7: Locking out your elbows concludes your bench!",
    ]

    recommendation($exercise_number) {
        return this.bench_recommendation[$exercise_number]
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
        img.src = this.bench_picture_sources[number]
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

module.exports = Bench