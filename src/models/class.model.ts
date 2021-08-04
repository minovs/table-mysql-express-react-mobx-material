import Db from '../database'

class ClassModel {
  getClasses = async () => {
    const msQuery = `SELECT alias AS id, name AS label FROM classes`
    try {
      const connection = await Db.connectDb()
      const [rows] = await connection.execute(msQuery)
      return rows
    } catch (e) {
      throw e
    }
  }
}
export default new ClassModel()
