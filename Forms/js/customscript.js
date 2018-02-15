$(document).ready(function(){

var app="<div class='form-group row'>\
<div class='col-4 col-form-label'>\
 <label for='aadharlocation'>Location</label></div>\
  		<div class='col-8'>\
   			 <p id='adharlocation'><span></span></p>\
  		 </div></div>\
  		 <div class='form-group row'>\
   		<div class='col-4 col-form-label'>\
 		<label for='adharName'>Name</label></div>\
 		 <div class='col-8'>\
  		  <p id='adharname'><span></span></p>\
		</div></div> \
   <div class='form-group row'><div class='col-4 col-form-label'>\
 <label for='aadharguardian'>S/O,D/o</label></div>\
  <div class='col-8'>\
     <p id='adharguardian'><span></span></p>\
   </div></div>\
    <div class='form-group row'><div class='col-4 col-form-label'>\
 <label for='adharempnumber'>Employee Number</label></div>\
  <div class='col-8'>\
	     <p id='adharempnumber'><span></span></p>\
   </div></div>\
   <p>Declaration</p>\
    <div class='form-group row'><div class='col-4 col-form-label'>\
 <label for='adhardoj'>Date of joining</label></div>\
  <div class='col-8'>\
   <p id='adhardoj'><span></span></p>\
   </div></div>\
    <div class='form-group row'><div class='col-4 col-form-label'>\
 <label for='adharsign'>Signature</label></div>\
  <div class='col-8'>\
    	\
   </div></div>"

$("#content").append(app);

$("#preview").click(function(){
var adharname=$('#fullname').val();
var adharguardian=$('#guardian').val();
var adharlocation=$('#location').val();
var adharempnumber=$('#empid').val();
var adhardoj=$('#doj').val();
$('#adharname').val(adharname);
$('#adharguardian').val(adharguardian);
$('#adharlocation').val(adharlocation);
$('#adharempnumber').val(adharempnumber);
$('#adhardoj').val(adhardoj);

 $('#print').click(function(){
 		$("#content").print({
        	globalStyles: true,
        	mediaPrint: false,
        	stylesheet: null,
        	noPrintSelector: ".no-print",
        	iframe: true,
        	append: null,
        	prepend: null,
        	manuallyCopyFormValues: true,
        	deferred: $.Deferred(),
        	timeout: 750,
        	title: null,
        	doctype: '<!doctype html>'
	});


 });

$('#adharlocation').children('span').text(adharlocation);
$('#adharname').children('span').text(adharname);
$('#adharempnumber').children('span').text(adharempnumber);
$('#adharguardian').children('span').text(adharguardian);
$('#adhardoj').children('span').text(adhardoj);
});


});