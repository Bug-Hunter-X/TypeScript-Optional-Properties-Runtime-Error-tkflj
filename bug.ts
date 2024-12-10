function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + " " + person.lastName);
}

printName({firstName: "John"}); // This will compile and run without error
printName({firstName: "Jane", lastName: "Doe"}); // This will also compile and run without error
printName({}); //This will throw an error because the required field firstName is missing