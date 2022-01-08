import Out from "./Out";

const speaker = (props) => {
	return (
		<Out name="Output" port={[
			{
				type: "in",
				point: window.ctx.destination
			}
		]} hookIn={props ? props.hookIn : null} />
	);
}

export default speaker;
