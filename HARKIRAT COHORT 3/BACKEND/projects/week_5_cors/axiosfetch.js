function main() {
  fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    async (response) => {
      const res = await response.json();
      console.log(res);
    },
  );
}

async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/11");
  const data = await response.json();

  console.log(data);
}



//Axios way

const axios = require("axios");
async function main() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/11",
  );

  console.log(response.data);
}

main();
