import { makeAutoObservable } from 'mobx'
import React from 'react'
import TableContent from './content'

class ClickHandler {
  constructor() {
    makeAutoObservable(this)
  }
  async addVisit(name: string, classes: string) {
    try {
      await fetch(`/api/visit`, {
        method: 'PUT',
        body: JSON.stringify({ name, classes }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      TableContent.fetchTableContent()
    } catch (e) {
      console.log(e)
    }
  }
  async delVisit(name: string, classes: string) {
    try {
      await fetch(`/api/visit`, {
        method: 'DELETE',
        body: JSON.stringify({ name, classes }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      TableContent.fetchTableContent()
    } catch (e) {
      console.log(e)
    }
  }
  clickHandler(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { name, classes, value } = e.currentTarget.dataset
    if (value === 'H') {
      if (window.confirm('Змінити дані?') && name !== undefined && classes !== undefined) {
        this.addVisit(name, classes)
      }
    } else {
      if (window.confirm('Змінити дані?') && name !== undefined && classes !== undefined) {
        this.delVisit(name, classes)
      }
    }
  }
}
export default new ClickHandler()
