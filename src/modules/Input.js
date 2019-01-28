import React, { Component } from 'react';

class Input extends Component
{
	state = {
		value: ''
	};

	clickHandler = (event) => {
		const { onAdd } = this.props;
		const { value } = this.state;
		if (onAdd && value.length > 0) {
			onAdd(this.state.value);
			this.setState({
				value: ''
			});
		}
	};

	inputHandler = (event) => {
		const { value } = event.target;
		this.setState({
			value
		});
	}

	render() {
		const { label } = this.props;
		const { value } = this.state;

		return (
			<div className={"input mh2 mv4"}>
				<input type="text" value={value} onChange={this.inputHandler} placeholder={label} />
				<div className={"button white bg-mid-gray flex items-center justify-center"} onClick={this.clickHandler}>
					<span>{"+"}</span>
				</div>
			</div>
		);
	}
}

export default Input;
