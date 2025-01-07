import { v4 } from 'uuid';
import { EGYPTIAN } from './egyptian';
import { GREEK } from './greek';
import { NORDIC } from './nordic';
import { ROMAN } from './roman';
import { COLORS } from '../styles/Colors';

export const MENU = [
	{
		id: v4(),
		title: 'ROMAN',
		link: '/roman',
		mythologyContent: ROMAN,
		color: COLORS.red
	},
	{
		id: v4(),
		title: 'GREEK',
		link: '/greek',
		mythologyContent: GREEK,
		color: COLORS.blue
	},
	{
		id: v4(),
		title: 'EGYPTIAN',
		link: '/egyptian',
		mythologyContent: EGYPTIAN,
		color: COLORS.yellow
	},

	{
		id: v4(),
		title: 'NORDIC',
		link: '/nordic',
		mythologyContent: NORDIC,
		color: COLORS.green
	}
];
