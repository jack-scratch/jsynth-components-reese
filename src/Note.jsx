import React from "react";
import TextDisp from "./periph/TextDisp";
import {
	Btn
} from "./ctrl/Btn";
import {
	note
} from "./fmt";
import {
	a
} from "./math";

class Note extends React.Component {
	osc;

	fmtSemi = {
		"sharp": "#",
		"flat": "b"
	};

	constructor() {
		super();

		this.osc = window.ctx.createOscillator();
		this.osc.type = "sine";
		this.osc.frequency.value = a;

		this.state = {
			o: 0,
			t: 0,
			s: 0
		};
	}

	render() {
		return (
			<div className="cont body">
				<div className="head">
					<h1>Notes</h1>
				</div>
				<div className="cont body">
					<div className="mark">Octave</div>
					<TextDisp ln={1} buff={this.state.o} ht/>
					<div className="cont body">
						<Btn ht={16} />
						<Btn ht={16} />
					</div>
				</div>
				<div className="cont body" style={{
					display: "flex",
					flexDirection: "row"
				}}>
					<div className="cont body">
						<TextDisp wd={2} ln={1} buff={note["whole"][this.state.s]} />
					</div>
					<div>
						<div className="cont body">
							<div className="mark">Note</div>
							<div className="cont body">
								<Btn ht={16} />
								<Btn ht={16} />
							</div>
						</div>
						<div className="cont body">
							<div className="mark">Semitone</div>
							<div className="cont body">
								<Btn ht={16} />
								<Btn ht={16} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Note;
