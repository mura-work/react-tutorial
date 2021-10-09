import React from 'react'
import { AppBar, Toolbar, IconButton, Button, TextField, FormControl, TableContainer, Table,
  TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

class Page extends React.Component {
  // クラスコンポーネントの時のhooks
  constructor(props) {
    super(props);
    this.state = {
      addTodo: ['初期値', 'aaa'],
      textValue: '',
    };
  }

  addTodo(value) {
    const array = this.state.addTodo.slice();
    array.push(value)
    this.setState({addTodo: array})
    this.setState({textValue: ''})
  }

  onChangeText(value) {
    this.setState({textValue: value.target.value})
  }

  render() {
    var array = this.state.addTodo.slice();
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Button color="inherit" component={Link} to="/">top</Button>
          </Toolbar>
        </AppBar>
        <h1>todoリスト</h1>
        <FormControl>
          <TextField id="standard-basic" label="todo" value={this.state.textValue} onChange={e => this.onChangeText(e)} />
          <Button variant="contained" size="small" color="primary" onClick={() => this.addTodo(this.state.textValue)}>追加</Button>
        </FormControl>

        {/* リスト */}
        <TableContainer>
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">todo名</TableCell>
                <TableCell align="center">progress</TableCell>
                <TableCell align="center">delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {array.map((row) => (
                <TableRow key={row}>
                  <TableCell align="center">{row}</TableCell>
                  <TableCell align="center">進捗</TableCell>
                  <TableCell align="center">削除</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    )
  }
}

export default Page