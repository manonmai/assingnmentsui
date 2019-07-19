var Person = (function () {
    function Person(name, age) {
        this._age = age;
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.getPersonInformation = function () {
        return "Name : " + this._name + " Age: " + this._name;
    };
    return Person;
})();
