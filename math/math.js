// for (i = 1; i < 5000; i++){
// 	var result = factorial(100);
// }
// process.send({ status: 'finish', factorial: result });

function factorial(num)
{
	var rval = 1;
	for (var i = 2; i <= num; i++){
		rval = rval * i;
		if(!(i%10)){
			process.send({ status: 'pishka', iteration: i, result: rval });
		}
	}
	return rval;
}

function fibonacci(num){
  var a = 1, b = 0, temp;
  var i = 0;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
    i++;

    if(!(num%10)){
    	process.send({ status: 'pishka', iteration: i, result: b });
    }
  }

  return b;
}

process.on('message', (m) => {
	var result;

	if(m.type === 'factorial'){
		result = factorial(m.count);
	} else if(m.type === 'fibonacci'){
		result = fibonacci(m.count);
	}
	process.send({ status: 'finish', result: result });
});