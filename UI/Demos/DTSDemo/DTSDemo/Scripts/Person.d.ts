

declare class Person {
    private _age;
    private _name;
    /**
    * Default constructor to create a person Instance
    */
    constructor();
    /**
    * constructor takes name and age for a person Instance
    * @param name string type used to assign the name for the person
    * @param age number type used to assign age for the person
    */
    constructor(name: string, age: number);
    /** 
     * get the age for person
       */
    age: number;
    /** 
      * get the name for person
      * 
      */
    name: string;
    /** 
      * get the person information
      * returns the name and age as string
      */
    getPersonInformation(): string;
}
