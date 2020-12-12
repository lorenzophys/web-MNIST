$('#evalButton').click(function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let imgURL = canvas.toDataURL();

    $.ajax({
        type: 'POST',
        url: '/',
        data: { imgBase64: imgURL },
        success: function(data) {
            $('#prediction').text(data.prediction);
        }
    });
});