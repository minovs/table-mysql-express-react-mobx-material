import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableContent from '../store/content'
import ClickHandler from '../store/clickHandler'
import { IColumnsList } from '../types/types'

export const TableBodyComponent: FC = observer(() => {
  let value: string | number
  const content = (
    <TableBody>
      {TableContent.rows.map((row: { [key: string]: string }, i: number) => (
        <TableRow hover key={i}>
          {TableContent.columns.map((column: IColumnsList) => {
            if (column.id === 'nn') {
              value = i + 1
            } else {
              value = row[column.id]
            }
            return (
              <TableCell key={column.id}>
                <div
                  data-name={row.name}
                  data-classes={column.label}
                  data-value={value}
                  className={column.id !== 'name' && column.id !== 'nn' ? 'click' : undefined}
                  onClick={(e) => ClickHandler.clickHandler(e)}
                >
                  {value}
                </div>
              </TableCell>
            )
          })}
        </TableRow>
      ))}
    </TableBody>
  )
  return <>{content}</>
})
