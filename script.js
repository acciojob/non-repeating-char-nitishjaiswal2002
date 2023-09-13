function firstNonRepeatedChar(str) {
 // Write your code here
	 if(!str || str.length===0){
		 return null;//null for empty string or not input
	 }
	const charCount=new Array(26).fill(0);
	//count the frequency of each character in the string
	for(const char of str){
		const index=char.charCodeAt(0) - 'a'.charCodeAt(0);
		charCount[index]++;
	}

	//find the first non-repeating character in the original order
	for(const char of str){
		const index=char.charCodeAt(0) - 'a'.charCodeAt(0);
		if(charCount[index]===1){
			return char;
		}
	}
	return null;//return null if no non-repeated character found 
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
