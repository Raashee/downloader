

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
  
      
  yt = $("#ytl").val(),
  
  form = $('#format').val();
  
  if (form != "mp4") {
    
    let id = yt.replace("https://youtu.be/", "");

    var text = "https://ytmp3api.cyou/mload?ytid=" + id + "&bit=128&url=24327924313024394535694d416d376d514b2f42567a61556b746543754d3977362e4c6a4c6e634b34634e656b7a356e542e4b4b3875486f422f4665"
    window.open(text, '_blank');
        console.log(text);
        
  }
    else {
      
     let id = yt.replace("https://youtu.be/", "");

    var text = "https://ytmp3api.cyou/dload?ytid=" + id + "&res=720&url=243279243130244f62424549777564302e57446467637a68484c584e656633692e334a4f5431325334432f57732e412f3149592e6a4e514f614b3669"
    window.open(text, '_blank');
        console.log(text);
     
    }

});

