import React from "react";


export class ToDoList extends React.Component{
	render(){
		
		return(
			<div>
			<ul className="list-group">
		{this.props.todos.map((todo,i)=>{
			return <li className="list-group-item" key={i}>{todo}</li>
		})}
		</ul>
		</div>
			)
		
	}
}