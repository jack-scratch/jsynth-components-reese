import Op from './Op.js';
import Source from './Source.js';

function App() {
	const ctx = new window.AudioContext() || window.webkitAudioContext();

  return (
		<div>
			<Op name='Operator' ctx={ctx} />
			<div className="sys">
				<Source />
			</div>
		</div>
  );
}

export default App;
