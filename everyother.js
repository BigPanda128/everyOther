num = [1,2,3,4,5,6,7,8,9,10];

function everyOther(array) {
	for(var i = 0; i < array.length; i += 2) {
		print(array[i]);
	}
}

everyOther(num);
