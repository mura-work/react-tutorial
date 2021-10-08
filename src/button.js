import React from 'react'
import {Button} from '@material-ui/core';

class ButtonText extends React.Component {
  render() {
    return (
      <>
        <Button variant="contained" onClick={() => this.onAlert()}>aaaaa</Button>
      </>
    )
  }

  onAlert() {
    console.log("aaa")
    alert("aaa")
  };
}

export default ButtonText