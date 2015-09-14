$(document).ready(function(){
  // $("add-task").click(function() {
  //   $("#new-tasks").append('<div class = "new-task-name">' +
  //   'div class = "form-group">' +
  //   '<label for = "new-task-name">Task Description:</label>' +
  //   '<input type = "text" class = "form-control new-task-name" id = "new-task-name">'
  //   '</div>' +
  //   '</div>');
  // });

  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task-name").val();

    var newTask = {taskName: inputtedTask};

    $("div#left-well").append("<li><span class = 'task'>" + newTask.taskName + "</span></li>");

    $(".task").last().click(function() {
      $("#show-tasks").show();

      $("$show-tasks h2").text(newTask.taskName);
    });
    $("input#new-task-name").val("");
  });
});
