import Out from "./Out";

const speaker = (props) => {
	return (
		<Out name="Output" port={[
			{
				type: "in",
				point: window.ctx.destination
			}
		]} hookInUp={props ? props.hookInUp : null} />
	);
}

export default speaker;
