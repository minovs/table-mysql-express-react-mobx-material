import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tablen from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import { TableHeadComponent } from './TableHeadComponent'
import { TableBodyComponent } from './TableBodyComponent'
import TableContent from '../store/content'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: '100vh',
  },
})
export const Table: FC = observer(() => {
  const classes = useStyles()
  useEffect(() => {
    TableContent.fetchTableContent()
  }, [])
  const content = (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Tablen stickyHeader aria-label="sticky table">
          <TableHeadComponent />
          <TableBodyComponent />
        </Tablen>
      </TableContainer>
    </Paper>
  )
  return <>{content}</>
})
