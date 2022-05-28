

export const buttons = () => {
    let exercises = ['squat', 'bench', 'deadlift']
    for (let i=0; i< exercises.length; i++) {
        let button = document.getElementById(exercises[i])

        button.addEventListener("click", () => {
            //problem here
            
        })
    }
}