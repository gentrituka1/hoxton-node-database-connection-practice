import Database from 'better-sqlite3';

const db = new Database('db/setup.db', { verbose: console.log })

const createTeachersTable = db.prepare(`
    CREATE TABLE IF NOT EXISTS teachers (
        id INTEGER,
        name TEXT,
        age INTEGER,
        subject TEXT,
        Primary Key (id)
    );
`)

createTeachersTable.run()

const createTeacher = db.prepare(`
    INSERT INTO teachers (name, age, subject) VALUES ('Ergi', 19, 'Computer Science');
`)

createTeacher.run()


const createStudentsTable = db.prepare(`
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER,
        name TEXT,
        age INTEGER,
        given_subject TEXT,
        Primary Key (id)
    );
`)

createStudentsTable.run()

const createStudent = db.prepare(`
    INSERT INTO students (name, age, given_subject) VALUES ('Gentrit', 22, 'Math');
`)

createStudent.run()

