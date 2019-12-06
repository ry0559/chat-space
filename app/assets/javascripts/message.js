$(function(){
  function buildHTML(message) {
      if ( message.image ) {
          var message_image = `<img src=${message.image}>`
        } else {
          var message_image = ''
        };
        var html =
            `<div class="message" data-message-id=${message.id}>
              <div class="upper-message">
                <div class="upper-message__user-name">
                  ${message.user_name}
                </div>
                <div class="upper-message__date">
                  ${message.created_at}
                </div>
              </div>
              <div class="lower-message">
                <p class="lower-message__content">
                  ${message.content}
                </p>
               ${message_image}
              </div>
            </div>`
          return html;  
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData (this);
    var url = $(this).attr('action');
    $.ajax({
      url: url, 
      type: 'POST',  
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })

  var reloadMessages = function() {
    if(location.pathname.match(/\/groups\/\d+\/messages/)){
    var last_message_id = $(".message:last").data("message-id");
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        var insertHTML = '';
        $.each(messages,function(i, message) {
        insertHTML += buildHTML(message)
      });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      })
      .fail(function() {
        alert("エラー")
      });
    };
  }  
  setInterval(reloadMessages, 7000);
});


