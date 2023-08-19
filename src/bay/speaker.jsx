import Out from "./Out";

const speaker = (props) => {
	return (
		<Out name="Output" port={[
			{
				type: "in",
				point: window.ctx.destination
			}
		]} c={props ? props.c : null} hookInDown={props ? props.hookInDown : null} hookInUp={props ? props.hookInUp : null} />
	);
}

export default speaker;
