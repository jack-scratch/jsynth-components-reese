class White extends AudioWorkletProcessor {
	constructor() {
		super();

		this.playing = true;
	}

	process(inputs, outputs, param) {
		const output = outputs[0];

		for (let c = 0; c < output.length; ++c) {
			for (let i = 0; i < output[c].length; ++i) {
				output[c][i] = -1 + (2 * Math.random());
			}
		}

		return this.playing;
	}
}

registerProcessor("white", White);
