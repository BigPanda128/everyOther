var num = [1,2,3,4,5,6,7,8,9,10];
var gap = 1;

function everyOther(array) {
	for (var i = 0; i < array.length; i++) {
		if (i % 2 == 0)
			print(array[i]);
	}
}
function gapIncrease(array) {
	for(var i = 0; i < array.length; i += gap++) {
		print(array[i]);
	}
}
everyOther(num);
gapIncrease(num);
