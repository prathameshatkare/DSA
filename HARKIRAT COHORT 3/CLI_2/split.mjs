import fs from "fs"
import {Command} from "commander"
const program = new Command();

program
  .name("counter")
  .description("CLI to do file based tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Count the number of lines in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const datamydata = data.replace(/\s/g, "");
        const lines = datamydata.length;
        console.log(`There are ${lines} words in ${file}`);
      }
    });
  });

program.parse();
