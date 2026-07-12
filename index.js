const mysql = require('mysql2');

const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Juhiyadav@20013',
    database: 'juhi_db'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('MySQL database is connected');
});









const express = require ('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, progress ho rhi h juhi');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/students', (req, res) => {
 db.query('SELECT * FROM students', (err, results) => {
    if (err) {
        console.error(err);
        res.status(500).send('something went wrong');
        return;
    }
    res.json(results);
});
});

app.post('/students', (req, res) => {
  const { name, email, age } = req.body;


  db.query('INSERT INTO students (name, email, age) VALUES (?, ?, ?)', [name, email, age], (err, results) => {if (err) {
      console.error(err);
      res.status(500).send('something went wrong');
      return;
  }
  res.send('Student added successfully!');
});
});

app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  db.query('UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?', [name, email, age, id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('something went wrong');
      return;
    }
    res.send('Student updated successfully!');
  });
});

app.delete('/students/:id', (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM students WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('something went wrong');
      return;
    }
    res.send('Student deleted successfully!');
  });
});

app.get('/books', (req, res) => {
  db.query('SELECT * FROM books', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('something went wrong');
      return;
    }
    res.json(results);
  });
});

app.post('/books', (req, res) => {
  const { title, author, price } = req.body;


  db.query('INSERT INTO books (title, author, price) VALUES (?, ?, ?)', [title, author, price], (err, results) => {if (err) {
      console.error(err);
      res.status(500).send('something went wrong');
      return;
  }
  res.send('book added successfully!');
});
});

app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author, price } = req.body;

  db.query('UPDATE books SET title = ?, author = ?, price = ? WHERE id = ?', [title, author, price,id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('something went wrong');
      return;
    }
    res.send('Book updated successfully!');
  });
});

app.delete('/books/:id', (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM books WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('something went wrong');
      return;
    }
    res.send('Book deleted successfully!');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
