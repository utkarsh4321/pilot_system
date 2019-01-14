//  ========== ALERT ==========
$(function () {
  $("form").on("submit", function (e) {
    let val = $("#exampleFormControlSelect1").val(),
      rm = $("#exampleFormControlSelect2").val(),
      val2 = $("#datepicker").val(),
      val3 = $(".fil").val();
    if (val !== "" && rm !== "" && val2 !== "" && val3 !== "") {
      const sele = $("#exampleFormControlSelect1");
      sele.children()[0].setAttribute("selected", "selected");
      $("#loaderss").fadeIn("slow");
      $("#exampleFormControlSelect2")
        .children()[0]
        .setAttribute("selected", "selected");
      $("#exampleFormControlSelect2")[0].style.border = "1px solid green";
      $("#datepicker")[0].style.border = "1px solid green";


      $('.ui-file')[0].style.border = '1px solid green';



      sele[0].style.border = "1px solid green";



      setTimeout(() => {
        $(".alert").fadeIn("slow");
        $("#loaderss").fadeOut("slow");
      }, 5000);
      val = "";
      rm = "";
      $("#datepicker")[0].value = "";
      $(".ui-file")[0].value = "";
    }

    e.preventDefault();
  });
});

// ========== ALERT ===========