import React, { Component } from 'react';
// Components
import Input from './Input';
import List from './List';

class Rousseau extends Component
{
	state = {
		partecipants: [],
		extraction: false
	};

	addPartecipant = (partecipant) => {
		const { partecipants } = this.state;
		partecipants.push(partecipant);

		this.setState({ partecipants });
	};

	makeCountdown = (winner) => {

		return (callback) => {
			const { partecipants } = this.state;

			if (partecipants.length > 1) {
				let removable;
				do {
					removable = Math.floor(partecipants.length * Math.random());
				} while (partecipants[removable].id === winner);

				this.removePartecipant(removable);
				setTimeout(() => { callback(callback); }, 1000);
			}
		};
	};

	makeExtraction = () => {
		const { partecipants } = this.state;
		const winner = Math.floor(partecipants.length * Math.random());
		const countdown = this.makeCountdown(partecipants[winner].id);

		countdown(countdown);
	};

	removePartecipant = (index = 0) => {
		const { partecipants } = this.state;
		partecipants.splice(index, 1);

		this.setState({ partecipants });
	};

	startExtraction = () => {
		this.setState({ extraction: true });
		this.makeExtraction();
	};

	render() {
		const { partecipants, extraction } = this.state;
		const winner = extraction && partecipants.length === 1;

		return (
			<div>
				{extraction ? (
					<div>
						<h2 className={"ma2"}>{winner ? "ROUSSEAU" : "ROUSSEAU: ESTRAZIONE IN CORSO"}</h2>
						<h3 className={"ma2"}>{(winner ? "IL VINCITORE E':" : "PARTECIPANTI:")}</h3>
						<List items={partecipants} winner={winner} />
					</div>
				) : (
					<div>
						<h2 className={"ma2"}>{"ROUSSEAU: SISTEMA OPERATIVO CERTIFICATO"}</h2>
						<h3 className={"ma2"}>{"PARTECIPANTI:"}</h3>
						<List items={partecipants} winner={false} />
						<Input label={"AGGIUNGI UN PARTECIPANTE"} onAdd={this.addPartecipant} />
						<div className={"button button-large br-pill bg-navy white mh2"}  onClick={this.startExtraction}>{"ESTRAI IL FORTUNATO"}</div>
					</div>
				)}
			</div>
		);
	}
}

export default Rousseau;
