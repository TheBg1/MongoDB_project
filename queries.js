// 1. Извличане на всички книги
db.books.find();

// 2. Филтриране на книги по жанр
db.books.find({ genre: "Programming" });

// 3. Филтриране по няколко полета
db.books.find({ genre: "Programming", price: { $lt: 40 } });

// 4. Актуализиране на книга
db.books.updateOne({ title: "Clean Code" }, { $set: { price: 38.99 } });

// 5. Изтриване на книга
db.books.deleteOne({ title: "Old Book" });

// 6. Групиране на книги по жанр
db.books.aggregate([
  { $group: { _id: "$genre", count: { $sum: 1 } } }
]);

// 7. Средна оценка на книга
db.reviews.aggregate([
  { $group: { _id: "$book_id", avgRating: { $avg: "$rating" } } }
]);

// 8. Сортиране на поръчки по дата
db.orders.aggregate([
  { $match: { status: "shipped" } },
  { $sort: { order_date: -1 } }
]);

// 9. Групиране на автори по националност
db.authors.aggregate([
  { $group: { _id: "$nationality", total: { $sum: 1 } } }
]);

// 10. Общи разходи на клиент
db.orders.aggregate([
  { $unwind: "$books" },
  {
    $lookup: {
      from: "books",
      localField: "books.book_id",
      foreignField: "_id",
      as: "book_info"
    }
  },
  { $unwind: "$book_info" },
  {
    $group: {
      _id: "$customer_id",
      totalSpent: {
        $sum: { $multiply: ["$books.quantity", "$book_info.price"] }
      }
    }
  }
]);
