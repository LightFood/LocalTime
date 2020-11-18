<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var day = prompt("Enter the name of the month you wish to seek the days of:").toLowerCase();
day = day.charAt(0).toUpperCase() + day.slice(1);
switch (day) {
  case "January":
    alert(day + " has " + 31 + " days.");
    break;
  case "February":
    alert(day + " has " + 29 + " days.");
    break;
  case "March":
    alert(day + " has " + 31 + " days.");
    break;
  case "April":
    alert(day + " has " + 30 + " days.");
    break;
  case "May":
    alert(day + " has " + 31 + " days.");
    break;
  case "June":
    alert(day + " has " + 30 + " days.");
    break;
  case "July":
    alert(day + " has " + 31 + " days.");
    break;
  case "August":
    alert(day + " has " + 31 + " days.");
    break;
  case "September":
    alert(day + " has " + 30 + " days.");
    break;
  case "October":
    alert(day + " has " + 31 + " days.");
    break;
  case "November":
    alert(day + " has " + 30 + " days.");
    break;
  case "December":
    alert(day + " has " + 31 + " days.");
    break;
   
  default:
    day = "There is no month like that";
}
document.getElementById("demo").innerHTML = day;
</script>

</body>
</html>
