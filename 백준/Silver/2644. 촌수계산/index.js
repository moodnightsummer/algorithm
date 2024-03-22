function test() {
  console.log(this.a);
}

var obj = {
  a: 20,
  func1: test,
  func2: function () {
    console.log(this.a);
  },
};

obj.func1(); // 20
obj.func2(); // 20
