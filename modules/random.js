 /*Declares object of random*/
 var random = {
 	/*Function to creat random number*/
 	getRandom:function (min, max) {
	  return Math.floor(Math.random() * (1 + max - min) + min);
	}

};

/*Exports module for use by server*/
module.exports = random