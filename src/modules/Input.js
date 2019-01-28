import React, { Component } from 'react';

const ENTER = 13;

class Input extends Component
{
	state = {
		index: 0,
		value: ''
	};

	clickHandler = (event) => {
		const { onAdd } = this.props;
		const { index, value } = this.state;
		if (onAdd && value.length > 0) {
			onAdd({
				id: index,
				label: value
			});
			this.setState({
				index: (index + 1),
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

	keyboardHandler = (event) => {
		if (event.keyCode === ENTER) {
			this.clickHandler(event);
		}
	};

	render() {
		const { label } = this.props;
		const { value } = this.state;

		return (
			<div className={"input mh2 mv4"}>
				<input type="text" value={value} onChange={this.inputHandler} onKeyDown={this.keyboardHandler} placeholder={label} autoFocus />
				<div className={"button white bg-mid-gray flex items-center justify-center"} onClick={this.clickHandler}>
					<span>{"+"}</span>
				</div>
			</div>
		);
	}
}

export default Input;
