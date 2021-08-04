import Db from '../database'

class VisitModels {
  addVisit = async (st: string, cl: string) => {
    const msQuery = `INSERT INTO visits (studentId, classId) VALUES (?, ?)`
    try {
      const connection = await Db.connectDb()
      const [rows] = await connection.execute(msQuery, [st, cl])
      return rows
    } catch (e) {
      throw e
    }
  }

  delVisit = async (st: string, cl: string) => {
    const msQuery = `DELETE FROM visits WHERE studentId=? AND classId=?`
    try {
      const connection = await Db.connectDb()
      const [rows] = await connection.execute(msQuery, [st, cl])
      return rows
    } catch (e) {
      throw e
    }
  }
}
export default new VisitModels()
