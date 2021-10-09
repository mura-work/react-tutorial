import React from 'react'
import { AppBar, Toolbar, IconButton, Button, TextField, FormControl, TableContainer, Table,
  TableHead, TableRow, TableCell, TableBody, makeStyles, Container, Select, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import {db} from '../Firebase'
import { collection, addDoc, getDocs } from "firebase/firestore";
class Page extends React.Component {
  // クラスコンポーネントの時のhooks
  constructor(props) {
    super(props);
    this.state = {
      addTodo: [],
      textValue: '',
    };
  }

  addTodo(value) {
    const array = this.state.addTodo.slice();
    const newTodo = {todoName: value, progress: 'todo'}
    array.push(newTodo)
    this.setState({addTodo: array})
    this.setState({textValue: ''})
  }

  onChangeText(value) {
    this.setState({textValue: value.target.value})
  }

  deleteTodo(index) {
    const array = this.state.addTodo.slice();
    array.splice(index, 1)
    this.setState({addTodo: array})
  }

  changeProgress(value, index) {
    const array = this.state.addTodo.slice();
    const newTodo = array[index]
    newTodo.progress = value
    array.splice(index, 1, newTodo)
    this.setState({addTodo: array})
  }

  async connectFirebase() {
    const docRef = await addDoc(collection(db, 'todolists'), {
      todoName: 'aaa',
      progress: 'todo',
    });
    console.log(docRef)
  }

  async connectFirebaseRead () {
    const querySnapshot = await getDocs(collection(db, "todolists"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }

  render() {
    var array = this.state.addTodo.slice();
    const  useStyles = makeStyles(() => ({
      wrapperContents: {
        width: '80%',
        marginRight: '30px',
        backgroundColor: 'blue',
      },
    }))
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
        <Container>
          <h1>todoリスト</h1>
          <FormControl>
            <TextField id="standard-basic" label="todo" value={this.state.textValue} onChange={e => this.onChangeText(e)} />
            <Button variant="contained" size="small" color="primary" onClick={() => this.addTodo(this.state.textValue)}>追加</Button>
          </FormControl>

          {/* リスト */}
          <TableContainer className={useStyles.wrapperContents}>
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">todo名</TableCell>
                  <TableCell align="center">progress</TableCell>
                  <TableCell align="center">delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {array.map((todo, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{todo.todoName}</TableCell>
                    <TableCell align="center">
                      <Select id={''+index} value={todo.progress} onChange={(e) => this.changeProgress(e.target.value, index)}>
                        <MenuItem value={'todo'}>to do</MenuItem>
                        <MenuItem value={'doing'}>doing</MenuItem>
                        <MenuItem value={'done'}>done</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="contained" size="small" color="secondary" onClick={() => this.deleteTodo(index)}>削除</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained" size="small" color="primary" onClick={() => this.connectFirebase()}>firebaseと通信</Button>
          <Button variant="contained" size="small" color="primary" onClick={() => this.connectFirebaseRead()}>firebase呼び出し</Button>
          </Container>
      </>
    )
  }
}



export default Page