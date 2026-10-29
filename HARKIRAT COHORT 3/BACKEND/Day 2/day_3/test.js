const userid = "101";

for (let i = 1; i <= 60; i++) {
  const response = await fetch("http://localhost:3000/", {
    headers: {
      userid: userid,
    },
  });

  const data = await response.json();

  console.log(`Request ${i}:`, response.status, data);
}
