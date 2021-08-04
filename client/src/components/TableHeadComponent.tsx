import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableContent from '../store/content'
import { IColumnsList } from '../types/types'

export const TableHeadComponent: FC = observer(() => {
  const content = (
    <TableHead>
      <TableRow>
        {TableContent.columns.map((column: IColumnsList) => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
  return <>{content}</>
})
