use bookstore;
// Вмъкване на книги
db.books.insertMany([
  {
    title: "Clean Code",
    genre: "Programming",
    price: 35.50,
    author_id: ObjectId("000000000000000000000001"),
    tags: ["coding", "best-practices"],
    details: { pages: 464, language: "English" }
  },
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    price: 40.00,
    author_id: ObjectId("000000000000000000000002"),
    tags: ["development", "coding"],
    details: { pages: 352, language: "English" }
  },
  {
    title: "Clean Architecture",
    genre: "Software Engineering",
    price: 45.00,
    author_id: ObjectId("000000000000000000000001"),
    tags: ["architecture"],
    details: { pages: 432, language: "English" }
  },
  {
    title: "Refactoring",
    genre: "Programming",
    price: 38.99,
    author_id: ObjectId("000000000000000000000003"),
    tags: ["refactor", "clean-code"],
    details: { pages: 448, language: "English" }
  },
  {
    title: "You Don't Know JS",
    genre: "JavaScript",
    price: 30.00,
    author_id: ObjectId("000000000000000000000004"),
    tags: ["JavaScript", "coding"],
    details: { pages: 278, language: "English" }
  },
  {
    title: "Eloquent JavaScript",
    genre: "JavaScript",
    price: 33.50,
    author_id: ObjectId("000000000000000000000005"),
    tags: ["JavaScript"],
    details: { pages: 450, language: "English" }
  },
  {
    title: "Design Patterns",
    genre: "Software Engineering",
    price: 50.00,
    author_id: ObjectId("000000000000000000000006"),
    tags: ["patterns", "OOP"],
    details: { pages: 395, language: "English" }
  },
  {
    title: "The Mythical Man-Month",
    genre: "Project Management",
    price: 28.00,
    author_id: ObjectId("000000000000000000000007"),
    tags: ["management", "software"],
    details: { pages: 322, language: "English" }
  },
  {
    title: "Introduction to Algorithms",
    genre: "Computer Science",
    price: 60.00,
    author_id: ObjectId("000000000000000000000008"),
    tags: ["algorithms", "CS"],
    details: { pages: 1312, language: "English" }
  },
  {
    title: "Head First Design Patterns",
    genre: "Software Engineering",
    price: 42.00,
    author_id: ObjectId("000000000000000000000009"),
    tags: ["OOP", "patterns"],
    details: { pages: 694, language: "English" }
  }
]);

// Вмъкване на автори
db.authors.insertMany([
  { _id: ObjectId("000000000000000000000001"), name: "Robert C. Martin", birth_year: 1952, nationality: "American", genres: ["Programming"] },
  { _id: ObjectId("000000000000000000000002"), name: "Andrew Hunt", birth_year: 1964, nationality: "American", genres: ["Programming"] },
  { _id: ObjectId("000000000000000000000003"), name: "Martin Fowler", birth_year: 1963, nationality: "British", genres: ["Software Engineering"] },
  { _id: ObjectId("000000000000000000000004"), name: "Kyle Simpson", birth_year: 1975, nationality: "American", genres: ["JavaScript"] },
  { _id: ObjectId("000000000000000000000005"), name: "Marijn Haverbeke", birth_year: 1985, nationality: "Dutch", genres: ["JavaScript"] },
  { _id: ObjectId("000000000000000000000006"), name: "Erich Gamma", birth_year: 1961, nationality: "Swiss", genres: ["Software Engineering"] },
  { _id: ObjectId("000000000000000000000007"), name: "Frederick Brooks", birth_year: 1931, nationality: "American", genres: ["Management"] },
  { _id: ObjectId("000000000000000000000008"), name: "Thomas H. Cormen", birth_year: 1956, nationality: "American", genres: ["Computer Science"] },
  { _id: ObjectId("000000000000000000000009"), name: "Eric Freeman", birth_year: 1970, nationality: "American", genres: ["Software Engineering"] },
  { _id: ObjectId("000000000000000000000010"), name: "Steve McConnell", birth_year: 1962, nationality: "American", genres: ["Software Development"] }
]);

// Вмъкване на клиенти
db.customers.insertMany([
  { name: "Ivan Ivanov", email: "ivan@example.com", address: { city: "Sofia", street: "Tsarigradsko Shose 100" }, interests: ["Technology", "Fiction"] },
  { name: "Maria Petrova", email: "maria@example.com", address: { city: "Plovdiv", street: "Bunardzhika 23" }, interests: ["Romance", "Drama"] },
  { name: "Georgi Georgiev", email: "georgi@example.com", address: { city: "Varna", street: "Cherno More 5" }, interests: ["Science", "Horror"] },
  { name: "Petar Dimitrov", email: "petar@example.com", address: { city: "Burgas", street: "Lazur 8" }, interests: ["Fantasy", "Fiction"] },
  { name: "Elena Kostova", email: "elena@example.com", address: { city: "Ruse", street: "Tsar Osvoboditel 16" }, interests: ["History", "Biography"] },
  { name: "Nikolay Stoyanov", email: "nikolay@example.com", address: { city: "Stara Zagora", street: "Zheleznik 44" }, interests: ["Programming", "Poetry"] },
  { name: "Desislava Ivanova", email: "desi@example.com", address: { city: "Pleven", street: "Dimitar Blagoev 12" }, interests: ["Kids", "Fiction"] },
  { name: "Hristo Todorov", email: "hristo@example.com", address: { city: "Shumen", street: "Bulgaria Blvd 101" }, interests: ["Math", "Science"] },
  { name: "Kristina Koleva", email: "kristina@example.com", address: { city: "Dobrich", street: "Vasil Levski 32" }, interests: ["Philosophy", "Drama"] },
  { name: "Stefan Angelov", email: "stefan@example.com", address: { city: "Blagoevgrad", street: "Aleko Konstantinov 7" }, interests: ["Adventure", "History"] }
]);

// Вмъкване на поръчки
db.orders.insertMany([
  {
    customer_id: ObjectId("000000000000000000000001"),
    books: [{ book_id: ObjectId("000000000000000000000101"), quantity: 1 }],
    order_date: new Date("2025-06-01"),
    status: "shipped"
  },
  {
    customer_id: ObjectId("000000000000000000000002"),
    books: [{ book_id: ObjectId("000000000000000000000102"), quantity: 2 }],
    order_date: new Date("2025-06-02"),
    status: "processing"
  },
  {
    customer_id: ObjectId("000000000000000000000003"),
    books: [{ book_id: ObjectId("000000000000000000000103"), quantity: 1 }],
    order_date: new Date("2025-06-03"),
    status: "shipped"
  },
  {
    customer_id: ObjectId("000000000000000000000004"),
    books: [{ book_id: ObjectId("000000000000000000000104"), quantity: 3 }],
    order_date: new Date("2025-06-04"),
    status: "processing"
  },
  {
    customer_id: ObjectId("000000000000000000000005"),
    books: [{ book_id: ObjectId("000000000000000000000105"), quantity: 1 }],
    order_date: new Date("2025-06-05"),
    status: "shipped"
  },
  {
    customer_id: ObjectId("000000000000000000000006"),
    books: [{ book_id: ObjectId("000000000000000000000106"), quantity: 2 }],
    order_date: new Date("2025-06-06"),
    status: "processing"
  },
  {
    customer_id: ObjectId("000000000000000000000007"),
    books: [{ book_id: ObjectId("000000000000000000000107"), quantity: 1 }],
    order_date: new Date("2025-06-07"),
    status: "shipped"
  },
  {
    customer_id: ObjectId("000000000000000000000008"),
    books: [{ book_id: ObjectId("000000000000000000000108"), quantity: 3 }],
    order_date: new Date("2025-06-08"),
    status: "processing"
  },
  {
    customer_id: ObjectId("000000000000000000000009"),
    books: [{ book_id: ObjectId("000000000000000000000109"), quantity: 1 }],
    order_date: new Date("2025-06-09"),
    status: "shipped"
  },
  {
    customer_id: ObjectId("000000000000000000000010"),
    books: [{ book_id: ObjectId("000000000000000000000110"), quantity: 2 }],
    order_date: new Date("2025-06-10"),
    status: "processing"
  }
]);
// Вмъкване на ревюта
db.reviews.insertMany([
  {
    book_id: ObjectId("000000000000000000000101"),
    customer_id: ObjectId("000000000000000000000001"),
    rating: 5,
    comment: "Прекрасна книга!",
    review_date: new Date("2025-06-02")
  },
  {
    book_id: ObjectId("000000000000000000000102"),
    customer_id: ObjectId("000000000000000000000002"),
    rating: 4,
    comment: "Полезно четиво.",
    review_date: new Date("2025-06-03")
  },
  {
    book_id: ObjectId("000000000000000000000103"),
    customer_id: ObjectId("000000000000000000000003"),
    rating: 5,
    comment: "Изключително добре структурирана.",
    review_date: new Date("2025-06-04")
  },
  {
    book_id: ObjectId("000000000000000000000104"),
    customer_id: ObjectId("000000000000000000000004"),
    rating: 3,
    comment: "Очаквах повече примери.",
    review_date: new Date("2025-06-05")
  },
  {
    book_id: ObjectId("000000000000000000000105"),
    customer_id: ObjectId("000000000000000000000005"),
    rating: 4,
    comment: "Добре написана и информативна.",
    review_date: new Date("2025-06-06")
  },
  {
    book_id: ObjectId("000000000000000000000106"),
    customer_id: ObjectId("000000000000000000000006"),
    rating: 2,
    comment: "Не е по вкуса ми.",
    review_date: new Date("2025-06-07")
  },
  {
    book_id: ObjectId("000000000000000000000107"),
    customer_id: ObjectId("000000000000000000000007"),
    rating: 5,
    comment: "Шедьовър!",
    review_date: new Date("2025-06-08")
  },
  {
    book_id: ObjectId("000000000000000000000108"),
    customer_id: ObjectId("000000000000000000000008"),
    rating: 4,
    comment: "Добро въведение в темата.",
    review_date: new Date("2025-06-09")
  },
  {
    book_id: ObjectId("000000000000000000000109"),
    customer_id: ObjectId("000000000000000000000009"),
    rating: 3,
    comment: "Средна работа.",
    review_date: new Date("2025-06-10")
  },
  {
    book_id: ObjectId("000000000000000000000110"),
    customer_id: ObjectId("000000000000000000000010"),
    rating: 5,
    comment: "Любимата ми книга досега.",
    review_date: new Date("2025-06-11")
  }
]);

