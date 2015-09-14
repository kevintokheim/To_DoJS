$(document).ready(function(){

  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task-name").val();

    var newTask = {taskName: inputtedTask};

    $("div#left-well").append("<li><span class = 'task'>" + newTask.taskName +
      "<br/><input type='button' class='btn btn-sm btn-danger task-complete' value='Complete Task'></span></li>");

    $("input[type=button]").click(function() {
      $(this).parent().parent().appendTo("#right-well");
      $(this).remove();
    });

    $("input#new-task-name").val("");
  });
});
