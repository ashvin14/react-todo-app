import React from "react";


export class ToDoForm extends React.Component{
	constructor(props) {
    super(props);
    this.submitTask = this.submitTask.bind(this);
	}
	submitTask(e){
		e.preventDefault();
		var text = this.refs.text.value;
		this.props.addTodo(text)
		this.refs.text.value = ""



	}
	
	render(){
		
		let text = this.props.text;

		return(
			<div>
		<form onSubmit={this.submitTask} >
		<div className="form-group">
		<input type="text" placeholder="add task" ref="text" className="form-control" onChange={this.onChange}/>
		</div>
		</form>
		</div>

			)
		
	}
}