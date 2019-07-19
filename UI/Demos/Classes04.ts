class Foo {
    static staticVariable:string;
	instanceVariable:string
	constructor(instanceVariable:string){
		this.instanceVariable = instanceVariable;
	}
	static staticMethod(){
		return Foo.staticVariable;
	}
}

var fooObj = new Foo("Instance");
console.log(fooObj.instanceVariable);
Foo.staticVariable = "Static"
Foo.staticMethod();