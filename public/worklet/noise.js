class White extends AudioWorkletProcessor {
	constructor() {
		super();

		this.isPlaying = true;
	}

	static get parameterDescriptors() {
		return [{
			name: "amplitude",
			defaultValue: 0.25,
			minValue: 0.0,
			maxValue: 1.0
		}];
	}

	process(inputs, outputs, parameters) {
		const output = outputs[0];
		const amplitude = parameters.amplitude;
		const isAmplitudeConstant = amplitude.length === 1;

		for (let c = 0; c < output.length; ++c) {
			for (let i = 0; i < output[c].length; ++i) {
				output[c][i] = 2 * (Math.random() - 0.5) * (isAmplitudeConstant ? amplitude[0] : amplitude[i]);
			}
		}

		return this.isPlaying;
	}
}

registerProcessor("white", White);
