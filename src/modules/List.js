import React, { Component } from 'react';

class List extends Component
{
	render() {
		const { items, winner } = this.props;

		return (
			<div className={'items-list mh0 mv4 bt b--silver'}>
				{items.map((item, index) => (
					<div key={item.id} className={'item bb b--silver' + (winner ? ' bg-gold' : '')}>{item.label}</div>
				))}
			</div>
		);
	}
}

export default List;
