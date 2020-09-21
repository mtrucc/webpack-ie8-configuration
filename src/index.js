
// require("object-defineproperty-ie8")
// require('core-js/features/object/define-property')
class Hello {
  static world() {
    console.log("Hello, World!");
  }
}
Hello.world();
let a = (data) => {
  setTimeout(() => {
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);

    console.log(target);

    console.log(returnedTarget);

    console.log(data)
  }, 500);
};
a("haha")