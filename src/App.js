import { useState } from "react";
import initialData from './initial-data'
import Column from "./components/Column";
import {DragDropContext} from 'react-beautiful-dnd'
import React, { Component } from 'react';  
import { render } from 'react-dom';  
   
function App() {

  const [data,setData] = useState(initialData)
 
  function onDragEnd(){
  }

  function onDragStart(){
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    >

      {
        data.columnOrder.map(columnId => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map(taskId => data.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks}/>
        })
      }

    </DragDropContext>
  );
}

export default App;

// class App extends React.Component {  
//   constructor(props) {  
//     super(props);  
//     this.callRef = React.createRef();  
//     this.addingRefInput = this.addingRefInput.bind(this);  
//   }  
   
//   addingRefInput() {  
//     this.callRef.current.select();
//   }  
   
//   render() {  
//     return (  
//       <div>  
//         <h2>Adding Ref to DOM element</h2>  
//         <input  
//           type="text"  
//           ref={this.callRef} />  
//         <input  
//           type="button"  
//           value="Add text input"  
//           onClick={this.addingRefInput}  
//         />  
//       </div>  
//     );  
//   }  
// }  
// export default App;  