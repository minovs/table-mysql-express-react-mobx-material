import Db from '../database'

class StudentModels {
  getStudents = async () => {
    const msQuery = `SELECT CONCAT('nn,',name,',',GROUP_CONCAT(g.ok order by g.di)) AS res FROM 
    (SELECT s.*, c.id as di, CASE WHEN v.studentId>0 THEN '+' else 'H' END AS ok FROM students AS s 
    CROSS JOIN classes AS c 
    LEFT JOIN visits AS v ON s.id=v.studentId AND c.id=v.classId ORDER BY s.name,c.id) AS g GROUP BY g.name ORDER BY name`
    try {
      const connection = await Db.connectDb()
      const [rows] = await connection.execute(msQuery)
      return rows
    } catch (e) {
      throw e
    }
  }

  getIds = async (name: string, classes: string) => {
    const msQuery = `SELECT s.id AS st, c.id AS cl FROM students s, classes c WHERE s.name=? AND c.name=?`
    try {
      const connection = await Db.connectDb()
      const [rows] = await connection.execute(msQuery, [name, classes])
      return rows
    } catch (e) {
      throw e
    }
  }
}
export default new StudentModels()
