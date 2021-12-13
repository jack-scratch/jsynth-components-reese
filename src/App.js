import Op from './Op.js';
import Module from './Module.js';

function App() {
	const ctx = new window.AudioContext() || window.webkitAudioContext();

  return (
		<div>
			<Op name='Operator' ctx={ctx} />
			<div className="sys">
				<Module ctx={ctx} />
			</div>
		</div>
  );
}

export default App;
