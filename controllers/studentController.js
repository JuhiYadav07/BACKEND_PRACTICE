const studentService = require('../services/studentService');
const { success, error } = require('../utils/response');

async function getAllStudents(req, res) {
  try {
    const students = await studentService.getAllStudents();
    success(res, students);
  } catch (err) {
    error(res, err);
  }
}

async function createStudent(req, res) {
  try {
    await studentService.createStudent(req.body);
    success(res, { message: 'Student added successfully!' }, 201);
  } catch (err) {
    error(res, err);
  }
}

async function updateStudent(req, res) {
  try {
    await studentService.updateStudent(req.params.id, req.body);
    success(res, { message: 'Student updated successfully!' });
  } catch (err) {
    error(res, err);
  }
}

async function deleteStudent(req, res) {
  try {
    await studentService.deleteStudent(req.params.id);
    success(res, { message: 'Student deleted successfully!' });
  } catch (err) {
    error(res, err);
  }
}

module.exports = { getAllStudents, createStudent, updateStudent, deleteStudent };
