

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

  var Url = "https://zenzapis.xyz/downloader/youtube?apikey=9e15faf819f6&url=",
  yt = $("#ytl").val(),
  form = $('#format').val();
  
  getJSON(Url + yt, (err, data) => {

    if (form != "mp4") {
      
        let text = `${data.result.getAudio}`
window.open(text, '_blank');
        console.log(text);
        
    } else {
      
let text = `${data.result.getVideo}`
window.open(text, '_blank');
        console.log(text);
        
    }
});
});

