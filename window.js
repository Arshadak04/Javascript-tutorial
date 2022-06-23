/*

Browser Object Model (BOM) 
BOM allows Javascript to talk to the browser.

WINDOW OBJECT
* The window object is supported by all browsers. It represents the browser's window
* All global JavaScript objects, functions, and variables automatically become members of the window object.
* Global functions are methods of the window object.
* Global variables are properties of the window object.

Window Size
Two properties can be used to determine the size of the browser window.

Both properties return the sizes in pixels:

window.innerHeight - the inner height of the browser window (in pixels)
window.innerWidth - the inner width of the browser window (in pixels)

Window Screen
The window.screen object can be written without the window prefix.

Properties:

screen.width
screen.height
screen.availWidth -> minus the window taskbar
screen.availHeight -> -> minus the window taskbar
screen.colorDepth
screen.pixelDepth

Window Screen Color Depth
The screen.colorDepth property returns the number of bits used to display one color.

All modern computers use 24 bit or 32 bit hardware for color resolution:

24 bits =      16,777,216 different "True Colors"
32 bits = 4,294,967,296 different "Deep Colors"
Older computers used 16 bits: 65,536 different "High Colors" resolution.

Very old computers, and old cell phones used 8 bits: 256 different "VGA colors"(Video Graphics Array).

Window Location
The window.location object can be written without the window prefix.

Some examples:

window.location.href returns the href (URL) of the current page
window.location.hostname returns the domain name of the web host
window.location.pathname returns the path and filename of the current page
window.location.protocol returns the web protocol used (http: or https:)
window.location.assign() loads a new document


www.fb.com/post/332323?comment=4;

host = www.fb.com
pathname = /post/23233?comment=4;
protocol = http/ https
href = 


Window History
The window.history object can be written without the window prefix.

window.history || history

To protect the privacy of the users, there are limitations to how JavaScript can access this object.

Some methods:

history.back() - same as clicking back in the browser
history.forward() - same as clicking forward in the browser

Window Navigator
The window.navigator object can be written without the window prefix.

Some examples:

navigator.appName
navigator.appCodeName
navigator.platform
navigator.product browser engine
navigator.language
navigator.onLine

Warning !!!
The information from the navigator object can often be misleading, and should not be used to detect browser versions because:

Different browsers can use the same name
The navigator data can be changed by the browser owner
Some browsers misidentify themselves to bypass site tests
Browsers cannot report new operating systems, released later than the browser


Web Geolocation API
Locate the User's Position
The HTML Geolocation API is used to get the geographical position of a user.

Since this can compromise privacy, the position is not available unless the user approves it.

Using the Geolocation API
The getCurrentPosition() method is used to return the user's position

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}


*/
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((data) => console.log(data));
  } else {
    document.getElementsByTagName("body").innerHTML =
      "Geolocation is not supported by this browser.";
  }
}

getLocation();
