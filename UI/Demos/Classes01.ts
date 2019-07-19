class Foo {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        return "Hello, " + this.name;
    }
}

var fooObj = new Foo("Karthik");
fooObj.greet();