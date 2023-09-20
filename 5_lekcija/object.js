const person = {
  name: "John",
  surname: "Doe",
  age: 29,
  currentJob: "programmer",
  married: false,
  hobbies: ["music", "skiing", "hiking"],
  experience: [
    {
      title: "Junior Developer",
      years: 2,
      salary: 30000,
    },
    {
      title: "Middle Developer",
      years: 3,
      salary: 50000,
    },
    {
      title: "Senior Developer",
      years: 7,
      salary: 80000,
    },
  ],
};

console.log(person);
console.log(person.name);
console.log(person["name"]);

console.log(person.experience[1].salary);
