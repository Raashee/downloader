let getJSON = (url, callback) => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = () => {

        let status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.send();
};
$(document).on('click','.send_form', function(){
  var yt = $("#ytl").val();
  var url = yt.value.replace("https://youtu.be/", "https://www.000tube.com/watch?v=");
 
        window.open(url, '_blank');
        console.log(url);
        
});
