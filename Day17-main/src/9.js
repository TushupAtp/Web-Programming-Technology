let obj = {
  name: "day17",
  version: "1.0.0",
  description: "",
  main: "index.js",
  type: "module",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
  },
  author: "",
  license: "ISC",
  dependencies: {
    bootstrap: "^5.1.3",
    moment: "^2.29.1",
  },
};

let { main, type } = obj;
console.log(main, type);
