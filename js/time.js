function now() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (hour < 12) {
        var ampm = "AM"
    } else {
        var ampm = "PM"
    }

    if (hour > 12) {
        hour = hour - 12;
    }
    
    if (minute < 10) {
        minute = "0" + minute;
    }

    document.getElementById("date").innerHTML = "<span id='hm'>" + hour + ":" + minute + "</span>" + " " + "<span id='ampm'>" + ampm + "</span>";
}

setInterval(now, 1000);