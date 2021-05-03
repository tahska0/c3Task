import React, { Component } from 'react';
import './dragdrop.css';
import img1 from './img1.png';
import img2 from './Brilliant_Logo.svg';
export class dragdrop extends Component {

    state = {
        tasks: [
            {id: "1", taskName:"Task 1", type:"inProgress", backgroundColor: "red"},
            {id: "2", taskName:"Task 2", type:"Done", backgroundColor:"green"},
            {id: "3", taskName:"Task 3", type:"Done", backgroundColor:"blue"},
            {id: "4", taskName:"Task 4", type:"Done", backgroundColor:"green"}
        ]
    }

    onDragStart = (event, taskName) => {
    	console.log('dragstart on div: ', taskName);
    	event.dataTransfer.setData("taskName", taskName);
	}
	onDragOver = (event) => {
	    event.preventDefault();
	}

	onDrop = (event, cat) => {
	    let taskName = event.dataTransfer.getData("taskName");

	    let tasks = this.state.tasks.filter((task) => {
	        if (task.taskName == taskName) {
	            task.type = cat;
	        }
	        return task;
	    });

	    this.setState({
	        ...this.state,
	        tasks
	    });
	}
	render() {
		var tasks = {
	      inProgress: [],
	      Done: []
	    }

		this.state.tasks.forEach ((task) => {
		  tasks[task.type].push(
		    <div key={task.id} 
		      onDragStart = {(event) => this.onDragStart(event, task.taskName)}
		      draggable
		      className="draggable"
		      style = {{backgroundColor: task.bgcolor}}>
		      {task.taskName}
		    </div>
		  );
		});

	    return (
            <>
	      <div className="drag-container">
	        <h2 className="head">Drag & Drop</h2>
            <div className="contbox">
		    <div className="inProgress"
	    		onDragOver={(event)=>this.onDragOver(event)}
      			onDrop={(event)=>{this.onDrop(event, "inProgress")}}>
	          <span className="group-header">In Progress</span>
	          {tasks.inProgress}
	        </div>
	        <div className="droppable"
	        	onDragOver={(event)=>this.onDragOver(event)}
          		onDrop={(event)=>this.onDrop(event, "Done")}>
	          <span className="group-header">Done</span>
	          {tasks.Done}
	        </div>	      
            </div>  
	      </div>
          </>
        );
    }
}

export default dragdrop
