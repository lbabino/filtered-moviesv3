export function randomSort(a: any, b: any) {
	return 0.5 - Math.random();
}

export function shuffleArray(OGarray: any[]) {
	let array = [...OGarray];
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}
