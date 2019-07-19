class Foo {
    private _name: string;
    get name():string{
		return this._name;
	}
	set name(name){
		this._name=name;
	}
}

var fooObj = new Foo();
fooObj.name = "Karthik";
fooObj.name;