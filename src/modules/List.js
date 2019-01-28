import React, { Component } from 'react';

class List extends Component
{
	render() {
		const { items, winner } = this.props;

		return (
			<div className={'items-list mh2 mv4 bt b--silver'}>
				{items.map((item, index) => (
					<div key={index} className={'item bb b--silver' + (winner ? ' bg-gold' : '')}>{item}</div>
				))}
			</div>
		);
	}
}

export default List;
