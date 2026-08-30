const studentModel = require('../models/studentModel');

// This is where request-independent rules live: validation,
// checks, and anything beyond a plain pass-through to the model.

async function getAllStudents() {
  return studentModel.findAll();
}

async function createStudent({ name, email, age }) {
  if (!name || !email) {
    throw { status: 400, message: 'Name and email are required' };
  }
  return studentModel.create({ name, email, age });
}

async function updateStudent(id, { name, email, age }) {
  if (!name || !email) {
    throw { status: 400, message: 'Name and email are required' };
  }
  return studentModel.update(id, { name, email, age });
}

async function deleteStudent(id) {
  return studentModel.remove(id);
}

module.exports = { getAllStudents, createStudent, updateStudent, deleteStudent };
