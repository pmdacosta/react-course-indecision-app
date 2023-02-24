console.log(`loaded utils`);

export const wait = (ms) => {
  return new Promise(res => setTimeout(res, ms));
}

// const subtract = (a, b) => a - b;
// export default subtract;

export default (a, b) => a - b;

// export { wait, subtract as default };