const p1 = {
  first_name: "Uditanshu",
  last_name: "Kumar",
  age: 25,
  email: "ping2udit@gmail.com",
  hobbies: ["programming", "cricket"],
  books: ["Merchant of Venice", "Invisible Man"],
  qualifications: {
    tenth: "CBSE",
    twelfth: "CBSE",
    graduation: "BS and B.Tech",
  },
};

const {
  education: { school = "St. Xavier's" } = {},
  first_name,
  last_name,
  age,
  email,
  hobbies,
  books,
  qualifications,
} = p1;
console.log(school);
console.log(first_name, last_name, age, email);
console.log(hobbies);
console.log(books);
console.log(qualifications);
