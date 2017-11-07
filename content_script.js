document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.shiftKey  &&  zEvent.altKey  &&  zEvent.code === "KeyS") {
		//alert("yoyoyo");
		document.getElementById("lst-ib").focus();
		document.getElementById("lst-ib").select();
		//$("lst-ib")[0].select()
		//$("#lst-ib").focus();
    }
} );