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
import {
	clamp
} from "./util";

class Note extends React.Component {
	fmtSemi = {
		"sharp": "#",
		"flat": "b"
	};

	constructor() {
		super();

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
					<TextDisp wd={4} ln={1} buff={this.state.o} ht/>
					<div className="cont body">
						<Btn ht={16} hookPush={() => this.setState((prevState) => ({
							o: prevState.o + 1
						}))} />
						<Btn ht={16} hookPush={() => this.setState((prevState) => ({
							o: prevState.o - 1
						}))} />
					</div>
				</div>
				<div className="cont body" style={{
					display: "flex",
					flexDirection: "row"
				}}>
					<div className="cont body">
						<TextDisp wd={2} ln={1} buff={note["whole"][this.state.t]} />
					</div>
					<div>
						<div className="cont body">
							<div className="mark">Note</div>
							<div className="cont body">
								<Btn ht={16} hookPush={() => this.setState((prevState) => ({
									t: clamp(prevState.t + 1, 0, 6)
								}))} />
								<Btn ht={16} hookPush={() => this.setState((prevState) => ({
									t: clamp(prevState.t - 1, 0, 6)
								}))} />
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
				<div className="cont body">
					<Btn hookPush={this.props.hook && this.props.hook(a * Math.pow(2, this.state.o + ((1 / 7) * this.state.t) + ((this.state.s == 1 ? 1 : -1) * (1 / 12))))} />
				</div>
			</div>
		);
	}
}

export default Note;
