$('#login_button').on('click', function(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  json_to_send = {
    email: "algunemail@valido.com",
    password: "qwerty123"
  };

  json_to_send = JSON.stringify(json_to_send);


  $.ajax({
    url: 'https://miguelexamenfinal.herokuapp.com/users/login',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "application/json"
    },
    mode: "no-cors",
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      // guardar token en localstorage o cookie
      localStorage.setItem('token', data.token)
      window.location = './todo.html'
    },
    error: function(error_msg) {
      alert((error_msg["responseText"]));
    }
  });
})