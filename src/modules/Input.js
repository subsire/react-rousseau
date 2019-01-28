import React, { Component } from 'react';

class Input extends Component
{
	state = {
		value: ''
	};

	clickHandler = (event) => {
		const { onAdd } = this.props;
		if (onAdd) {
			onAdd(this.state.value);
			this.setState({
				value: ''
			});
		}
	};

	inputHandler = (event) => {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		const { label } = this.props;
		const { value } = this.state;

		return (
			<div className={"input mh2 mv4"}>
				<input type="text" value={value} onChange={this.inputHandler} placeholder={label} />
				<div className={"button white bg-mid-gray"} onClick={this.clickHandler}>{"+"}</div>
			</div>
		);
	}
}

export default Input;
