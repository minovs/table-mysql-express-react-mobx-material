import ClassModel from '../models/class.model'
import StudentModel from '../models/student.model'

export class ContentService {
  async getAll() {
    return Promise.all([ClassModel.getClasses(), StudentModel.getStudents()]).then((val) => {
      return val
    })
  }
}
