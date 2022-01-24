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
				minValue: 0.0,
				maxValue: 1000.0,
				defaultValue: a
			}
		];
  }

  process(inPut, outPut, param) {
    outPut[0].forEach((chan) => {
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
				minValue: 1,
				maxValue: 8,
				defaultValue: 1
			}
		];
	}

	process(inPut, outPut, param) {
		outPut[0].forEach((chan) => {
			for (let i = 0; i < chan.length; i++) {
				for (let f = 0; f < param["Iterations"]; f++) {
					chan[i] = inPut[0][0][i] * inPut[0][0][i];
				}
			}
		});

		return true;
	}
}

class Bitcrush extends AudioWorkletProcessor {
	static get parameterDescriptors() {
		return [{
			name: "bitDepth",
			minValue: 1,
			maxValue: 16,
			defaultValue: 12
		}, {
			name: "reduction",
			minValue: 0,
			maxValue: 1,
			defaultValue: 0.5
		}];
	}

	constructor() {
		super();

		this.phase_ = 0;
		this.lastSampleValue_ = 0;
		this.play = true;
		this.port.onmessage = this.onmessage.bind(this)
	}

	onmessage(event) {
		const {
			data
		} = event;

		this.play = data;
	}

	process(inPut, outPut, param) {
		const input = inPut[0];
		const output = outPut[0];

		const bitDepth = param.bitDepth;
		const reduction = param.reduction;

		const depthConst = bitDepth.length === 1;

		for (let channel = 0; channel < input.length; ++channel) {
			const inChan = input[channel];
			const outChan = output[channel];

			let step = Math.pow(0.5, bitDepth[0]);
			for (let i = 0; i < inChan.length; ++i) {
				if (!depthConst) {
					step = Math.pow(0.5, bitDepth[i]);
				}

				this.phase_ += reduction[i];

				if (this.phase_ >= 1.0) {
					this.phase_ -= 1.0;
					this.lastSampleValue_ = step * Math.floor(inChan[i] / step + 0.5);
				}

				outChan[i] = this.lastSampleValue_;
			}
		}

		return this.play;
	}
}

class SnH extends AudioWorkletProcessor {
	constructor() {
		super();

		this.i = 0;
		this.samp = 0;
	}

	process(inPut, outPut, param) {
		outPut[0].forEach((chan) => {
			for (let i = 0; i < chan.length; i++) {
				if (!(this.i % 3)) {
					this.samp = inPut[0][0][i];
				}

				chan[this.i] = this.samp;

				this.i++;
			}
		});

		return true;
	}
}

registerProcessor("Sine", Sin);
registerProcessor("Feedback", Feedback);
registerProcessor("Bitcrush", Bitcrush);
registerProcessor("SnH", SnH);
