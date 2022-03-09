showtask();
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click", function () {
    addtaskinputval = addtaskinput.value;
    if (addtaskinputval.trim() != 0) {
        let webtask = localStorage.getItem("localtask");//localStorage API is a simple syntax for storing and retrieving data in the browser
        if (webtask == null) {
            taskObj = [];
        } else {
            taskObj = JSON.parse(webtask); //JSON is a format for storing and transporting data.
            //->Parses a JSON string and returns a JavaScript object

        }

        taskObj.push(addtaskinputval);
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        //Convert a JavaScript object into a string with JSON.stringify().

    }

    showtask();
});

function showtask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskObj = [];
    } else {
        taskObj = JSON.parse(webtask); //json.parse-to convert string into object.
    }
    let html = '';
    let addedtasklist = document.getElementById("tbody");
    taskObj.forEach((item, index) => {
        html += `
    <tr id="taskrow">
    <td id="srno">${index+1}</td>
    <td>${item}</td>
    <td id="editbtn">
    <button type="button" class="edit" onclick="edittask(${index})">Edit</button>
    <button type="button" class="delete" onclick="deleteitem(${index})">Delete</button>
    </td>
    </tr>`;
    });
    addedtasklist.innerHTML = html;

}

function edittask(index) {

    let saveindex = document.getElementById("saveindex");

    let addtaskbtn = document.getElementById("addtaskbtn");
    let savetaskbtn = document.getElementById("savetaskbtn");
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    addtaskinput.value = taskObj[index];
    addtaskbtn.style.display = "none";
    savetaskbtn.style.display = "block";

}
//save task
let savetaskbtn = document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click", function () {
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex] = addtaskinput.value;
    savetaskbtn.style.display = "none";
    addtaskbtn.style.display = "block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addtaskinput.value = '';
    showtask();
});

//delete

function deleteitem(index) {
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
    //convert text into js object.
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();

}