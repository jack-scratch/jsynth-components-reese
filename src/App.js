import Op from './Op.js';
import Osc from './Osc.js';

function App() {
	const ctx = new window.AudioContext() || window.webkitAudioContext();

  return (
		<div>
			<Op name='Operator' ctx={ctx} />

			{/* patch bay */}
			<div className="sys">
				<Osc knob={[
					"asdf",
					"hjkl"
				]} />
			</div>
		</div>
  );
}

export default App;
