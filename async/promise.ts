const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I'm done!");
  }, 3000);
});

async function task() {
  console.log(await p);
}

task();
