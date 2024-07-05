import sql from 'better-sqlite3'

export const db = sql('userLib.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS userLibrary (
        mediaId INTEGER PRIMARY KEY,
        userId TEXT,
        list TEXT CHECK(list IN ('Planning', 'Watching', 'Dropped', 'Paused')),
        FOREIGN KEY(userId) REFERENCES users(id)
    );
`)

db.exec(`
    CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY);
`)









// UPDATE userLibrary
// SET list = 'Dropped'
// WHERE mediaId = 123457;

// DELETE FROM userLibrary WHERE mediaId = 123457;

// SELECT * FROM userLibrary WHERE list = 'Planning';

// INSERT INTO userLibrary (mediaId, list) VALUES (123457, 'Paused');

