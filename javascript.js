$(document).ready(function(){
    $(".form-check").mouseenter(function(){
      $(this).css("color", "rgb(95, 154, 112)");
    });
    $(".form-check").mouseleave(function(){
      $(this).css("color", "black");
    });

    $(".form-check").change(function(){
      $(this).toggleClass("text-success");
    });


    $(".idea1").click(function(){
      $(".cardidea1").toggleClass("collapse");
      $(".cardidea2").addClass("collapse");
      $(".cardidea3").addClass("collapse");
      $(".alert").hide();
    });

    $(".idea2").click(function(){
      $(".cardidea2").toggleClass("collapse");
      $(".cardidea1").addClass("collapse");
      $(".cardidea3").addClass("collapse");
      $(".alert").hide();
    });

    $(".idea3").click(function(){
      $(".cardidea3").toggleClass("collapse");
      $(".cardidea2").addClass("collapse");
      $(".cardidea1").addClass("collapse");
      $(".alert").hide();
    });
    


   
  });