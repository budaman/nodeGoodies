function addOrder (orderNum) {
		console.log("Your order number is ", orderNum);

		orderNumber (function (){
			console.log("Orders after time out ", orderNum );
		});
}


function orderNumber (callBack) {
	setTimeout (callBack, 5000);
}

addOrder(1);
addOrder(2);
addOrder(3);
addOrder(4);
addOrder(5);
addOrder(6);