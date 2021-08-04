import { makeAutoObservable, runInAction } from 'mobx'
import { IColumnsList } from '../types/types'

class TableContent {
  columns: IColumnsList[] = []
  rows: { [key: string]: string }[] = []
  constructor() {
    makeAutoObservable(this)
  }
  async createColumns(classes: IColumnsList[]) {
    const columns = [
      { id: 'nn', label: '№' },
      { id: 'name', label: 'Имя' },
    ]
    columns.push(...classes)
    return columns
  }
  createData(columns: IColumnsList[], arrayStudents: string[]) {
    let obj: { [key: string]: string } = {}
    columns.forEach((el: IColumnsList, i: number) => {
      obj[el.id] = arrayStudents[i]
    })
    return obj
  }
  async createRows(rowlist: { [key: string]: string }[], columns: IColumnsList[]) {
    let rows: { [key: string]: string }[] = []
    let arrayRows
    rowlist.forEach((el) => {
      arrayRows = el.res.split(',')
      rows.push(this.createData(columns, arrayRows))
    })
    return rows
  }
  async fetchTableContent() {
    try {
      const response = await fetch(`/api/content`)
      const json = await response.json()
      const resColumns = await this.createColumns(json[0])
      const resRows = await this.createRows(json[1], resColumns)
      runInAction(() => {
        this.columns = resColumns
      })
      runInAction(() => {
        this.rows = resRows
      })
    } catch (e) {
      console.log(e)
    }
  }
}
export default new TableContent()
