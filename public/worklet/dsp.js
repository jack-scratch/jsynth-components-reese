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
