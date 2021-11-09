const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./study_bot.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to Study Bot\'s database.');
});

db.serialize(() => {
    db.run('CREATE TABLE sessions(user title time date)')
})

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});