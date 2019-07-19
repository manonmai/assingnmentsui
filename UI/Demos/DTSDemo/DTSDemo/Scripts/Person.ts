

    class Person {
        private _age: number;
        private _name: string;
      
        constructor(name?: string, age?: number) {
            this._age = age;
            this._name = name;

        }
       set age(value: number) {
            this._age = value;
        }
        set name(value: string) {
            this._name = value;
       }
        get age() : number {
            return this._age;
        }
        get name(): string {
            return this._name;
        }
        getPersonInformation(): string {
            return "Name : " + this._name + " Age: " + this._name;
        }
    }


