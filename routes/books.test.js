process.env.NODE_ENV = “test”;
const request = require('supertest');
const app = require('./app');
//const bcrypt = require('bcrypt');
const db = require('../db');



beforeEach(async function() {
    const hashedPassword = await bcrypt.hash('secret', 1);
    await db.query(
        `INSERT INTO books (isbn, amazon-url, author, language, pages, publisher, title, year)
            VALUES ('1234567890123', 'http://test.com', 'test1', 'test language', 2, 'test publisher', 'test title', 2018)`,
        );
})