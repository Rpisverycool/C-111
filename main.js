Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
    {
        Webcam.snap(function(data_url) {
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'"/>';
        });
    }
    console.log('ml5 version', ml5.version);

    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/kYOQRCNpb/model.json',modelLoaded);

    function modelLoaded() {
        console.log('Modela Loaded!')        
    }
function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediciton_1;
    speak_data_2 = "And the second prediction is" + prediciton_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}