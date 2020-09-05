console.log('TEST // JavaScript Document !!>?');
//alert('');

function callbackLoad(){
  console.log('LOADESSSSSSS');
}



function loadScript(url, callback){

    console.log('LOADESSSSSSS');
    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript('https://fast.wistia.com/assets/external/E-v1.js', callbackLoad)

window.quiz.async('jquery321.1','https://fast.wistia.com/embed/medias/zjpqywyspo.jsonp',function() {
  console.log('LOADED !!!!!');
});

window.quiz.async('jquery321','https://fast.wistia.com/assets/external/E-v1.js',function() {
    console.log('LOADED E-v1.js 01.44 !!!!!');
  // window.wistiaInit = function(W) {
      // window.wiw = W.api;
  // }
});




window.quiz.addCB('Next',function() {
   // console.log("- - - - - "+ $('.qp_a').attr("onclick"));
   console.log("- - - - - "+ document.getElementsByClassName("qp_a"));
  
  //document.getElementsByClassName("qp_a").onclick = changeColor;
  document.getElementsByClassName("qp_a").addEventListener("click", function(){
 console.log("- - - - - Sí´ ");
 // document.getElementById("demo").innerHTML = "Hello World!";
});
      
   /* $(".wistia-trigger").click(function(){
        var vid = $(this).attr("data-video-id");

        $(".wistia_embed").hide();
        $(".wistia_embed.wistia_async_"+vid).show();

        window._wq = window._wq || [];

        // pause all videos and move time to zero
        _wq.push({ id: "_all", onReady: function(video) {
          video.pause();
          video.time(0);
        }});  

        // start playing current video
        _wq.push({ id: vid, onReady: function(video) {
          video.play();
        }});        
    });*/
    
    /*
     window._wq = window._wq || [];
    _wq.push({ id: "_all", onReady: function(video) {
          video.pause();
         video.time(0);
        }})
        
        */
        
   window.wistiaInit = function(W) {
           
           
    console.log('NEXT PRESS ');
    // console.log("?: "+ window.quiz);
    console.log("Slide/Frame: "+ window.quiz.cq);
  // window._wq = window._wq || [];
    // window.wistiaInit = function(W) {
    console.log('GO PLAY');
    // W.api("video0").play(); 
      
    switch (window.quiz.cq) {
        case 1:
            swc = "01 GO!";
             console.log('Ahora entro... 01');
             W.api("video0").play(); 
            
         //  window.document.getElementById("video0").classList.add("wistia_embed");
        //   window.document.getElementById("video0").classList.add("wistia_async_s0mktxua5x");
// W.api("video0").play(); 
            // console.log("WQ: !! "+  window._wq);
 
           // window._wq = window._wq || [];
               /* _wq.push({ id: 'video0', onReady: function(video) {
               // console.log("I got a handle to the video!", video.id);
                video.play();
             
                video.bind('play', function() {
                    console.log("START PLAYING VIDEO: " +video);
                });
            }});
            */

    break;
  case 2:
    swc = "02 GO!";
    console.log('Ahora entro... 02');
//W.api("video0").stop(); 
  // W.api("video0").pause(); 
    W.api("wistia-s0mktxua5x-1").play(); 
    /*
    document.getElementById('wistia-s0mktxua5x-1').style.border = "thick solid magenta";
     _wq.push({ id: 'wistia-s0mktxua5x-1', onReady: function(video) {
               console.log("I got a handle to the video!", video);
                video.play();
             
                video.bind('play', function() {
                    console.log("START PLAYING VIDEO: " +video);
                });
            }});
            */
   // window.wiw("video01").play(); 
    //swc = "02 GO??";
    // W.api("video0").stop(); 
  W.api("video0").pause(); 
    break;
  case 3:
     swc = "03 GO!";
     // W.api("video01.2").play(); 
   //  W.api("video0").pause(); 
    break;
  case 4:
    swc = "04";
    break;
  case 4:
    swc = "05";
    break;
  case 5:
    swc = "06";
    break;
  case 6:
    swc = "07";
}
 console.log("FRAME: "+swc);  
       }

   //console.log(': Next button has been pressed');
});
