//  Declare Varibales which are using in AJAX method. var Type; var Url; 
var Data; 
var ContentType; 
var DataType; 
var ProcessData; 
//Generic function to call AXMX/WCF  Service function CallLoginService() 
{ 
$.ajax({ 
type: Type, //GET or POST or PUT or DELETE verb 
url: Url, // Location of the service 
data: Data, //Data sent to server 
contentType: ContentType, // content type sent to server dataType: DataType, //Expected data format from server processdata: ProcessData, //True or False 
crossDomain: true, 
success: function (msg) 
{ //On Successfull service call 
ServiceSucceeded(msg);
 }, 
error: ServiceFailed  // When Service call fails 
}); 
} 
function ServiceSucceeded(result) 
{ 
if (DataType == "json")
 { 
resultObject = result.VelidateUserResult; 
if (resultObject) 
{ 
var userdata = JSON.stringify(resultObject); sessionStorage.userInforamtion = userdata;
 window.location = "ExercisePage2.htm"; 
} 
else 
{
 alert("Invalid User"); 
$('#txtUserName').val(""); 
$('#txtPassword').val(""); 
}
 }
 else
 { 
alert("Result Data type is not JSON");
 } 
}
 function ServiceFailed(result)
 { 
alert('Service call failed: ' + result.status + '' + result.statusText); 
Type = null; 
Url = null; 
Data = null; 
ContentType = null; 
DataType = null; 
ProcessData = null; 
} 
function VelidateUser() 
{
alert("wewewq");
 var request = { userProfile: { userId: $('#txtUserName').val(),passWord: $('#txtPassword').val()} };

var jsondata = JSON.stringify(request); 
alert(jsondata);
Type = "POST"; 
Url = "http://localhost:52136/LoginService.svc/VelidateUser"; Data = jsondata; 
ContentType = "application/json; charset=utf-8"; 
DataType = "json"; 
ProcessData = true; // Call the Web Service.... 
CallLoginService(); 
} 

$(document).ready ( function () 
{ 
alert("ww");

$('#submitForm').click ( function (event) 
{ 
event.preventDefault(); 
VelidateUser(); 
} ); 
} );