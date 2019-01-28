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

	doExtraction = () => {
		this.setState({ extraction: true });
		this.makeExtraction();
	};

	makeExtraction = () => {
		const { partecipants } = this.state;

		if (partecipants.length > 1) {
			const index = Math.floor(partecipants.length * Math.random());

			setTimeout(() => {
				console.log("Removing...", index);

				this.removePartecipant(index);
				this.makeExtraction();
			}, 1000);
		}
	};

	removePartecipant = (index = 0) => {
		const { partecipants } = this.state;
		partecipants.splice(index, 1);

		this.setState({ partecipants });
	};

	render() {
		const { partecipants, extraction } = this.state;
		const winner = partecipants.length === 1;

		return (
			<div>
				{extraction ? (
					<div>
						<h2 className={"ma2"}>{"ROUSSEAU: ESTRAZIONE IN CORSO"}</h2>
						<h3 className={"ma2"}>{(winner ? "IL VINCTORE E':" : "PARTECIPANTI:")}</h3>
						<List items={partecipants} winner={winner} />
					</div>
				) : (
					<div>
						<h2 className={"ma2"}>{"ROUSSEAU: SISTEMA OPERATIVO CERTIFICATO"}</h2>
						<h3 className={"ma2"}>{"PARTECIPANTI:"}</h3>
						<List items={partecipants} winner={false} />
						<Input label={"AGGIUNGI UN PARTECIPANTE"} onAdd={this.addPartecipant} />
						<div className={"button button-large br-pill bg-navy white mh2"}  onClick={this.doExtraction}>{"ESTRAI IL FORTUNATO"}</div>
					</div>
				)}
			</div>
		);
	}
}

export default Rousseau;
