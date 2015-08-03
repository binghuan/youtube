function popStateToPin() {
	//alert('+setStateToPin');
	var pinState = sessionStorage.PIN_TILE_STAY;
	if(pinState == undefined) {
		pinState = 0;
	} else {
		pinState = JSON.parse(sessionStorage.PIN_TILE_STAY);
	}

	console.log(">> popStateToPin: " + pinState);
	sessionStorage.PIN_TILE_STAY = "0";
	return pinState;
}

function getQSParam(paramName) {
    var QS = window.location.toString();
    var indSta = QS.indexOf(paramName + "=");
    if (indSta===-1 || paramName==="") {
		return;
    }
    var indEnd=QS.indexOf('&',indSta);
    if (indEnd==-1) {
		indEnd=QS.length;
    }
    var valore = unescape(QS.substring(indSta+paramName.length+1,indEnd));
    return valore;
}


if(popStateToPin() === 1) {
	console.log("just sit on setting page for waiting to pin");
} else {
	console.log("ready to launch url");
	location.href = "http://youtube.com/";
}