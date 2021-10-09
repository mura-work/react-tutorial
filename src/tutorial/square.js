import React from 'react'

// thisはクラスコンポーネントの時に使用
function Square(props) {
    return (
      <>
        <button className="square" onClick={() => props.onClick()} >
          {props.value}
        </button>
      </>
    );
}

export default Square