import React from "react";
import Out from "./Out";
import ctx from "./ctx";

const Speaker = () => {
	return (
		<Out name="Output" port={[
			{
				type: "in",
				point: ctx.destination
			}
		]} />
	);
}

export default Speaker;
