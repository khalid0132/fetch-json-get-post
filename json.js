const submitButton = document.getElementById("submit_button");
submitButton.addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const posting = document.getElementById("posting").value;
  // console.log(title, posting);
  const postSomething = {
    title: title,
    body: posting,
    userId: 132,
  };
  nowPostToServer(postSomething);
});

function nowPostToServer(postInfo) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(postInfo),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data)); // main name json chilo instead dada
}




// Get by default

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   //   .then((json) => displayUsers(json));
//   .then((json) => usersEmail(json))
//   .catch((error) => console.log(error));

function usersEmail(email) {
  const personEmail = email.map((m) => m.email);
  //   console.log(personEmail);
  const mail = document.getElementById("email_container");
  for (let i = 0; i < personEmail.length; i++) {
    const element = personEmail[i];
    const emailList = document.createElement("li");
    emailList.innerText = element;
    console.log(emailList.innerText);
    // mail.appendChild(emailList);
  }
}

// function displayUsers(username) {
//   const userNames = username.map((user) => user.username);
//   //   console.log(userNames);
//   const ul = document.getElementById("users_container");
//   for (let i = 0; i < userNames.length; i++) {
//     const element = userNames[i];
//     const li = document.createElement("li");
//     li.innerText = element;
//     // console.log(li);
//     ul.appendChild(li);
//   }
// }

// const user = {
//     id: 132,
//     name: 'khalid',
//     friendsName: ['Kazi', 'Nannu', 'zaman', 'Mamun'],
//     friendsAge: [26, 28, 32, 35, 33],
//     bestFriendsName: {
//         name: "Zaman",
//         favFood: 'pizza',
//         favColor: 'blue',
//     },
// };
// //{"id":132,"name":"khalid"} CONVERTED TO JSON from JS Object
// // used .stringify
// const userJSON = JSON.stringify(user);
// console.log(userJSON);

// // converted into JS object from JSON // used .parse
// const userFromJSON = JSON.parse(userJSON);
// console.log(userFromJSON);
