import Out from "./Out";

const speaker = (props) => {
	return (
		<Out name="Output" port={[
			{
				type: "in",
				point: window.ctx.destination
			}
		]} hookUp={props ? props.hookUp : null} hookEnter={props.hookEnter} />
	);
}

export default speaker;
