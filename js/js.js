$(document).ready(function(){

    $(".jwplayer").attr("style","width:" + "50%;" + "height:450px!important;");
	var playerInstance = jwplayer("player");
    playerInstance.setup({
        image: "/uploads/images/1c863b3c6bf90ab5c99110870a529f2e/original.jpg",
        file: "http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8",
        
        title: "My Cool Trailer"           
    });
});