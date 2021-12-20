import Module from "./Module";

class Proc extends Module {
	render() {
		return <Module port={[
			{
				type: "in"
			}, {
				type: "out"
			}
		]} />;
	}
}

export default Proc;
