$(document).ready(function(){

  $("form#new-task").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task-name").val();

    var newTask = {taskName: inputtedTask};

    $("div#left-well").append("<li class='task-complete'><span class = 'task'>" + newTask.taskName +
      " <i class='glyphicon glyphicon-ok'></i></span></li>");

    $("li.task-complete").click(function() {
      $(this).toggleClass('task-complete completed');
      $(this).appendTo("#right-well");
      $(this).find('.glyphicon').remove();
      $(this).unbind();
    });

    // $("div#left-well").append("<li id='task-complete'><span class = 'task'>" + newTask.taskName +
    //   "<button class='btn btn-sm btn-default'><i class='glyphicon glyphicon-ok'></i>Complete</button><br/></span></li>");
    //
    //   $("li#task-complete").click(function() {
    //     $(this).appendTo("#right-well");
    //
    //   });

      // <input type='button' class='btn btn-sm btn-danger task-complete' value='Complete Task'>
    // $("input[type=button]").click(function() {
    //   $(this).parent().parent().appendTo("#right-well");
    //   $(this).remove();
    // });

    $("input#new-task-name").val("");
  });
});
