/*interface-1*/


interface FooInterface {
  id: number;
  name: string;
  employeeType?: string;
  test?(info:string):string;
}

function printFooInfo(employeeObj: FooInterface) {
  if(employeeObj.employeeType)
	console.log("%d %s %s",employeeObj.id,employeeObj.name,employeeObj.employeeType);
  else
	console.log("%d %s",employeeObj.id,employeeObj.name);
}

var obj = {
	id:714709,
	name:'Karthik',
	employeeType:'Permanent',
	test:function(str:string){
	return "";
	}
};
printFooInfo(obj);

/*interface-2*/

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;

/*class*/
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface  {
    currentTime: Date;
    constructor(h: number, m: number) { }
}