import Op from './Op.js';
import Source from './Source.js';

function App() {
	const ctx = new window.AudioContext() || window.webkitAudioContext();

  return (
		<div>
			<Op name='Operator' ctx={ctx} />

			{/* patch bay */}
			<div className="sys">
				<Source />
			</div>
		</div>
  );
}

export default App;
