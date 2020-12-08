import {CONFIG} from '../utils/config'

export const groupContactsBasedOnLetters = (contacts) => {
	const {results} = contacts;
	const {tabs} = CONFIG;

	// first create contact array based on a - z letters
	const contactArray = tabs.reduce((r, e) => {
		if(!r[e]) r[e] = []
		return r;
	}, {});

	// remove extra letters like 'ن - ø'
	const removeExtraLetters = results.filter(item => {
			const letter = item.name.last.charAt(0).toLowerCase()
			return tabs.includes(letter)
	});

	removeExtraLetters.forEach(contact => {
		const letter = contact.name.last.charAt(0).toLowerCase();
		contactArray[letter].push(contact);
	})

	return Object.keys(contactArray).map(key => ({key, results: contactArray[key]}));

}

export const makeStringtoUpperCase = str => str.toUpperCase();
