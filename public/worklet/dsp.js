const a = 440.0;

class Sin extends AudioWorkletProcessor {
	constructor() {
		super();

		this.i = 0;
	}

	static get parameterDescriptors() {
		return [
			{
				name: "Frequency",
				defaultValue: a,
				minValue: 0.0,
				maxValue: 1000.0
			}
		];
  }

  process(input, output, param) {
    output[0].forEach((chan) => {
      for (let i = 0; i < chan.length; i++) {
        chan[i] = Math.sin((this.i * param["Frequency"] * Math.PI) / 44100);

				this.i++;
      }
    });

    return true;
  }
}

class Feedback extends AudioWorkletProcessor {
	static get parameterDescriptors() {
		return [
			{
				name: "Iterations",
				defaultValue: 1,
				minValue: 1,
				maxValue: 8
			}
		];
	}

	process(input, output, param) {
		output[0].forEach((chan) => {
			for (let i = 0; i < chan.length; i++) {
				for (let f = 0; f < param["Iterations"]; f++) {
					chan[i] = input[0][0][i] * input[0][0][i];
				}
			}
		});

		return true;
	}
}

class Bitcrush extends AudioWorkletProcessor {
	static get parameterDescriptors() {
		return [{
			name: "Bit Depth",
			defaultValue: 12,
			minValue: 1,
			maxValue: 16
		}, {
			name: "Reduction",
			defaultValue: 0.5,
			minValue: 0,
			maxValue: 1
		}];
	}

	constructor() {
		super();

		this.phase = 0;
		this.samp = 0;
	}

	process(input, output, param) {
		const input = input[0];
		const output = output[0];

		const bitDepth = param["Bit Depth"];
		const reduct = param["Reduction"];

		const depthConst = bitDepth.length === 1;

		for (let channel = 0; channel < input.length; ++channel) {
			const inChan = input[channel];
			const outChan = output[channel];

			let step = Math.pow(0.5, bitDepth[0]);
			for (let i = 0; i < inChan.length; ++i) {
				if (!depthConst) {
					step = Math.pow(0.5, bitDepth[i]);
				}

				this.phase += reduct[i];

				if (this.phase >= 1.0) {
					this.phase -= 1.0;
					this.samp = step * Math.floor(inChan[i] / step + 0.5);
				}

				outChan[i] = this.samp;
			}
		}

		return true;
	}
}

class SnH extends AudioWorkletProcessor {
	constructor() {
		super();

		this.i = 0;
		this.samp = 0;
	}

	process(input, output, param) {
		output[0].forEach((chan) => {
			for (let i = 0; i < chan.length; i++) {
				if (!(this.i % 3)) {
					this.samp = input[0][0][i];
				}

				chan[this.i] = this.samp;

				this.i++;
			}
		});

		return true;
	}
}

class Clip extends AudioWorkletProcessor {
	static get parameterDescriptors() {
		return [{
			name: "Threshold",
			defaultValue: 0,
			minValue: -1,
			maxValue: 1
		}];
	}

	constructor() {
		super();

		this.thresh = 0;
	}

	process(input, output, param) {
		let input = inputs[0];
		let output = outputs[0];

		for (let c = 0; c < 1; c++) {
			for (let i = 0; i < input[c].length; i++) {
				output[c][i] = Math.min(input[c][i], this.param["Threshold"]);
			}
		}

		return true;
	}
}
