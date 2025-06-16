# Онлайн книжарница - MongoDB проект

## Описание

Този проект представлява база данни за управление на онлайн книжарница. Тя съхранява информация за книги, автори, клиенти, поръчки и ревюта. Базата данни поддържа основни CRUD операции и използва агрегиране за събиране на статистики.

## Колекции и структура

1. **books**
   - `title` (String)
   - `genre` (String)
   - `price` (Number)
   - `author_id` (ObjectId)
   - `tags` (Array of String)
   - `details` (Object: pages, language)

2. **authors**
   - `name` (String)
   - `birth_year` (Number)
   - `nationality` (String)
   - `genres` (Array of String)

3. **customers**
   - `name` (String)
   - `email` (String)
   - `address` (Object: city, street)
   - `interests` (Array of String)

4. **orders**
   - `customer_id` (ObjectId)
   - `books` (Array of Object: book_id, quantity)
   - `order_date` (Date)
   - `status` (String)

5. **reviews**
   - `book_id` (ObjectId)
   - `customer_id` (ObjectId)
   - `rating` (Number)
   - `comment` (String)
   - `review_date` (Date)

## Инсталация

1. Клонирайте хранилището:
   ```bash
   git clone https://github.com/TheBG1/MongoDB_project.git
   cd MongoDB_project
   ```

2. Стартирайте MongoDB сървъра (ако не работи).

3. Изпълнете insert.js:
   ```bash
   node insert.js
   ```

4. Изпълнете queries.js, за да видите примерни заявки:
   ```bash
   node queries.js
   ```
