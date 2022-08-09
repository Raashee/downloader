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

  var Url = "https://api-xcoders.xyz/api/download/ytmp4?url=",
      Aurl = "https://api-xcoders.xyz/api/download/ytmp3?url=",
      key = "&apikey=v7Al5I5obp"
  yt = $("#ytl").val(),
  form = $('#format').val();
  
  if (form != "mp4") {
      getJSON(Aurl + yt + key, (err, data) => {
        let text = `${data.result.url}`
        window.open(text, '_blank');
        console.log(text);
        
});
    }
    else {
      getJSON(Url + yt + key, (err, data) => {
let text = `${data.result.url}`
window.open(text, '_blank');
        console.log(text);
        
});
}
    
});
