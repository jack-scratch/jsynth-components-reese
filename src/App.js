import Osc from './Osc';
import Effect from './Effect';
import Out from './Out';

import './App.css';

function App() {
	const ctx = new window.AudioContext() || window.webkitAudioContext();

  return (
		<div>
			{/* patch bay */}
			<div className="sys">
				<Osc />
				<Effect />
				<Out paramRef={ctx.destination} name="Output" />
			</div>
		</div>
  );
}

export default App;
