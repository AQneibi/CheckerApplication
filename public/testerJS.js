//document.title = "Location Echolocation Distribution"

const getLocation = () => {


  const success = (position) => {
    console.log(position);
    //console.log(position.coords.longitude);
  }
  const error = () => {
    textContent = "Unable to retrieve location";
  }
  navigator.geolocation.getCurrentPosition(success, error);


}
document.querySelector('.find-location').addEventListener('click', getLocation);