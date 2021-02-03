document.getElementById("send_button").addEventListener("click", function () {
  const title1 = document.getElementById("title1").value;
  const body = document.getElementById("body").value;
  //   console.log(title1, body);

  const showALL = {
    title: title1,
    body: body,
    id: 12345,
    userId: 9876543,
  };
  postToServer(showALL);
});

function postToServer(postNow) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postNow),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => displayCustomers(json));

// function displayCustomers(x) {
//   const customers = x.map((u) => u.username); // u.email = kommer alla epost
//   //   console.log(customers);
//   const ul = document.getElementById("users_container");
//   for (let i = 0; i < customers.length; i++) {
//     const element = customers[i];
//     const li = document.createElement("li");
//     li.innerText = element;
//     ul.appendChild(li);
//   }
// }

// document.getElementById("title1");
