import React from 'react'
import { Link } from "react-router-dom"
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTypography-root': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}))

const Users = ({ users }) => {
  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Typography component="h2" variant="h5">
        List of blogs per user
      </Typography>
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell>Blogs created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(({id, name, blogs}) =>
            <TableRow key={id}>
              <TableCell>
                <Link to={`/users/${id}`}>{name}</Link>
              </TableCell>
              <TableCell>{blogs.length}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      </TableContainer>
    </div>
  )
}

export default Users
