const thisHasError = () => {
  throw new Error("Crash!");
};

try {
  console.log("Start process...");
  thisHasError();
  console.log("End process...");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
} finally {
  console.log("Finally");
}
