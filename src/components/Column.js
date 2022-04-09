import React from 'react'
import styled from 'styled-components';
import Task from './Task.js';
import { Droppable } from 'react-beautiful-dnd';
import { useRef } from 'react';
const Container = styled.div`
  margin: 10px;
  border: 3px solid lightgrey;
  border-radius: 2px
`;

const Title = styled.h2`
  padding: 8px;
  margin: 0px;
  margin-top: 5px;
`;

const TaskList = styled.div`
  padding: 8px
`;

const Column = ({ column, tasks }) => {
  const ref = useRef(null);

  return (
    <div>
      <Container>
        <Title>{column.title}</Title>
          <Droppable droppableId={column.id}>          
            {(provided,snapshot) =>
            (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task,index)=><Task key={task.id} task={task} index={index}/>)}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
      </Container >
    </div >
  )
}

export default Column


// export default class Column extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Title>{this.props.column.title}</Title>
//         <Droppable droppableId={this.props.column.id}>
//          {(provided) => 
//            <TaskList
//              ref={provided.innerRef}
//              {...provided.droppableProps}
//            >
//              {this.props.tasks.map((task,index) => <Task key={task.id} task={task} index={index}/>)}
//              {provided.placeholder}
//            </TaskList>
//          }
//        </Droppable>
//      </Container>
//     );
//   }
//  }