//
//
// **************** TESTING SCRIPTS ****************
//
//
//
//
//
//
//
// mainFunction();
// getAllCars();
// dashboardLoad();
// calculateIncome();
//
// function mainFunction() {
//     $('.dashboard-section').css({display: "block"});
//     $('.manage-car-section').css({display: "none"});
//     $('.view-customer-section').css({display: "none"});
//     $('.calculate-income-section').css({display: "none"});
//     $('.view-rental-request-section').css({display: "none"});
//     $('.view-rental-request-section-changeDriver').css({display: "none"});
//     $('.view-rental-request-section-calculate-payment').css({display: "none"});
//     $('.manage-driver-section').css({display: "none"});
// }
//
// $('#dashboardButton').click(function () {
//     $('.dashboard-section').css({display: "block"});
//     $('.manage-car-section').css({display: "none"});
//     $('.view-customer-section').css({display: "none"});
//     $('.calculate-income-section').css({display: "none"});
//     $('.view-rental-request-section').css({display: "none"});
//     $('.manage-driver-section').css({display: "none"});
// })
//
// $('#manageCarButton').click(function () {
//     $('.dashboard-section').css({display: "none"});
//     $('.manage-car-section').css({display: "block"});
//     $('.view-customer-section').css({display: "none"});
//     $('.calculate-income-section').css({display: "none"});
//     $('.view-rental-request-section').css({display: "none"});
//     $('.driverSection').css({display: "none"});
//     $('.manage-driver-section').css({display: "none"});
// })
//
// $('#manageDiverButton').click(function () {
//     $('.dashboard-section').css({display: "none"});
//     $('.manage-car-section').css({display: "none"});
//     $('.view-customer-section').css({display: "none"});
//     $('.calculate-income-section').css({display: "none"});
//     $('.view-rental-request-section').css({display: "none"});
//     $('.manage-driver-section').css({display: "block"});
// })
//
// $('#viewCustomersButton').click(function () {
//     $('.dashboard-section').css({display: "none"});
//     $('.manage-car-section').css({display: "none"});
//     $('.view-customer-section').css({display: "block"});
//     $('.calculate-income-section').css({display: "none"});
//     $('.view-rental-request-section').css({display: "none"});
//     $('.manage-driver-section').css({display: "none"});
// })
//
// $('#calculateIncomeButton').click(function () {
//     $('.dashboard-section').css({display: "none"});
//     $('.manage-car-section').css({display: "none"});
//     $('.view-customer-section').css({display: "none"});
//     $('.calculate-income-section').css({display: "block"});
//     $('.view-rental-request-section').css({display: "none"});
//     $('.manage-driver-section').css({display: "none"});
// })
//
// $('#viewRentalReqButton').click(function () {
//     $('.dashboard-section').css({display: "none"});
//     $('.manage-car-section').css({display: "none"});
//     $('.view-customer-section').css({display: "none"});
//     $('.calculate-income-section').css({display: "none"});
//     $('.view-rental-request-section').css({display: "block"});
//     $('.view-rental-request-section-changeDriver').css({display: "none"});
//     $('.view-rental-request-section-calculate-payment').css({display: "none"});
//     $('.manage-driver-section').css({display: "none"});
//     requestStatusTableDataLoad();
// })
//
// $('#acceptDenyRentalButton').click(function () {
//
//     $('.accept-request').css({display: "block"});
//     $('.view-rental-request-section-changeDriver').css({display: "none"});
//     $('.view-rental-request-section-calculate-payment').css({display: "none"});
// })
// $('#changeAssignedDriverButton').click(function () {
//
//     $('.accept-request').css({display: "none"});
//     $('.view-rental-request-section-changeDriver').css({display: "block"});
//     $('.view-rental-request-section-calculate-payment').css({display: "none"});
// })
// $('#calculatePaymentButton').click(function () {
//
//     $('.accept-request').css({display: "none"});
//     $('.view-rental-request-section-changeDriver').css({display: "none"});
//     $('.view-rental-request-section-calculate-payment').css({display: "block"});
// })
//
//
// $('#addCar').click(function () {
//
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
//
//     today = mm + '/' + dd + '/' + yyyy;
//
//     let registrationNo = $('#registrationNo').val();
//     let brand = $('#brand').val();
//     let type = $('#type').val();
//     let frontImage = $('#frontImage').val();
//     let numberOfPassengers = $('#numberOfPassengers').val();
//     let transmissionType = $('#transmissionType').val();
//     let fuelType = $('#fuelType').val();
//     let color = $('#color').val();
//     let dailyRate = $('#dailyRate').val();
//     let monthlyRate = $('#monthlyRate').val();
//     let freeMileagePerDay = $('#freeMileagePerDay').val();
//     let freeMileagePerMonth = $('#freeMileagePerMonth').val();
//     let pricePerKm = $('#pricePerKm').val();
//     let kmMeterValue = $('#kmMeterValue').val();
//     let lossDamageWaiver = $('#lossDamageWaiver').val();
//     let lastReturnDate = today;
//     let isAvailable = "YES";
//     let isDamaged = "NO";
//     let underMaintenance = "NO";
//
//
//     let formData = new FormData();
//     for (let file of document.getElementById('frontImage').files) {
//         formData.append("file", file);
//     }
//
//     formData.append("registrationNo", registrationNo);
//
//     $.ajax({
//         method: "POST",
//         contentType: false,
//         processData: false,
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/car/uploadCarImage",
//         async: true,
//         data: formData,
//         success: function (resp) {
//             console.log(resp.data);
//
//             if (resp.code == 200) {
//                 $.ajax({
//                     method: "POST",
//                     contentType: "application/json",
//                     url: "http://localhost:8080/BackEnd_war_exploded/api/v1/car/registerCar",
//                     data: JSON.stringify({
//                         'registrationNo': registrationNo,
//                         'brand': brand,
//                         'type': type,
//                         'frontImage': resp.data,
//                         'numberOfPassengers': numberOfPassengers,
//                         'transmissionType': transmissionType,
//                         'fuelType': fuelType,
//                         'color': color,
//                         'dailyRate': dailyRate,
//                         'monthlyRate': monthlyRate,
//                         'freeMileagePerDay': freeMileagePerDay,
//                         'freeMileagePerMonth': freeMileagePerMonth,
//                         'pricePerKm': pricePerKm,
//                         'kmMeterValue': kmMeterValue,
//                         'lastReturnDate': lastReturnDate,
//                         'isAvailable': isAvailable,
//                         'isDamaged': isDamaged,
//                         'underMaintenance': underMaintenance,
//                         'lossDamageWaiver': lossDamageWaiver
//                     }),
//                     success: function (rt) {
//                         if (rt.code == 200) {
//                             console.log("wade goda udarayaaaaaa!")
//                             confirm("Car is Added");
//                             getAllCars();
//                         } else {
//                             console.log("Please Try Again")
//                         }
//                     }
//                 })
//
//             }
//         }
//     })
//
// });
// getAllUsers();
//
// function getAllUsers() {
//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/user",
//         success: function (resp) {
//             console.log(resp);
//             $('#customerTable>tbody').empty();
//
//             for (let user of resp.data) {
//                 let nic = user.nic;
//                 let email = user.email;
//                 let password = user.password;
//                 let id = user.idPhoto;
//                 let address = user.address;
//                 let contact = user.contact;
//                 let idPhoto = "<img style='width: 100px; height: 100px' src='asserts/img/" + id + "'>"
//                 let status = user.status;
//
//                 var row = `<tr><td>${nic}</td><td>${email}</td><td>${password}</td><td>${idPhoto}</td><td>${address}</td><td>${contact}</td><td>${status}</td></tr>`;
//                 $('#customerTable>tbody').append(row);
//             }
//         }
//
//     })
// }
//
// function getAllCars() {
//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/car",
//         success: function (resp) {
//             console.log(resp);
//             $('#carTable>tbody').empty();
//
//             for (let car of resp.data) {
//                 let registrationNo = car.registrationNo;
//                 let brand = car.brand;
//                 let type = car.type;
//                 let id = car.frontImage;
//                 let numberOfPassengers = car.numberOfPassengers;
//                 let transmissionType = car.transmissionType;
//                 let fuelType = car.fuelType;
//                 let color = car.color;
//                 let dailyRate = car.dailyRate;
//                 let monthlyRate = car.monthlyRate;
//                 let freeMileagePerDay = car.freeMileagePerDay;
//                 let freeMileagePerMonth = car.freeMileagePerMonth;
//                 let pricePerKm = car.pricePerKm;
//                 let kmMeterValue = car.kmMeterValue;
//                 let lastReturnDate = car.lastReturnDate;
//                 let isAvailable = car.isAvailable
//                 let isDamaged = car.isDamaged;
//                 let underMaintenance = car.underMaintenance;
//                 let frontImage = "<img style='width: 100px; height: 100px' src='asserts/img/" + id + "'>"
//                 let lossDamageWaiver = car.lossDamageWaiver;
//
//                 var row = `<tr><td>${registrationNo}</td><td>${brand}</td><td>${type}</td><td>${frontImage}</td><td>${numberOfPassengers}</td><td>${transmissionType}</td><td>${fuelType}</td><td>${color}</td><td>${dailyRate}</td><td>${monthlyRate}</td><td>${freeMileagePerDay}</td><td>${freeMileagePerMonth}</td><td>${pricePerKm}</td><td>${kmMeterValue}</td><td>${lastReturnDate}</td><td>${isAvailable}</td><td>${isDamaged}</td><td>${underMaintenance}</td><td>${lossDamageWaiver}</td></tr>`;
//                 $('#carTable>tbody').append(row);
//             }
//         }
//
//     })
// }
//
// function requestStatusTableDataLoad() {
//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/rentalRequest",
//         async: true,
//         success: function (resp) {
//             console.log(resp.data);
//             $('.admin-rentalRequestStatusTable>tbody').empty();
//
//             for (let request of resp.data) {
//                 let requestId = request.requestId;
//                 let nic = request.nic;
//                 let registrationNo = request.registrationNo;
//                 let did = request.did;
//                 let pickupDate = request.pickupDate;
//                 let pickupTime = request.pickupTime;
//                 let pickupVenue = request.pickupVenue;
//                 let returnDate = request.returnDate;
//                 let returnTime = request.returnTime;
//                 let returnVenue = request.returnVenue;
//                 let requestStatus = request.requestStatus;
//                 let description = request.description;
//                 let id = request.bankSlip;
//                 console.log(id)
//                 let bankSlip = "<img style='width: 100px; height: 100px' src='../regUser/asserts/img/" + id + "'>"
//
//
//                 var row = `<tr><td>${requestId}</td><td>${nic}</td><td>${registrationNo}</td><td>${did}</td><td>${pickupDate}</td><td>${pickupTime}</td><td>${pickupVenue}</td><td>${returnDate}</td><td>${returnTime}</td><td>${returnVenue}</td><td>${requestStatus}</td><td>${description}</td><td>${bankSlip}</td></tr>`;
//                 $('.admin-rentalRequestStatusTable>tbody').append(row);
//             }
//
//
//         }
//
//     });
//
// }
//
// $('#accept').click(function () {
//     let reqId = $('#requestId').val();
//     $.ajax({
//         method: "PUT",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/rentalRequest/acceptRentalRequest/" + "Accept" + "/" + reqId,
//         success: function (resp) {
//             if (resp.code == 200) {
//                 requestStatusTableDataLoad();
//                 confirm("Accept Request No-"+reqId);
//             }
//         }
//     })
//     requestStatusTableDataLoad();
// })
// $('#denied').click(function () {
//     let reqId = $('#requestId').val();
//     $.ajax({
//         method: "PUT",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/rentalRequest/acceptRentalRequest/" + "Denied" + "/" + reqId,
//         success: function (resp) {
//             if (resp.code == 200) {
//                 requestStatusTableDataLoad();
//                 confirm("Denied Request No-"+reqId);
//             }
//         }
//     })
//     requestStatusTableDataLoad();
// })
// $('#pending').click(function () {
//     let reqId = $('#requestId').val();
//     $.ajax({
//         method: "PUT",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/rentalRequest/acceptRentalRequest/" + "Pending" + "/" + reqId,
//         success: function (resp) {
//             if (resp.code == 200) {
//                 requestStatusTableDataLoad();
//                 confirm("Pending Request No-"+reqId);
//             }
//         }
//     })
//     requestStatusTableDataLoad();
// })
//
// $('.admin-rentalRequestStatusTable').click(function () {
//     var id = $(this).closest("tr").find('tr:nth-child(1)').text();
//     console.log(id)
// });
//
// $('#changeAssignedDriverButton').click(function () {
//     console.log("op")
//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/drivers/allAvailableDriversDetails",
//         success: function (resp) {
//             console.log(resp);
//             $('.admin-diver>tbody').empty();
//             for (let driver of resp.data) {
//                 let did = driver.did;
//                 let name = driver.name;
//                 let contact = driver.contact;
//                 let isAvailable = driver.isAvailable;
//
//                 var row = `<tr><td>${did}</td><td>${name}</td></tr>`;
//                 $('.admin-diver>tbody').append(row);
//             }
//
//
//         }
//     })
// })
// $('#changeDriver').click(function () {
//     let requestId = $('#changeRequestId').val();
//     let did = $('#changeDid').val();
//     $.ajax({
//         method: "PUT",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/rentalRequest/changeDriver/" + did + "/" + requestId,
//         success: function (resp) {
//             console.log(resp.message);
//             if (resp.code==200){
//                 confirm("Driver Change Success-"+requestId);
//                 requestStatusTableDataLoad();
//             }
//
//
//         }
//     })
// })
//
// $('#addMaintain').click(function () {
//     let requestId = $('#registrationNo').val();
//     $.ajax({
//         method: "PUT",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/car/addMaintain/" + requestId,
//         success: function (resp) {
//             console.log(resp.message);
//             getAllCars();
//             if (resp.code == 200) {
//                 confirm("Car is Added To The Maintain Mode");
//             }
//         }
//     })
// })
// /*new*/
// $(document).ready(function () {
//     $(document).on('click', '#carTable tbody tr', function () {
//         var col0 = $(this).find('td:eq(0)').text();
//         var col1 = $(this).find('td:eq(1)').text();
//         var col2 = $(this).find('td:eq(2)').text();
//         var col3 = $(this).find('td:eq(3)').text();
//         var col4 = $(this).find('td:eq(4)').text();
//         var col5 = $(this).find('td:eq(5)').text();
//         var col6 = $(this).find('td:eq(6)').text();
//         var col7 = $(this).find('td:eq(7)').text();
//         var col8 = $(this).find('td:eq(8)').text();
//         var col9 = $(this).find('td:eq(9)').text();
//         var col10 = $(this).find('td:eq(10)').text();
//         var col11 = $(this).find('td:eq(11)').text();
//         var col12 = $(this).find('td:eq(12)').text();
//         var col13 = $(this).find('td:eq(13)').text();
//         var col14 = $(this).find('td:eq(14)').text();
//         var col15 = $(this).find('td:eq(18)').text();
//
//         $('#registrationNo').val(col0);
//         $('#brand').val(col1);
//         $('#type').val(col2);
//         $('#frontImage').val(col3);
//         $('#numberOfPassengers').val(col4);
//         $('#transmissionType').val(col5);
//         $('#fuelType').val(col6);
//         $('#color').val(col7);
//         $('#dailyRate').val(col8);
//         $('#monthlyRate').val(col9);
//         $('#freeMileagePerDay').val(col10);
//         $('#freeMileagePerMonth').val(col11);
//         $('#pricePerKm').val(col12);
//         $('#kmMeterValue').val(col13);
//         $('#lastReturnDate').val(col14);
//         $('#lossDamageWaiver').val(col15);
//
//
//     })
//     console.log("curRowId");
//
// })
// $(document).ready(function () {
//     $(document).on('click', '#admin-rentalRequestStatusTable tbody tr', function () {
//         var col0 = $(this).find('td:eq(0)').text();
//         var col1 = $(this).find('td:eq(1)').text();
//         var col2 = $(this).find('td:eq(2)').text();
//         var col3 = $(this).find('td:eq(3)').text();
//         var col4 = $(this).find('td:eq(4)').text();
//         var col5 = $(this).find('td:eq(5)').text();
//         var col6 = $(this).find('td:eq(6)').text();
//         var col7 = $(this).find('td:eq(7)').text();
//         var col8 = $(this).find('td:eq(8)').text();
//
//         $('#reqId').val(col0);
//         $('#did').val(col3);
//         $('#regNo').val(col2);
//         $('#pickDate').val(col4);
//         $('#returnDate').val(col7);
//
//
//     })
//
// })
// $('#calculatePayment').click(function () {
//     let registerNO = $('#regNo').val();
//     let noOfDates = $('#NoOFDates').val();
//
//
//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/car/getASpecificCar/" + registerNO,
//         success: function (resp) {
//             console.log(resp);
//             for (let car of resp.data) {
//                 let registrationNo = car.registrationNo;
//                 let brand = car.brand;
//                 let type = car.type;
//                 let numberOfPassengers = car.numberOfPassengers;
//                 let transmissionType = car.transmissionType;
//                 let fuelType = car.fuelType;
//                 let color = car.color;
//                 let dailyRate = car.dailyRate;
//                 let monthlyRate = car.monthlyRate;
//                 let freeMileagePerDay = car.freeMileagePerDay;
//                 let freeMileagePerMonth = car.freeMileagePerMonth;
//                 let pricePerKm = car.pricePerKm;
//                 var kmMeterValue = car.kmMeterValue;
//                 let lastReturnDate = car.lastReturnDate;
//                 let isAvailable = car.isAvailable
//                 let isDamaged = car.isDamaged;
//                 let underMaintenance = car.underMaintenance;
//                 let frontImage = car.frontImage;
//                 let lossDamageWaiver = car.lossDamageWaiver;
//                 $('#lossDamageWaver').val(lossDamageWaiver);
//                 generatePayment(dailyRate, monthlyRate, freeMileagePerDay, freeMileagePerMonth, pricePerKm, kmMeterValue, lossDamageWaiver);
//
//             }
//
//         }
//
//     })
//
//
//     function generatePayment(dailyRate, monthlyRate, freeMileagePerDay, freeMileagePerMonth, pricePerKm, kmMeterValue, lossDamageWaiver) {
//
//         let currentMeterValue = $('#MeeterValue').val();
//         let nowKmValue = currentMeterValue - kmMeterValue;
//         let did = $('#did').val();
//         console.log(currentMeterValue)
//         console.log(kmMeterValue)
//         console.log(nowKmValue)
//
//         if (noOfDates <= 29) {
//             console.log("-30")
//             if (nowKmValue <= 100) {
//                 console.log(-100)
//                 let payablePrice = (noOfDates * dailyRate);
//                 console.log(payablePrice);
//                 if (did != "No One") {
//                     let withDriverPay = payablePrice + (1000 * noOfDates);
//                     $('#payment').val(withDriverPay);
//                 } else {
//                     $('#payment').val(payablePrice);
//                 }
//             } else {
//                 console.log(+100)
//                 let exKM = nowKmValue - 100;
//                 let payablePrice = (exKM * pricePerKm) + (dailyRate * noOfDates);
//                 console.log(payablePrice);
//                 if (did != "No One") {
//                     let withDriverPay = payablePrice + (1000 * noOfDates);
//                     $('#payment').val(withDriverPay);
//                 } else {
//                     $('#payment').val(payablePrice);
//                 }
//             }
//         } else {
//             console.log("30+")
//             let noOfMonth = Math.round(noOfDates / 30);
//             console.log(noOfMonth);
//             let noOFExtraDates = noOfDates % 30;
//             if (nowKmValue <= 2400) {
//                 console.log(-2400)
//                 let payablePrice = (noOfMonth * monthlyRate) + (noOFExtraDates * dailyRate);
//                 console.log(payablePrice);
//                 if (did != "No One") {
//                     let withDriverPay = payablePrice + (1000 * noOfDates);
//                     $('#payment').val(withDriverPay);
//                 } else {
//                     $('#payment').val(payablePrice);
//                 }
//             } else {
//                 console.log(+2400)
//                 let exKM = nowKmValue - 2400;
//                 let payablePrice = (noOfMonth * monthlyRate) + (noOFExtraDates * dailyRate) + (exKM * pricePerKm);
//                 console.log(payablePrice);
//                 if (did != "No One") {
//                     let withDriverPay = payablePrice + (1000 * noOfDates);
//                     $('#payment').val(withDriverPay);
//                 } else {
//                     $('#payment').val(payablePrice);
//                 }
//             }
//         }
//     }
//
//
// })
//
// $('#pay').click(function () {
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
//
//     today = mm + '/' + dd + '/' + yyyy;
//     let pid = Math.floor((Math.random() * 1000) + 1);
//     let damageAmount = $('#lossDamageWaver').val();
//     let rentalPayment = $('#payment').val();
//     let date = today;
//     let reqID = $('#reqId').val();
//     console.log(reqID);
//     console.log(pid);
//     console.log(damageAmount);
//     console.log(rentalPayment);
//
//     $.ajax({
//         method: "POST",
//         contentType: "application/json",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/payment/addPayment",
//         data: JSON.stringify({
//             'pid': pid,
//             'wavePayment': damageAmount,
//             'rentalPayment': rentalPayment,
//             'date': date,
//             'requestId': reqID
//         }),
//         success: function (resp) {
//             if (resp.code == 201) {
//                 console.log(resp.data)
//                 setCarIsAvailableYESandChangeMeterValue();
//                 confirm("payment Complete");
//             }
//
//         }
//     })
// })
//
// function setCarIsAvailableYESandChangeMeterValue() {
//     let meterValue = $('#MeeterValue').val();
//     let reqID = $('#reqId').val();
//
//     console.log(meterValue)
//     console.log(reqID)
//     $.ajax({
//         method: "PUT",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/payment/updateOtherTable/" + reqID + "/" + meterValue,
//         success: function (resp) {
//             if (resp.code == 201) {
//                 console.log("uuu")
//             }
//         }
//     })
//
//
// }
//
//
// $('#userAccept').click(function () {
//     let nic = $('#nic').val();
//     $.ajax({
//         method: "PUT",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/user/acceptUser/" + "Accept" + "/" + nic,
//         success: function (resp) {
//             if (resp.code == 200) {
//                 confirm("Accept User " + nic);
//                 getAllUsers();
//             }
//         }
//
//     })
//     getAllUsers();
// })
// $('#userDenied').click(function () {
//     let nic = $('#nic').val();
//     $.ajax({
//         method: "PUT",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/user/acceptUser/" + "Denied" + "/" + nic,
//         success: function (resp) {
//             if (resp.code == 200) {
//                 confirm("Denied User " + nic);
//                 getAllUsers();
//             }
//         }
//
//     })
//     getAllUsers();
// })
// $('#UserPending').click(function () {
//     let nic = $('#nic').val();
//     $.ajax({
//         method: "PUT",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/user/acceptUser/" + "Pending" + "/" + nic,
//         success: function (resp) {
//             if (resp.code == 200) {
//                 confirm("Pending User " + nic);
//                 getAllUsers();
//             }
//         }
//
//     })
//     getAllUsers();
//
// })
//
// //dashboard Section
// function dashboardLoad() {
//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/Dashboard/dashboardDetails",
//         success: function (resp) {
//             console.log(resp);
//             $('#registeredUsers').text(resp.data.registeredUsers);
//             $('#totalBookings').text(resp.data.totalBookings);
//             $('#activeBookings').text(resp.data.activeBookings);
//             $('#availableCars').text(resp.data.availableCars);
//             $('#reservedCars').text(resp.data.reservedCars);
//             $('#carsNeedMaintenance').text(resp.data.carsNeedMaintenance);
//             $('#carsUnderMaintenance').text(resp.data.carsUnderMaintenance);
//             $('#availableDrivers').text(resp.data.availableDrivers);
//             $('#occupiedDrivers').text(resp.data.occupiedDrivers);
//
//
//         }
//
//     })
//
//
// }
// function calculateIncome() {
//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/rentalRequest/getIncome/2021",
//         success: function (resp) {
//             console.log(resp.data);
//             $('#yIncome').text(resp.data);
//         }
//     })
// }
//
// $(document).ready(function () {
//     $(document).on('click', '#customerTable tbody tr', function () {
//         var col0 = $(this).find('td:eq(0)').text();
//         $('#nic').val(col0);
//
//
//     })
//     $(document).on('click', '.admin-rentalRequestStatusTable tbody tr', function () {
//         var col0 = $(this).find('td:eq(0)').text();
//         $('#changeRequestId').val(col0);
//
//
//     })
//     $(document).on('click', '.admin-diver tbody tr', function () {
//         var col0 = $(this).find('td:eq(0)').text();
//         $('#changeDid').val(col0);
//
//
//     })
//     $(document).on('click', '.admin-rentalRequestStatusTable tbody tr', function () {
//         var col0 = $(this).find('td:eq(0)').text();
//         $('#requestId').val(col0);
//
//
//     })
// })
//
// $('#addDriver').click(function () {
//         let did=$('#driverID').val();
//         let name=$('#dName').val();
//         let contact=$('#contact').val();
//         let isAvailable=$('#isAvailable').val();
//
//         $.ajax({
//             method:'POST',
//             contentType: "application/json",
//             url:"http://localhost:8080/BackEnd_war_exploded/api/v1/drivers/addDriver",
//             data: JSON.stringify({
//                 'did': did,
//                 'name': name,
//                 'contact': contact,
//                 'isAvailable': isAvailable,
//             }),
//             success: function (resp) {
//                 if (resp.code == 201) {
//                     console.log(resp.data)
//                     loadAllDrivers();
//                     confirm("Driver Added!");
//                 }
//
//             }
//
//         })
// })
// loadAllDrivers();
// function loadAllDrivers() {
//     $.ajax({
//         method: "GET",
//         url: "http://localhost:8080/BackEnd_war_exploded/api/v1/drivers/allDrivers",
//         async: true,
//         success: function (resp) {
//             console.log(resp.data);
//             $('#driverTable>tbody').empty();
//
//             for (let request of resp.data) {
//                 let did = request.did;
//                 let name = request.name;
//                 let contact = request.contact;
//                 let isAvailable = request.isAvailable;
//
//                 var row = `<tr><td>${did}</td><td>${name}</td><td>${contact}</td><td>${isAvailable}</td></tr>`;
//                 $('#driverTable>tbody').append(row);
//             }
//         }
//
//     });
//
// }