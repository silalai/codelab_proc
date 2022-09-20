$(document).ready(function () {
  var socket = io('http://localhost:3000');
  socket.on('hi', function(msg) {
    Swal.fire({
      title: 'Success!',
      text: msg,
      icon: 'success',
      confirmButtonText: 'Okay'
    }).then((result) => {
      if (result.isConfirmed) {
        socket.on("random", (data) => {
          AppendData(data);
        });
      } 
    })
  });
});

function AppendData(val){
  $("#listUser").append('<a href="#" class="list-group-item list-group-item-action"> Random : '+ val +'</a>');
}
//Work exercise,Insert code here