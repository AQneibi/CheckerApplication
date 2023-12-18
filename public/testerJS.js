//document.title = "Location Echolocation Distribution"

const getLocation = () => {

  const success = (position) => {
    console.log(position);
    window.location.href = 'http://www.google.com/intl/en/privacy'; //Add dashboard page here
  }
  const error = () => {
    textContent = "Unable to retrieve location";
  }
  navigator.geolocation.getCurrentPosition(success, error);


}
document.querySelector('.find-location').addEventListener('click', getLocation);