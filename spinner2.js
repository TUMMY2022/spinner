process.stdout.write('hello from spinner1.js... \rheyyy\n');
let delayInMs = 100;
let characters = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r|   "];
for (let item of characters) {
  setTimeout(() => {
    process.stdout.write(item);
  }, delayInMs);
  delayInMs += 200;
}

