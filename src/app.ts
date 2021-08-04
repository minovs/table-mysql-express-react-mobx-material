import { createExpressServer } from 'routing-controllers'
import { ContentController } from './controllers/content.controller'
import dotenv from 'dotenv'
import { VisitController } from './controllers/visits.controller'

dotenv.config()

const PORT = process.env.PORT || 3001

const app = createExpressServer({
  cors: {
    credentials: true,
    origin: process.env.CLIENT_URL,
  },
  classTransformer: true,
  routePrefix: '/api',
  controllers: [ContentController, VisitController],
})

app.listen(PORT, () => console.log(`server started on port - ${PORT}`))
