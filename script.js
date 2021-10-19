

let task = []
//note we have to render this array in html using dom

var taskContainer = document.getElementsByClassName("taskContainer")[0]




function addTask() {
    var curr = document.getElementById("taskf").value
    task.push(curr)

    taskContainer.innerHTML = task.reduce((inner, current, idx) => {
        console.log(idx)
        return inner + `<div class="task" id="task${idx}">
                   <span class="taskdes">${current}</span><button id="deletebtn${idx} style="background-color:#f64651">Delete</button>
                </div>
                `
    }, ``)
    task.forEach((currTask, idx) => {
        document.getElementById(`deletebtn${idx}`).addEventListener('click', () => {
            document.getElementById(`task${idx}`).remove()
            task = task.filter((ele) => {
                return ele !== currTask;
            })
        })


    })


}
document.getElementById("add").addEventListener('click', addTask);




