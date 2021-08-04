import { JsonController, Get, Res } from 'routing-controllers'
import { ContentService } from '../services/content.service'
import { Response } from 'express'
import 'reflect-metadata'

@JsonController('/content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {
    this.contentService = new ContentService()
  }

  @Get('/')
  async getAll(@Res() res: Response) {
    try {
      const result = await this.contentService.getAll()
      return res.json(result)
    } catch (e) {
      console.log(e)
    }
  }
}
