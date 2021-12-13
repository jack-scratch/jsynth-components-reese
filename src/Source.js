import React from 'react';

import Module from './Module';

class Source extends Module {
	render() {
		return (
			<Module port={[
				"Out"
			]} />
		);
	}
};

export default Source;
