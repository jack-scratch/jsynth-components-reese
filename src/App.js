import Op from './Op.js';
import Osc from './Osc.js';
import Effect from './Effect.js';
import Out from './Out.js';

function App() {
	const ctx = new window.AudioContext() || window.webkitAudioContext();

  return (
		<div>
			{/* patch bay */}
			<div className="sys">
				<Osc />
				<Effect />
				<Out />
			</div>
		</div>
  );
}

export default App;
