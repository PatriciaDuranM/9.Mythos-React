import { v4 } from 'uuid';
import { EGYPTIAN } from './egyptian';
import { GREEK } from './greek';
import { NORDIC } from './nordic';
import { ROMAN } from './roman';

export const MENU = [
	{
		id: v4(),
		title: 'ROMAN',
		link: '/roman',
		object: ROMAN
	},
	{
		id: v4(),
		title: 'GREEK',
		link: '/greek',
		object: GREEK
	},
	{
		id: v4(),
		title: 'EGYPTIAN',
		link: '/egyptian',
		object: EGYPTIAN
	},

	{
		id: v4(),
		title: 'NORDIC',
		link: '/nordic',
		object: NORDIC
	}
];

export const MYTHOLOGIES = {
	1: ROMAN,
	2: GREEK,
	3: EGYPTIAN,
	4: NORDIC
};
