import { v4 } from 'uuid';
import { COLORS } from '../styles/Colors';

const JUPITER = {
	id: v4(),
	name: 'Jupiter',
	title: 'Jupiter',
	text: 'Jupiter, known as the king of the Roman gods, is the god of the sky, thunder, and justice. As the Roman counterpart to Zeus, Jupiter reigns supreme over the heavens and is seen as the protector of the state and its laws. He is often depicted as a powerful, bearded figure holding a thunderbolt, his primary weapon and symbol of authority. Jupiter’s role emphasizes divine justice, leadership, and the balance of power, serving as a unifying figure in Roman mythology and religion.',
	imgMob: '/assets/images/roman/jupiter-mobile.jpg',
	imgTab: '/assets/images/roman/jupiter-tablet.jpg',
	imgDesk: '/assets/images/roman/jupiter-desktop.jpg'
};

const MARS = {
	id: v4(),
	name: 'Mars',
	title: 'Mars',
	text: 'Mars is the Roman god of war, representing strength, courage, and military power. Unlike his Greek counterpart, Ares, Mars was also associated with agriculture and served as a protector of Rome. He was deeply revered by Roman soldiers and considered the father of Romulus and Remus, the legendary founders of Rome. Mars is often depicted as a powerful warrior, clad in armor and carrying a spear or shield, symbolizing his role as both a destroyer and defender.',
	imgMob: '/assets/images/roman/mars-mobile.jpg',
	imgTab: '/assets/images/roman/mars-tablet.jpg',
	imgDesk: '/assets/images/roman/mars-desktop.jpg'
};

const VENUS = {
	id: v4(),
	name: 'Venus',
	title: 'Venus',
	text: 'Venus is the Roman goddess of love, beauty, desire, and fertility. She embodies charm, grace, and romantic allure, serving as a central figure in Roman mythology and culture. Venus was believed to bring harmony and inspire passion among gods and mortals alike. As the mother of Aeneas, a hero of the Trojan War and an ancestor of the Romans, she played a crucial role in the mythological founding of Rome. Often depicted as a radiant and ethereal figure, Venus symbolizes physical beauty and love.',
	imgMob: '/assets/images/roman/venus-mobile.jpg',
	imgTab: '/assets/images/roman/venus-tablet.jpg',
	imgDesk: '/assets/images/roman/venus-desktop.jpg'
};

const FAUN = {
	id: v4(),
	name: 'Faun',
	title: 'Fuaun',
	text: 'The faun is a mythical creature from Roman mythology, often depicted as a playful and mischievous being that bridges the human and natural worlds. It has the upper body of a human, complete with youthful, charming features, and subtle goat-like horns on its head. Its lower half may show hints of fur, reflecting its connection to nature. Fauns are known for their love of music, often seen playing a pan flute, symbolizing joy.',
	imgMob: '/assets/images/roman/faun-mobile.jpg',
	imgTab: '/assets/images/roman/faun-tablet.jpg',
	imgDesk: '/assets/images/roman/faun-desktop.jpg'
};

const FURIES = {
	id: v4(),
	name: 'Furies',
	title: 'Furies',
	text: 'The Furies, known as the Dirae in Roman mythology, are vengeful spirits of justice and retribution. These terrifying female figures are tasked with pursuing and punishing those who have committed crimes, particularly against family or moral order. Often depicted as fearsome women with black robes, serpent-like hair, and wings of dark feathers, their presence is both ominous and unrelenting.',
	imgMob: '/assets/images/roman/furies-mobile.jpg',
	imgTab: '/assets/images/roman/furies-tablet.jpg',
	imgDesk: '/assets/images/roman/furies-desktop.jpg'
};

const BASILISK = {
	id: v4(),
	name: 'Basilisk',
	title: 'Basilisk',
	text: 'The basilisk is a legendary serpent-like creature from mythology, often referred to as the "King of Serpents." It is depicted as a massive, coiling serpent with gleaming scales, sharp fangs, and glowing, hypnotic eyes capable of petrifying or killing with a single glance. Known for its terrifying presence, the basilisk is said to dwell in dark, shadowy caves or ancient ruins, surrounded by an aura of fear and mystery.',
	imgMob: '/assets/images/roman/basilisk-mobile.jpg',
	imgTab: '/assets/images/roman/basilisk-tablet.jpg',
	imgDesk: '/assets/images/roman/basilisk-desktop.jpg'
};

const ROMULUS = {
	id: v4(),
	name: 'Romulus',
	title: 'Romulus and Remus',
	text: 'Romulus and Remus are the twin brothers central to the myth of the founding of Rome. Abandoned as infants by the Tiber River, they were miraculously nurtured by a she-wolf (Lupa Capitolina), who protected and fed them. Later raised by a shepherd, the twins grew strong and courageous. Eventually, Romulus founded the city of Rome after a conflict with Remus, marking the beginning of Roman civilization.',
	imgMob: '/assets/images/roman/romulus-mobile.jpg',
	imgTab: '/assets/images/roman/romulus-tablet.jpg',
	imgDesk: '/assets/images/roman/romulus-desktop.jpg'
};

const SABINE = {
	id: v4(),
	name: 'Sabine',
	title: 'The Rape of Sabine',
	text: 'The Rape of the Sabine Women is a key event in Roman mythology symbolizing the founding of Rome. According to legend, Romulus and his followers, in need of wives to populate their city, abducted the women of neighboring Sabine tribes during a festival. Despite the violence, the women later intervened to stop the war between Romans and Sabines, uniting both peoples.',
	imgMob: '/assets/images/roman/sabine-mobile.jpg',
	imgTab: '/assets/images/roman/sabine-tablet.jpg',
	imgDesk: '/assets/images/roman/sabine-desktop.jpg'
};

const TARPEIA = {
	id: v4(),
	name: 'Tarpeia',
	title: 'The Fall of Tarpeia',
	text: 'The Fall of Tarpeia is a tragic event in Roman mythology symbolizing betrayal and retribution. Tarpeia, a Roman maiden, betrayed the city of Rome by offering to open the gates to the Sabines in exchange for their golden bracelets. However, the Sabine soldiers punished her treachery by crushing her under the weight of their shields. She was thrown from a cliff later known as the Tarpeian Rock.',
	imgMob: '/assets/images/roman/tarpeia-mobile.jpg',
	imgTab: '/assets/images/roman/tarpeia-tablet.jpg',
	imgDesk: '/assets/images/roman/tarpeia-desktop.jpg'
};

export const ROMAN = {
	id: v4(),
	bannerMob: '/assets/images/roman/banner-mobile.jpg',
	bannerDesk: '/assets/images/roman/banner-desktop.jpg',
	bannerTab: '/assets/images/roman/banner-tablet.jpg',
	color: COLORS.red,
	name: 'ROMAN MYTHOLOGY',
	tabs: [
		{
			id: v4(),
			tabTitle: 'GODS',
			subTabs: [JUPITER, MARS, VENUS]
		},
		{
			id: v4(),
			tabTitle: 'CREATURES',
			subTabs: [FAUN, FURIES, BASILISK]
		},
		{
			id: v4(),
			tabTitle: 'MYTHS',
			subTabs: [ROMULUS, SABINE, TARPEIA]
		}
	]
};
