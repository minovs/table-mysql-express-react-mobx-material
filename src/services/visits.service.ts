import VisitModel from '../models/visit.model'
import StudentModels from '../models/student.model'

export class VisitsService {
  async addVisit(name: string, classes: string) {
    const ids = await StudentModels.getIds(name, classes)
    return await VisitModel.addVisit(ids[0].st, ids[0].cl)
  }
  async delVisit(name: string, classes: string) {
    const ids = await StudentModels.getIds(name, classes)
    return await VisitModel.delVisit(ids[0].st, ids[0].cl)
  }
}
