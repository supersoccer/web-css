$(document).ready(function(){

    $(".jwplayer").attr("style","width:" + "50%;" + "height:450px!important;");
	var playerInstance = jwplayer("player");
    playerInstance.setup({
        image: "/uploads/images/1c863b3c6bf90ab5c99110870a529f2e/original.jpg",
        file: "http://playertest.longtailvideo.com/adaptive/oceans_aes/oceans_aes.m3u8",
        title: "My Cool Trailer"           
    });
});