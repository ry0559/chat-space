$(function(){
  // function addUser(user) {
  //   let html = `
  //     <div class="chat-group-user clearfix">
  //       <p class="chat-group-user__name">${user.name}</p>
  //       <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
  //     </div>
  //   `;
  //   $("#user-search-result").append(html);
  // }

  // function addNoUser() {
  //   let html = `
  //     <div class="chat-group-user clearfix">
  //       <p class="chat-group-user__name">ユーザーが見つかりません</p>
  //     </div>
  //   `;
  //   $("#user-search-result").append(html);
  // }

 
  $("#user-search-field").on("keyup", function(){
    let input = $("#user-search-field").val();
    console.log(input);    //フォームの値を取得して変数に代入する

  //   $.ajax({
  //     type: "GET",    //HTTPメソッド
  //     url: "/users",       //users_controllerの、indexアクションにリクエストの送信先を設定する
  //     dataType: "json",
  //     data: { keyword: input },
  //   })
  //   .done(function(users) {
  //     $("#user-search-result").empty();

      // if (users.length !== 0) {
      //   users.forEach(function(user) {
      //     addUser(user);
      //   });
      // } else if (input.length == 0) {
      //   return false;
      // } else {
      //   addNoUser();
//       // }
//     })
//     // .fail(function() {
//     //   alert("通信エラーです。ユーザーが表示できません。");
//     // });
  });
});