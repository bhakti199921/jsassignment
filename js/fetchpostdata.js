const URL="https://jsonplaceholder.typicode.com/posts";
fetch(URL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
var mainContainer = document.getElementById("myData");
for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'title: ' + data[i].title + '<br>body: ' + data[i].body+'<hr>';
    mainContainer.appendChild(div);
}
}

//click event function
function myFunction() {
    var x = document.getElementById("myData");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }