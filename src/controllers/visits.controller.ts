import { JsonController, Res, Put, Delete, Body } from 'routing-controllers'
import { Response } from 'express'
import { VisitsService } from '../services/visits.service'
import 'reflect-metadata'

type ParamsReqType = {
  name: string
  classes: string
}

@JsonController('/visit')
export class VisitController {
  constructor(private readonly visitsService: VisitsService) {
    this.visitsService = new VisitsService()
  }

  @Put('/')
  async addVisit(@Res() res: Response, @Body() params: ParamsReqType) {
    try {
      const { name, classes } = params
      await this.visitsService.addVisit(name, classes)
      return res.json({ result: 'ok' })
    } catch (e) {
      console.log(e)
    }
  }

  @Delete('/')
  async delVisit(@Res() res: Response, @Body() params: ParamsReqType) {
    try {
      const { name, classes } = params
      await this.visitsService.delVisit(name, classes)
      return res.json({ result: 'ok' })
    } catch (e) {
      console.log(e)
    }
  }
}
