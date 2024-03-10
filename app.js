let arr = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 10],
	[11, 12, '', '', 15],
	[16, 17, 18, 19, 20],
];
/*
    1st for loop is a counter for loop that allow our iteration to countinue
    after the first empty string has been moved to the last position, 
*/
for (let i = 0; i < arr.length; i++) {
	// second for loop is to iterate over the main array which elements are another array
	for (let j = 0; j < arr.length; j++) {
		// this inner for loop target each element in the sub-array and perform the check
		for (let k = 0; k < arr[j].length - 1; k++) {
			/* 
                We check if a particular element is an empty string,
                if it is, we swap with the next non-empty string element
                else we leave it as it is
            */
			if (arr[j][k] == '') {
				let temp = arr[j][k];
				arr[j][k] = arr[j][k + 1];
				arr[j][k + 1] = temp;
			}
			/*
                This condition check if the last element in a sub-array is an empty string
                if it is, we move it to the next sub-array and continue iteraton

                [1, 2, 3, 4, 5],
	            [6, 7, 8, 9, 10],
	            [11, 12, '', 15,''],

	            [16, 17, 18, 19, 20],
            */
			if (arr[j][arr[j].length - 1] == '' && arr[j + 1] !== undefined) {
				let temp = arr[j][arr[j].length - 1];
				arr[j][arr[j].length - 1] = arr[j + 1][0];
				arr[j + 1][0] = temp;
			}
		}
	}
}
console.log(arr);
