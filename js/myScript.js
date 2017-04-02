$( document ).ready(function() {
	if (window.innerWidth <= 767) {
            $("#myimg1").hide();
            $("#myimg2").show();
        } else {
            $("#myimg1").show();
            $("#myimg2").hide();
        }
	window.addEventListener('resize', bannerResizing);

    function bannerResizing() {
        if (window.innerWidth <= 767) {
            $("#myimg1").hide();
            $("#myimg2").show();
        } else {
            $("#myimg1").show();
            $("#myimg2").hide();
        }
    }
});