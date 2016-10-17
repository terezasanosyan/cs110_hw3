
const reverse = function(array){

	const array1=[];
		for(let n=0; n<array.length;n++)
		{
			array1[n]=array[array.length-1 -n];
		} 
	
	return array1;
};
