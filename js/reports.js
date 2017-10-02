(function($) {
  $.fn.appendTitle = function(title) {
    var $title = $("<h4></h4>").text(title);
    this.append($title);
    return this;
  };
}(jQuery));

(function($) {
  $.fn.appendOverView = function(texts, values, colors) {
    var $overViewDiv = $("<div></div>").addClass("row text-center").css("margin", "10px");
    for (var i = 0; i < texts.length; i++) {
      $overViewSpan = $("<span></span>").addClass("label label-" + colors[i])
        .text(texts[i] + " - " + values[i]);
      $overViewDiv.append($overViewSpan);
    }
    this.append($overViewDiv);
    return this;
  };
}(jQuery));

(function($) {
  $.fn.appendTable = function(headers, body, colors) {
    var $headerRow = $("<tr></tr>");
    var $tbody = $("<tbody></tbody>");
    var $table = $("<table></table>").addClass("table table-responsive")
      .css("max-height", "300px")
      .append($tbody).append($headerRow);
    var i;
    for (i = 0; i < headers.length; i++) {
      $headerCell = $("<th></th>").addClass("text-center").text(headers[i]);
      $headerRow.append($headerCell);
    }
    // Body
    for (i = 0; i < body.length; i++) {
      $row = $("<tr></tr>").addClass(colors[i]);
      for (var j = 0; j < body[0].length; j++) {
        var $cell = $("<td></td>").append(body[i][j]);
        $row.append($cell);
      }
      $tbody.append($row);
    }
    this.append($table);
    return this;
  };
}(jQuery));

function parseXMLTest(path) {
  var xmlhttp = null;
  var tests = [];
  if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onload = function() {
    $(function() {
      var overview = [];
      $xml = $($.parseXML(xmlhttp.responseText));
      var title = $xml.find("testsuite").attr("name");
      var passed = 0;
      var failed = 0;
      var ignored = 0;
      var rowColors = [];
      $xml.find("testcase").each(function() {
        var test = [];
        var children = $(this).children();
        if (children.length === 0) {
          result = "Passed";
          rowColors.push("success");
          passed++;
        } else {
          if (children[0].tagName === "skipped") {
            result = "Ignored";
            rowColors.push("active");
            ignored++;
          } else {
            result = "Failed";
            rowColors.push("danger");
            failed++;
          }
        }
        test.push($(this).attr("name"));
        test.push($(this).attr("time"));
        test.push(result);
        var log = $(this).find("failure").text();
        var func = "generateLog('" + log + '")';
        if (result === "Failed") {
          var $button = $("<button>Log</button>").addClass("btn btn-default btn-xs")
            .attr({ "value": log, "data-log-title": $(this).attr("name"), "data-toggle": "modal", "data-target": "#log_modal" })
            .prop('outerHTML');
          test.push($button);
        }
        else {
          test.push("");
        }
        tests.push(test);
      });
      $innerContainer = $("<div></div>").css("width", "inherit")
        .appendTitle(title)
        .appendOverView(["Passed", "Ignored", "Failed"], [passed, ignored, failed], ["success", "default", "danger"])
        .appendTable(["Name", "Time", "Result", "Log"], tests, rowColors);
      $("#container").append($innerContainer);
    });
  };
  xmlhttp.open("GET", path, true);
  xmlhttp.send();
  return tests;
}

function initTestFolderSelector(path) {
  // Folder selector
  $(function() {
    $.getJSON("../php/directory_explorer.php", { action: "getDirectories", path: path })
      .done(function(data) {
        $.each(data, function(key, value) {
          $("#test_folder_selector").append('<option value="' + value + '">' + key + '</option>');
        });
        $(".selectpicker").selectpicker('refresh');
      })
      .fail(function(data) {
        alert("Something went wrong");
      });
    $("#test_folder_selector").change(function() {
      initTestFilesSelector($(this).val());
    });
  });
}

function initTestFilesSelector(path) {
  $(function() {
    $("#test_file_selector").empty();
    $('.selectpicker')
      .selectpicker({ title: 'Select a test report' })
      .selectpicker('render');
    $(".selectpicker").selectpicker('refresh');
    $.getJSON("../php/directory_explorer.php", { action: "getFiles", path: path })
      .done(function(data) {
        $.each(data, function(key, value) {
          $("#test_file_selector").append('<option value="' + value + '">' + key + '</option>');
        });
        $(".selectpicker").selectpicker('refresh');
      })
      .fail(function() {
        alert("Something went wrong");
      });
    $("#test_file_selector").change(function() {
      $("#container").empty();
      parseXMLTest($(this).val());
    });
  });
}

function toggleLog() {
  $(function() {
    $(document).on("click", "td > button", function() {
      var $log = $("<p></p>").addClass("text-danger").text($(this).val());
      var $log_title = $("<p></p>").addClass("text-danger").addClass("text-left").text($(this).data("log-title") + " Log");
      $("#log_modal_title").empty().append($log_title);
      $("#log_modal_body").empty().append($log);
    });
  });
}

function init() {
  toggleLog();
  $(function() {
    $("#container").append("<h4>Nothing selected</h4>");
    var path = "/gothw/reports";
    initTestFolderSelector(path);
  });
}

init();
