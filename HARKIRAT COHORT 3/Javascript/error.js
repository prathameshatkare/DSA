console.log("program started");

let data = `{
    "age": 20,
    "name": "AP"
}`;

try {
  let user = JSON.parse(data);

  if (!user.name) {
    throw new SyntaxError("incomplete data");
  }

  console.log(user.name);
} catch (error) {
  console.log("The Error is :", error.name);
} finally {
  console.log("it will always run");
}
