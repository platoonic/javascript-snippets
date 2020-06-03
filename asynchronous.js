/*
	
	Evolution of Asynchronous functions in Javascript

*/

/* Callbacks (ES5) */
function asyncUsingCB(callback, error){
	//Mimic Async behaviour using setTimeout
	setTimeout(() => {
		const data  = "asyncUsingCB() data";
		const dataError = 0; //Set 1 to test errors
		if(dataError){
			return error(dataError);
		}
		return callback(data);
	}, 1000);
}

/* Usage */
//asyncUsingCB((data) => {
//	console.log(data);
//}, (error) => {
//	console.log("Error: "+error);
//});

/* Promises (ES6) */
function asyncUsingPromises(){
	return new Promise((resolve, reject) => {
		//Mimimic Async behaviour using setTimeout
		setTimeout(() => {
			const data  = "asyncUsingPromises() data";
			const dataError = 0; //Set 1 to test errors
			if(dataError){
				return reject(dataError);
			} 
			return resolve(data);
		}, 1000);
	});
}

/* Usage */
//asyncUsingPromises().then((data) => {
//	console.log(data);
//}).catch((error) => {
//	console.log("Error: "+error);
//});

/* async functions (ES7) */
async function asyncUsingAsyncAwait(){
	//Mimic Async behaviour using setTimeout
	let task = new Promise((resolve, reject) => {
		setTimeout(() => {
			const data  = "asyncUsingAsyncAwait() data";
			const dataError = 0; //Set 1 to test errors
			if(dataError){
				return reject(dataError);
			}
			return resolve(data);
		}, 1000)
	});

	return await task;
}

/* Usage */
//(async function(){
//	const data = await asyncUsingAsyncAwait();
//	console.log(data);
//})();
// OR
//asyncUsingAsyncAwait().then((data) => {
//	console.log(data);
//}).catch((error) => {
//	console.log("Error: "+error);
//});












