class Person {
  name: string;
  age: number;
  cute: boolean;

  constructor(name: string, age: number, cute: boolean) {
    this.name = name;
    this.age = age;
    this.cute = cute;
  }
}

let meClass: Person = new Person("Peam", 18, true);

console.log(meClass);
