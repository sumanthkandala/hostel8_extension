/*This script requires you to make your Google Shee public:
  File -> Publish to the web -> Publish

  In the URL, your sheet ID is the long alphanumeric string between d/ and /edit
  example spreadsheet url: https://docs.google.com/spreadsheets/d/1wMH6KvRH8wMkacxWgYK_tVeMt2qpEscBbSa2uihpjs0/edit#gid=0
  This spreadsheet ID is used below.
*/

// use your own spreadsheet Id per above instructions
$(document).ready(function () {
    'use strict';
    $('ul li').on('click',function(){
        var tab_data = $(this).data('tab');
        $(this).addClass('active').siblings().removeClass('active');
        $(tab_data).show().siblings().hide();
        $(".content_tabs").show()
    })
});

var d = new Date();
var n = d.getDay();
var def_tab = "tab" + n;
var def_menu = "menu" + n;

//this url returns a JSON object holding the data from your Google Sheet
var spreadsheetID = "1ZAsT6Mh1UFarBdl6EOKGZVPKiUCRI8t6Gtc8rCEDkBQ";
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";

var monday = "<div class='tab' id='tab1' style='display:none'>";
var tuesday = "<div class='tab' id='tab2' style='display:none'>";
var wednesday = "<div class='tab' id='tab3' style='display:none'>";
var thursday = "<div class='tab' id='tab4' style='display:none'>";
var friday = "<div class='tab' id='tab5' style='display:none'>";
var saturday = "<div class='tab' id='tab6' style='display:none'>";
var sunday = "<div class='tab' id='tab7' style='display:none'>";

$.getJSON(url, function(data) {
    for (var i = 0; i < data.feed.entry.length; i++) {
      monday += "<div style='display: block;'> <h2 style='display: block'>"
      tuesday += "<div style='display: block;'> <h2 style='display: block'>"
      wednesday += "<div style='display: block;'> <h2 style='display: block'>"
      thursday += "<div style='display: block;'> <h2 style='display: block'>"
      friday += "<div style='display: block;'> <h2 style='display: block'>"
      saturday += "<div style='display: block;'> <h2 style='display: block'>"
      sunday  += "<div style='display: block;'> <h2 style='display: block'>"
      
      monday += data.feed.entry[i].gsx$menu.$t;
      tuesday += data.feed.entry[i].gsx$menu.$t;
      wednesday += data.feed.entry[i].gsx$menu.$t;
      thursday += data.feed.entry[i].gsx$menu.$t;
      friday += data.feed.entry[i].gsx$menu.$t;
      saturday += data.feed.entry[i].gsx$menu.$t;
      sunday += data.feed.entry[i].gsx$menu.$t;

      monday += "</h2 style='font-size:20px'><p style='display: inline;font-size:20px''>";
      tuesday += "</h2 style='font-size:20px'><p style='display: inline;font-size:20px''>";
      wednesday += "</h2 style='font-size:20px'><p style='display: inline;font-size:20px''>";
      thursday += "</h2 style='font-size:20px'><p style='display: inline;font-size:20px''>";
      friday += "</h2 style='font-size:20px'><p style='display: inline;font-size:20px''>";
      saturday += "</h2 style='font-size:20px'><p style='display: inline;font-size:20px''>";
      sunday += "</h2 style='font-size:20px'><p style='display: inline;font-size:20px''>";

      monday += data.feed.entry[i].gsx$monday.$t;
      tuesday += data.feed.entry[i].gsx$tuesday.$t;
      wednesday += data.feed.entry[i].gsx$wednesday.$t;
      thursday += data.feed.entry[i].gsx$thursday.$t;
      friday += data.feed.entry[i].gsx$friday.$t;
      saturday += data.feed.entry[i].gsx$saturday.$t;
      sunday += data.feed.entry[i].gsx$sunday.$t;

      monday += "</p></div>";
      tuesday += "</p></div>";
      wednesday += "</p></div>";
      thursday += "</p></div>";
      friday += "</p></div>";
      saturday += "</p></div>";
      sunday += "</p></div>";

    }
    var node = document.getElementById("main");
    $(monday).appendTo(node);
    $(tuesday).appendTo(node);
    $(wednesday).appendTo(node);
    $(thursday).appendTo(node);
    $(friday).appendTo(node);
    $(saturday).appendTo(node);
    $(sunday).appendTo(node);
    var elem = document.getElementById(def_tab);
    elem.style.display = "block";
    var elem = document.getElementById(def_menu);
    elem.className += "active";
});
 
window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer",
  {
    title:{
      text: "Wastage Report"
    },
    legend: {
      maxWidth: 350,
      itemWidth: 120
    },
    data: [
    {
      type: "pie",
      showInLegend: true,
      legendText: "{indexLabel}",
      dataPoints: [
        { y: 4181563, indexLabel: "Breakfast" },
        { y: 2175498, indexLabel: "Lunch" },
        { y: 3125844, indexLabel: "Tiffin" },
        { y: 117, indexLabel: "Dinner"}
      ]
    }
    ]
  });
  chart.render();
}

      