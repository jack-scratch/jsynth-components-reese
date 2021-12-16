import React from "react";
import Module from "./Module";
import {
	oct
} from "./math";

import "./Key.css";

function note(i, off) {
	const base = 'A';
	const sign = {
		'sharp': '&#9839',
		'flat': '&#9837'
	};

	const mark = {
		'sharp': false,
		'flat': true
	};

	const ws = ' ';
	const sep = '/';

	let c = '';
	if (off) {
		let
		relFlat = (i + 1) % oct,
			relSharp = i % oct;

		let note = [];

		if (mark['flat']) {
			note.push(String.fromCharCode(base.charCodeAt() + relFlat) + '<sub>' + sign['flat'] + '</sub>');
		}

		if (mark['sharp']) {
			note.push(String.fromCharCode(base.charCodeAt() + relSharp) + sign['sharp']);
		}

		let tok = [];
		for (let i = 0; i < note.length; i++) {
			tok.push(note[i]);

			if (i < note.length - 1) {
				tok.push(sep);
			}
		}

		let serial = '';
		for (let i = 0; i < tok.length; i++) {
			serial += tok[i];

			if (i < tok.length - 1) {
				serial += ws;
			}
		}

		c = serial;
	} else {
		let rel = i % oct;

		c += String.fromCharCode(base.charCodeAt() + rel);
	}

	return c;
}

class Key extends Module {
	render() {
		return (
			<div className="key white">
				<span className="white"></span>
			</div>
		);
	}
};

export default Key;
