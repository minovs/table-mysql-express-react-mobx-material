import { makeAutoObservable } from 'mobx'
import React from 'react'
import TableContent from './content'

class ClickHandler {
  constructor() {
    makeAutoObservable(this)
  }
  async visitAction(method: string, name: string, classes: string) {
    try {
      await fetch(`/api/visit`, {
        method: method,
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
      if (window.confirm('Змінити дані?') && name !== undefined && classes !== undefined)
        this.visitAction('PUT', name, classes)
    } else {
      if (window.confirm('Змінити дані?') && name !== undefined && classes !== undefined)
        this.visitAction('DELETE', name, classes)
    }
  }
}
export default new ClickHandler()
