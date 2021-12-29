class Noise extends AudioWorkletProcessor {
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

		for (let chan = 0; chan < output.length; ++chan) {
			const outputChan = output[chan];
			for (let i = 0; i < outputChan.length; ++i) {
				outputChan[i] = 2 * (Math.random() - 0.5) * (isAmplitudeConstant ? amplitude[0] : amplitude[i]);
			}
		}

		return this.isPlaying;
	}
}

registerProcessor("noise", Noise);
