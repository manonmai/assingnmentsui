/*
class Test{
  private _name = "Karthik";
  printName() {
    setTimeout((function () {
      //this refers window Object not the Test Object
      alert(this._name);
    }),1000);
  }
}

var testObj: Test = new Test();
testObj.printName();
*/



class Test{
  private _name = "Shilpa";
  printName() {
    setTimeout(() => {
      alert(this._name);
    },3000);
  }
}

var testObj: Test = new Test();
testObj.printName();