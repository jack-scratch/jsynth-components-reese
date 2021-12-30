class Bitcrush extends AudioWorkletProcessor {
	static get parameterDescriptors() {
		return [{
			name: "bitDepth",
			defaultValue: 12,
			minValue: 1,
			maxValue: 16
		}, {
			name: "frequencyReduction",
			defaultValue: 0.5,
			minValue: 0,
			maxValue: 1
		}];
	}

	constructor() {
		super();

		this.phase_ = 0;
		this.lastSampleValue_ = 0;
		this.isPlaying = true;
		this.port.onmessage = this.onmessage.bind(this)
	}

	onmessage(event) {
		const {
			data
		} = event;

		this.isPlaying = data;
	}

	process(inputs, outputs, parameters) {
		const input = inputs[0];
		const output = outputs[0];

		const bitDepth = parameters.bitDepth;
		const frequencyReduction = parameters.frequencyReduction;
		const isBitDepthConstant = bitDepth.length === 1;

		for (let channel = 0; channel < input.length; ++channel) {
			const inputChannel = input[channel];
			const outputChannel = output[channel];

			let step = Math.pow(0.5, bitDepth[0]);
			for (let i = 0; i < inputChannel.length; ++i) {
				if (!isBitDepthConstant) {
					step = Math.pow(0.5, bitDepth[i]);
				}

				this.phase_ += frequencyReduction[i];

				if (this.phase_ >= 1.0) {
					this.phase_ -= 1.0;
					this.lastSampleValue_ = step * Math.floor(inputChannel[i] / step + 0.5);
				}

				outputChannel[i] = this.lastSampleValue_;
			}
		}

		return this.isPlaying;
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
				if (!(i % 3)) {
					this.samp = ins[0][0][i];
				}

				chan[i] = this.samp;

				i++;
      }
    });

    return true;
  }
}

registerProcessor("bitcrush", Bitcrush);

registerProcessor("snh", SnH);
