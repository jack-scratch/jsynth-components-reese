class White extends AudioWorkletProcessor {
	constructor() {
		super();

		this.isPlaying = true;
	}

	process(inputs, outputs, param) {
		const output = outputs[0];

		for (let c = 0; c < output.length; ++c) {
			for (let i = 0; i < output[c].length; ++i) {
				output[c][i] = Math.random();
			}
		}

		return this.isPlaying;
	}
}

registerProcessor("white", White);
