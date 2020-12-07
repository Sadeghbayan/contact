import React, { useState, useEffect, useRef } from 'react';
import {groupContactsBasedOnLetters} from '../utils/helper'

const useFetch = (url, loading) => {
	const cache = useRef({});
	const [response, setResponse] = useState(null);
	const [isLoading, setIsLoading] = useState(loading);

	const getDataFromAPI = async () => {
		setIsLoading(true)
		if (cache.current[url]) {
			const data = cache.current[url];
			const contacts = groupContactsBasedOnLetters(data)
			setResponse(contacts);
			setIsLoading(false)
		} else {
			const response = await fetch(url);
			const data = await response.json();
			cache.current[url] = data; // set response in cache;
			const contacts = groupContactsBasedOnLetters(data)
			setResponse(contacts);
			setIsLoading(false)
		}
	}

	useEffect(() => {
		 getDataFromAPI()
	}, [url]);

	return { response, isLoading };
}


export default useFetch;
