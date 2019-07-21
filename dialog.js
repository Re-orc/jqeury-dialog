$(function() {
    $("#dialog").dialog({
      autoOpen: false,
      draggable: false,
      position: {
        my: "center",
        at: "center",
        of: window,
      },
      hieth: 500,
      width: 500,
      title: "Create",
      modal: true,
      closeOnEscape: false,
      open: function() {
        $(".ui-dialog-titlebar-close").hide();
        $(".ui-widget-overlay").click(function() {
          $("#dialog").dialog('close');
        })
      }
    });

    $("#opener").on("click", function() {
      $("#dialog").dialog("open");

    });
  });
