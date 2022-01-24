const a = 440.0;

class Sin extends AudioWorkletProcessor {
	constructor() {
		super();

		this.i = 0;
	}

	static get parameterDescriptors() {
    return [{
      name: "Frequency",
      minValue: 0.0,
      maxValue: 1000.0,
			defaultValue: a
    }]
  }

  process(ins, outs, param) {
    outs[0].forEach((chan) => {
      for (let i = 0; i < chan.length; i++) {
        chan[i] = Math.sin((this.i * param["Frequency"] * Math.PI) / 44100);

				this.i++;
      }
    });

    return true;
  }
}

class Feedback extends AudioWorkletProcessor {
	constructor() {
		super();
	}

	process(ins, outs, param) {
		outs[0].forEach((chan) => {
			for (let i = 0; i < chan.length; i++) {
				chan[i] = ins[0][0][i] * ins[0][0][i];
			}
		});

		return true;
	}
}

class Bitcrush extends AudioWorkletProcessor {
	static get parameterDescriptors() {
		return [{
			name: "bitDepth",
			defaultValue: 12,
			minValue: 1,
			maxValue: 16
		}, {
			name: "reduction",
			defaultValue: 0.5,
			minValue: 0,
			maxValue: 1
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

	process(inputs, outputs, parameters) {
		const input = inputs[0];
		const output = outputs[0];

		const bitDepth = parameters.bitDepth;
		const reduction = parameters.reduction;
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

	process(ins, outs, param) {
		outs[0].forEach((chan) => {
			for (let i = 0; i < chan.length; i++) {
				if (!(this.i % 3)) {
					this.samp = ins[0][0][i];
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
