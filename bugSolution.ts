function printName(person: {firstName: string, lastName?: string}): void {
  if (person.firstName) {
    console.log(person.firstName + " " + person.lastName);
  } else {
    console.error("firstName property is missing.");
  }
}

printName({firstName: "John"}); // This will print "John "
printName({firstName: "Jane", lastName: "Doe"}); // This will print "Jane Doe"
printName({}); //This will print "firstName property is missing." 