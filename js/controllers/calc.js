(function()
{
	angular
	.module('Calculator')
	.controller('calcCtrl', CalculatorControl);

	function CalculatorControl() {
	    this.input1 = 0;
	    this.input2 = 0;
	    this.picked = '+';
	    this.pickSign = pickSign;

	    Object.defineProperty(this, 'result', { get: result });

	    function pickSign(sign)
	    {
	    	this.picked = sign;
	    }

	    function result()
	    {
	    	switch (this.picked)
	    	{
	    		case '+': return this.input1 + this.input2;
	    		case '-': return this.input1 - this.input2;
	    		case '/': return this.input1 / this.input2;
	    		case 'x': return this.input1 * this.input2;
	    	}
	        
	    }
	    
	}

})();