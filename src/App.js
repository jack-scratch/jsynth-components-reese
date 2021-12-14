import Op from './Op';
import Effect from './Effect';
import Out from './Out';
import Knob from './Knob';
import Launch from './Launch';
import Pulse from './Pulse';
import Module from './Module';

import './main.css';

const ctx = new window.AudioContext() || window.webkitAudioContext();

function App() {
  return (
		<div onClick={() => {
			if (ctx.state == 'running') {
				ctx.suspend();
			}

			if (ctx.state == 'suspended') {
				ctx.resume();
			}
		}}>
			<Op ctx={ctx} />
		</div>
  );
}

export default App;
