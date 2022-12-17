function capitalize(s) {
            return s[0].toUpperCase() + s.slice(1);
        }

function openTab(evt, tabName) {
    var i, tabcontent, tablinks

    tabcontent = document.getElementsByClassName("booking-form");
    for (i=0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    if (tabName === "flight") {
        document.getElementById("opened-tab").innerHTML = "Find flight";
    } else if (tabName === "hotel") {
        document.getElementById("opened-tab").innerHTML = "Hotel";
    } else if (tabName === "car") {
        document.getElementById("opened-tab").innerHTML = "Rental car";
    }
}

function validateFind() {
    var citypattern = /^([A-Z]{1}[a-z]{1,15}\s)*[A-Z]{1}[a-z]{1,15}$/;
    var adultpattern = /^[1-3]$/;
    var childrenpattern = /^[0-3]$/;

    var fromvalue = document.getElementById("flying-from-find").value;
    var regexfrom = citypattern.test(fromvalue);

    var tovalue = document.getElementById("flying-to-find").value;
    var regexto = citypattern.test(tovalue);

    var adults = document.getElementById("adult-number-find").value;
    var regexadults = adultpattern.test(adults);

    var children = document.getElementById("children-number-find").value;
    var regexchildren = childrenpattern.test(children);

    if (regexfrom == false) {
        alert("Enter a valid city you're flying from.");
        return false;
    }

    if (regexto == false) {
        alert("Enter a valid city you're flying to.");
        return false;
    }

    if (regexadults == false) {
        alert("Enter a valid number of adults (1-3).");
        return false;
    }

    if (regexchildren == false) {
        alert("Enter a valid number of children (0-3).");
        return false;
    }

    return true;
}

function validateHotel() {
    var citypattern = /^([A-Z]{1}[a-z]{1,15}\s)*[A-Z]{1}[a-z]{1,15}$/;
    var adultpattern = /^[1-3]$/;

    var cityvalue = document.getElementById("hotel-city").value;
    var regexcity = citypattern.test(cityvalue);

    var adults = document.getElementById("hotel-people").value;
    var regexadults = adultpattern.test(adults);

    if (regexcity == false) {
        alert("Enter a valid city where the hotel is.");
        return false;
    }

    if (regexadults == false) {
        alert("Enter a valid number of people (1-3).");
        return false;
    }

    return true;
}

function validateCar() {
    var timepattern = /^(([0-1]{1}[0-9]{1})|([2]{1}[1-3]{1})):[0-5]{1}[0-9]{1}$/;
    var citypattern = /^([A-Z]{1}[a-z]{1,15}\s)*[A-Z]{1}[a-z]{1,15}$/;

    var cityvalue1 = document.getElementById("pick-up").value;
    var regexcity1 = citypattern.test(cityvalue1);

    var cityvalue2 = document.getElementById("drop-off").value;
    var regexcity2 = citypattern.test(cityvalue2);

    var time1 = document.getElementById("time1").value;
    var regextime1 = timepattern.test(time1);

    var time2 = document.getElementById("time2").value;
    var regextime2 = timepattern.test(time2);

    if (regexcity1 == false) {
        alert("Please enter a valid city");
        return false;
    }

    if (regexcity2 == false) {
        alert("Please enter a valid city");
        return false;
    }

    if (regextime1 == false) {
        alert("Please enter a valid time");
        return false;
    }

    if (regextime2 == false) {
        alert("Please enter a valid time");
        return false;
    }

    return true;
}

function validateBooking() {
    var namepattern = /^[A-Z]{1}[a-z]{1,15}$/;
    var findnumberpattern = /^\d+$/;
    var citypattern = /^([A-Z]{1}[a-z]{1,15}\s)*[A-Z]{1}[a-z]{1,15}$/;
    var adultspattern = /^[1-3]$/;
    var childrenpattern = /^[0-3]$/;
    var flightnumberpattern = /^[0-9]{3}[1-9]{1}$/;
    var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;
    var phonepattern = /^([0]{1}[1-9]{1}[0-9]{7,8})||(\+[1-9]{1}[0-9]{0,2}[1-9]{1}[0-9]{7,8})$/;
    var passportpattern = /^[0-9]{9}$/;
    var timepattern = /^(([0-1]{1}[0-9]{1})|([2]{1}[1-3]{1})):[0-5]{1}[0-9]{1}$/;

    var firstname = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;    
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var departurecity = document.getElementById("departure-city").value;
    var destinationcity = document.getElementById("destination-city").value;
    var time1 = document.getElementById("time1").value;
    var time2 = document.getElementById("time2").value;
    var adults = document.getElementById("adults").value;
    var children = document.getElementById("children").value;
    var passport = document.getElementById("passport").value;


    var regexfirstname = namepattern.test(firstname);
    var regexlastname = namepattern.test(lastname);
    var regexemail = emailpattern.test(email);
    var regexphone = phonepattern.test(phone);
    var regexdeparturecity = citypattern.test(departurecity);
    var regexdestinationcity = citypattern.test(destinationcity);
    var regextime1 = timepattern.test(time1);
    var regextime2 = timepattern.test(time2);
    var regexadults = adultspattern.test(adults);
    var regexchildren = children.test(children);
    var regexpassport = passportpattern.test(passport);

    if (firstname.match(findnumberpattern) || lastname.match(findnumberpattern).length != 0) {
        alert("Name shouldn't have numbers in it.");
        return false;
    }

    if (regexfirstname == false) {
        alert("Please enter your first name with a capital letter.");
        return false;
    }

    if (regexlastname == false) {
        alert("Please enter your last name with a capital letter.");
        return false;
    }

    if (regexemail == false) {
        alert("Please enter a valid e-mail address.");
        return false;
    }

    if (regexphone == false) {
        alert("Please enter a valid phone number.");
        return false;
    }

    if (regexdeparturecity == false) {
        alert("Please enter a valid city");
        return false;
    }

    if (regexdestinationcity == false) {
        alert("Please enter a valid city");
        return false;
    }

    if (regextime1 == false) {
        alert("Please enter a valid time");
        return false;
    }

    if (regextime2 == false) {
        alert("Please enter a valid time");
        return false;
    }

    if (regexadults == false) {
        alert("Please enter a valid number of adults (1-3).");
        return false;
    }

    if (regexchildren == false) {
        alert("Please enter a valid number of children (0-3).");
        return false;
    }

    if (regexpassport == false) {
        alert("Please enter a valid passport number");
        return false;
    }

    return true;
}

function createFlight(element) {
    var node = document.createElement("A");
    node.className = "list-group-item";
    
    // Left
    var left = document.createElement("DIV");
    left.className = "left";

    var returnflight = document.createElement("DIV");
    returnflight.className = "offer-trip";
    var small1 = document.createElement("SMALL");
    if (element.return === true) {
        var textreturn = document.createTextNode("Return flight");
    } else {
        var textreturn = document.createTextNode("One direction");
    }

    var destination = document.createElement("DIV");
    destination.className = "offer-trip";
    var strong = document.createElement("STRONG");
    var h41 = document.createElement("H4");
    var textdestination = document.createTextNode("" + element.city);

    var from = document.createElement("DIV");
    from.className = "offer-trip";
    var textairport = document.createTextNode("" + element.airport);

    // Right
    var price = document.createElement("DIV");
    price.className = "price";

    var currency = document.createElement("DIV");
    currency.className = "offer-currency";
    var small2 = document.createElement("SMALL");
    var textcurrency = document.createTextNode("RSD");

    var amount = document.createElement("DIV");
    amount.className = "offer-amount";
    var h42 = document.createElement("H4");
    var textamount = document.createTextNode("" + element.price);

    // Appending
    small1.append(textreturn);
    returnflight.append(small1);
    left.append(returnflight);

    h41.append(textdestination);
    strong.append(h41);
    destination.append(strong);
    left.append(destination);

    from.append(textairport);
    left.append(from);

    small2.append(textcurrency);
    currency.append(small2);
    price.append(currency);

    h42.append(textamount);
    amount.append(h42);
    price.append(amount);

    node.append(left);
    node.append(price);

    document.getElementById("list-group").append(node);
}

function searchCity() {
    document.getElementById("list-group").innerHTML = "";
    if (document.getElementById("searchbox").value === "") {
        let req = new XMLHttpRequest();     
        req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status === 200) {
                var jsonList = JSON.parse(req.responseText);
                if (document.getElementById("returnflightcheck").checked != true) {                                        
                    jsonList.forEach(createFlight);
                } else if (document.getElementById("returnflightcheck").checked == true) {
                    var cityList = jsonList.filter(function(element){return element.return == true});
                    cityList.forEach(createFlight);
                }    
            }                       
        }
        req.open('GET', 'http://localhost:8000/city/all', true)
        req.send();
    } else {                
        let req = new XMLHttpRequest();     
        req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status === 200) {
                var jsonList = JSON.parse(req.responseText);
                if (document.getElementById("returnflightcheck").checked != true) {
                    var cityList = jsonList.filter(function(element){return element.city === capitalize(document.getElementById('searchbox').value)});
                    cityList.forEach(createFlight);
                } else if (document.getElementById("returnflightcheck").checked == true) {
                    var cityList = jsonList.filter(function(element){return element.city === capitalize(document.getElementById('searchbox').value) && element.return == true});
                    cityList.forEach(createFlight);
                }
            }                                           
        }
        req.open('GET', `http://localhost:8000/city/${capitalize(document.getElementById('searchbox').value)}` , true)
        req.send();
    }
}