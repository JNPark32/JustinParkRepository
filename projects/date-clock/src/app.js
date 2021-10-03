function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

(function() {
  function checkTime(i) {
    return (i < 10) ? "0" + i : i;
  }
  function startTime() {
    var today = new Date(),
      h = ((checkTime(today.getHours()) + 11) % 12 + 1),
      m = checkTime(today.getMinutes()),
      s = checkTime(today.getSeconds());
    document.getElementById('hour').innerHTML = h
    document.getElementById('min').innerHTML = m
    document.getElementById('sec').innerHTML = s
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();
})();

(function() {
  function checkTime(i) {
    return (i < 10) ? "0" + i : i;
  }
  function startDate() {
    var monthNames = ["January", "February", "March", "April", "May","June","July",
                      "August", "September", "October", "November","December"];
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(monthNames[today.getMonth()]);
    /*var mm = String(today.getMonth() + 1).padStart(2, '0');*/
    var yyyy = today.getFullYear();

    document.getElementById('month').innerHTML = mm;
    /*document.getElementById('month').innerHTML = mm;*/
    document.getElementById('day').innerHTML = dd;
    document.getElementById('year').innerHTML = yyyy;

    if (dd[1] == "1") {
      return document.getElementById('suffix').innerHTML = "st";
    } else if (dd[1] == "2") {
      return document.getElementById('suffix').innerHTML = "nd";
    } else if (dd[1] == "3") {
      return document.getElementById('suffix').innerHTML = "rd";
    }  else {
      return document.getElementById('suffix').innerHTML = "th";
    }

   }
  startDate();
})();






// contact me
function contactme() {
  var x = document.getElementById("contact-me");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}





const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
 const now = new Date();

 const seconds = now.getSeconds();
 const secondsDegrees = ((seconds / 60) * 360) + 90;
 secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

 const mins = now.getMinutes();
 const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
 minsHand.style.transform = `rotate(${minsDegrees}deg)`;

 const hour = now.getHours();
 const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
 hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
