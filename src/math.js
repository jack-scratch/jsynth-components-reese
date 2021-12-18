import {
	fmt
} from "./util";

const a = 440.0;

const oct = 8;
const semi = 12;

class Chord {
	constructor(note) {
		this.note = note;
	}
}

class Triad extends Chord {
}

class Maj extends Triad {
	constructor(base) {
		super([
			base,
			trans(base, (4 * (1 / semi))),
			trans(base, (7 * (1 / semi)))
		]);
	}
}

class Min extends Triad {
	constructor(base) {
		super([
			base,
			trans(base, (3 * (1 / semi))),
			trans(base, (7 * (1 / semi)))
		]);
	}
}

function note(i) {
	return a * Math.pow(2, (i / (oct - 1)));
}

function trans(hz, note) {
	return hz * Math.pow(2, note);
}

export {
	a,
	oct,
	semi,

	note,
	trans,

	Chord,
	Triad,
	Maj,
	Min,

	fmt
};
