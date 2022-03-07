let fetchuser = document.getElementById("fetchuser");

fetchuser.addEventListener("click",(e) =>{
    userData();
});

function userData(){
  const URL="https://jsonplaceholder.typicode.com/users";

  fetch (URL)
  .then((response) => response.json())

  .then((data) => {
      let html="";
      data.forEach(element => {
          let data=document.getElementById("tbody");
          html +=` <tr>
                  <th>${element.id}</th>
                  <td>${element.name}</td>
                  <td>${element.email}</td>
                  <td>${element.phone}</td>
                  <td>${element.website}</td>
                </tr>`;
                data.innerHTML=html;
      });
  });
}
 
 
 
