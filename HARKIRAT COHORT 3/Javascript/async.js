// // //console.log("First");
// // //console.log("Second");
// // //console.log("Third");

// // console.log("First");

// // setTimeout(() => {
// //   console.log("Second");
// // }, 2000);

// // // console.log("Third");
// // async function getUserData() {
// //   try {
// //     console.log("I entered")
// //     const userResponse = await fetch(
// //       "https://jsonplaceholder.typicode.com/users/1",
// //     );

// //     const user = await userResponse.json();

// //     console.log("User:", user.name);

// //     const post = await fetch(
// //       "https://jsonplaceholder.typicode.com/posts?userId=${user.id}`",
// //     );

// //     console.log(post.json())

// //     const post2 = await fetch(
// //       "https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}",
// //     );
// //     console.log(post2.json())
// //     // // Callback Hell starts here
// //     // setTimeout(() => {
// //     //   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
// //     //     .then((response) => response.json())
// //     //     .then((posts) => {
// //     //       console.log("Posts:", posts);

// //     //       setTimeout(() => {
// //     //         fetch(
// //     //           `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`,
// //     //         )
// //     //           .then((response) => response.json())
// //     //           .then((comments) => {
// //     //             console.log("Comments:", comments);
// //     //           })
// //     //           .catch((error) => console.log(error));
// //     //       }, 1000);
// //     //     })
// //     //     .catch((error) => console.log(error));
// //     // }, 1000);

// //     // Callback Hell ends here
// //   } catch (error) {
// //     console.log("Error:", error);
// //   }
// // }

// // getUserData();

// async function getUserData() {
//   try {
//     console.log("I entered");

//     // Step 1: Fetch user data
//     const userResponse = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1",
//     );

//     if (!userResponse.ok) {
//       throw new Error("Failed to fetch user");
//     }

//     const user = await userResponse.json();

//     console.log("User:", user.name);

//     // Step 2: Fetch posts belonging to the user
//     const postResponse = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
//     );

//     if (!postResponse.ok) {
//       throw new Error("Failed to fetch posts");
//     }

//     const posts = await postResponse.json();

//     console.log("Posts:", posts);

//     // Step 3: Fetch comments for the first post
//     if (posts.length > 0) {
//       const commentResponse = await fetch(
//         `https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`,
//       );

//       if (!commentResponse.ok) {
//         throw new Error("Failed to fetch comments");
//       }

//       const comments = await commentResponse.json();

//       console.log("Comments:", comments);
//     } else {
//       console.log("No posts found");
//     }
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// getUserData();

function greet(name) {
  console.log("Hello, " + name);
}

function processUser(callback) {
  callback("Prathamesh");
}

processUser(greet);

function processUser(callback) {
  console.log("Processing user...");

  callback();
}

function showSuccess() {
  console.log("User processed successfully!");
}

function showMessage() {
  console.log("Welcome to our application!");
}

processUser(showSuccess);
processUser(showMessage);

function calculate(a, b, callback) {
  const result = a + b;
  callback(result);
  console.log(result);
}
calculate(10, 20, function (answer) {
  console.log("Result:", answer);
});

async function hello() {
  console.log("Start");

  const timer = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Timer completed!");
      resolve();
    }, 5000);
  });

  // These operations run while the timer is counting down
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }

  console.log("Remaining operations completed");

  // Wait only at the end
  await timer;

  console.log("The End");
}

hello();

const promise = new Promise((resolve, reject) => {
  reject();
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((errr) => {
    console.log("something is wrong");
  })
  .finally(() => {
    console.log("function done");
  });


  Promise.resolve(10)
    .then((number) => {
      console.log(number);
      return number * 2;
    })
    .then((result) => {
      console.log(result);
      return result + 5;
    })
    .then((finalResult) => {
      console.log(finalResult);
    })
    .catch((error) => {
      console.log("Error:", error);
    })
    .finally(() => {
      console.log();
    });

    
Promise.reject(err)
  .then((res) => {
    console.log(res);
    return res * 2;
  })
  .then((res1) => {
    console.log(res1);
    return res1 + 100;
  })
  .then((res2) => {
    console.log(res2);
  })
  .catch((err) => {
    console.log("Here is teh error :", err);
  });