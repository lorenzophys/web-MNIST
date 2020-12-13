$('#evalButton').click(function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let imgURL = canvas.toDataURL();

    $.ajax({
        type: 'POST',
        url: '/',
        data: { imgBase64: imgURL },
        success: function(data) {
            const predictionCanvas = document.getElementById('predictionCanvas');
            const predictionCtx = predictionCanvas.getContext('2d');
            predictionCtx.font = "60px Comic Sans MS";
            predictionCtx.textAlign = "center";
            predictionCtx.fillText(data.prediction, predictionCanvas.width/2, predictionCanvas.height/2);
        }
    });
});