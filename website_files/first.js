function cameraDisplay(){
    var video = document.querySelector("#videoElement");

    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
        video.srcObject = stream;
        img = video.srcObject;
        })
        // .catch(function (err0r) {
        // console.log("Something went wrong!");
        // });
    }
}

function stop() {
    var video = document.querySelector("#videoElement");
    var stream = video.srcObject;
    var tracks = stream.getTracks();
  
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }
  
    video.srcObject = null;
  }

hjhhjhhkkkk