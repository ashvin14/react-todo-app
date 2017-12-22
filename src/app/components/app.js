import React from "react";
import {ToDoList} from "./ToDoList"
import {ToDoForm} from "./ToDoForm"


export class app extends React.Component{
	constructor(){
		super();
		this.state={
			text:'',
			todos:[
				"hello "
			]
		}
		this.onSetField = this.onSetField.bind(this);
	}
	onSetField (name){
		
		this.setState({
			todos:this.state.todos.concat(name)
		})
	}
	render(){
		
		return(
			<div>
			<ToDoForm text={this.state.text} addTodo={this.onSetField}/>
			<ToDoList todos={this.state.todos}/>
			</div>

			)
	}
}

