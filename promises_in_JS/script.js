// const promiseOne = new Promise((resolve, reject) => {
//   // Do an asyn task
//   // DB call , cryptography , network
//   setTimeout(function () {
//     resolve();
//     console.log("Asyn task is completed");
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2 is completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Uzair", email: "rehmanuzair43@gmail.com", age: 23 });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Uzair", email: "abc@gmail.com" });
//     } else {
//       reject("ERROR Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((userName) => {
//     console.log(userName);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("Promises is either resolved or rejected");
//   });

/*
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    !error
      ? resolve({ username: "Javascript", password: "123" })
      : reject("ERROR: js went wrong");
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
getAllUsers();
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
