class Noise extends AudioWorkletProcessor {
  process(ins, outs, param) {
    outs[0].forEach((chan) => {
      for (let i = 0; i < chan.length; i++) {
        chan[i] = (Math.random() * 2) - 1.0;
      }
    })

    return true;
  }
}

registerProcessor("noise", Noise);
