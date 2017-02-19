for (i = 1; i < 5000; i++){
	var result = factorial(100);
}
process.send({ status: 'finish', factorial: result });

function factorial(num)
{
	var rval = 1;
	for (var i = 2; i <= num; i++){
		rval = rval * i;
		if(!(i%10)){
			process.send({ status: 'pishka', iteration: i, factorial: rval });
		}
	}
	return rval;
}