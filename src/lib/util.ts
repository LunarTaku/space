function imageUrl(collectionId: string, id: string, imageName: string) {
	return `http://192.168.0.207:8090/api/files/${collectionId}/${id}/${imageName}`;
}

function containsWord(str: string, word: string): boolean {
	const regex = new RegExp(`\\b${word}\\b`, 'i'); // 'i' for case-insensitive match
	return regex.test(str);
}

export { imageUrl, containsWord };
