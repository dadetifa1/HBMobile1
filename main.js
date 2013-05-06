
function SaveData() {
alert("clicked1"); 

 var fDate = $('#formDate').val();
	        var cName = $('#ClientName').val();
	        var fName = $('#FacilityName').val();
	        var pickAddress = $('#PickupAddress').val();

	        var dropAddress = $('#DropOffAddress').val();
	        var dob = $('#DateOfBirth').val();
	        var gender = $('#Gender').val();

	        var aDate = $('#AppDate').val();
	        var aTime = $('#AppTime').val();
	        var pickTimeHome = $('#PickUpTimeHome').val();

	        var dropTimeClinic = $('#DropOffTimeClinic').val();
	        var pickTimeClinic = $('#PickupTimeClinic').val();
	        var dropTimeHome = $('#DropOffTimeHome').val();

	        var clientPhone = $('#ClientPhoneNumber').val();
	        var clientClaimNumber = $('#ClientClaimNumber').val();
	        var facilityPhone = $('#FacilityPhoneNumber').val();

	        var driverName = $('#DriverName').val();	     
	        var fSignature = $('#facilitySignature').val();
	        var dSignature = $('#driverSignature').val();

var saveRequest = new Object(); 
saveRequest.SubmitDate =fDate;
saveRequest.ClientName=cName;
saveRequest.FacilityName=fName;
saveRequest.PickupAddressHome=pickAddress;
saveRequest.DropOffAddressClinic=dropAddress;
saveRequest.DateOfBirth=dob;
saveRequest.Gender=gender;
saveRequest.AppointmentDate=aDate;
saveRequest.AppointmentTime=aTime;
saveRequest.PickupTimeHome=pickTimeHome;
saveRequest.DropOffTimeClinic=dropTimeClinic;
saveRequest.PickupTimeClinic=pickTimeClinic;
saveRequest.DropOffTimeHome=dropTimeHome;
saveRequest.ClientPhoneNumber=clientPhone;
saveRequest.MedicalClaimNumber=clientClaimNumber;
saveRequest.FacilityPhoneNumber=facilityPhone;
saveRequest.DriverName=driverName;
saveRequest.FacilitySignature=fSignature;
saveRequest.DriverSignature=dSignature;

var dataToSend = '{"saveRequest":' + JSON.stringify(saveRequest) + '}';

var endpointAddress = http://localhost:49614/MobileService.svc";
var url = endpointAddress + "/SaveMobileData"; 
$.ajax({ 
type: "POST",
 url: url , 
data: dataToSend, 
contentType: "application/json; charset=utf-8", 
dataType: "json",
success: function (response) 
{ 
alert('success'); 
}, 
error: function (xhr)
 { 
alert('error:' + xhr.responseText); 
}, 
failure: function (msg)
 {
 alert('failure'); 
}
 }); 

}
