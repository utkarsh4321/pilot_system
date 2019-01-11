// ========== VALIDATION ==========

// VALIDATION FOR THE EMAIL IN LOGIN

const file = document.querySelector('input[type="file"]');

(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// ==========VALIDATION ===========

//  ========== ALERT ==========
$(function() {
  $("form").on("submit", function(e) {
    let val = $("#exampleFormControlSelect1").val(),
      rm = $("#exampleFormControlSelect2").val(),
      val2 = $("#datepicker").val(),
      val3 = $(".fil").val();
    // if (val === "" && rm === "" && val2 === "" && val3 === "") {
    //   $(".alert").fadeIn("3000");
    //   $(".alert").addClass("alert-danger");
    //   $(".alert").html("Please fill all places!");
    //   setTimeout(() => {
    //     $(".alert").fadeOut("3000");
    //   }, 4500);
    // }
    if (val !== "" && rm !== "" && val2 !== "" && val3 !== "") {
      // this.reset();

      $(".alert").fadeIn("3000");
      $(".alert").addClass("alert-success");
      setTimeout(() => {
        $(".alert").fadeOut("slow");
      }, 4000);
    }

    e.preventDefault();
  });
});

// ========== ALERT ===========
