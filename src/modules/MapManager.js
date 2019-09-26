export default {

    getLatLng(num, street, suffix) {
        return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${num}+${street}+${suffix},+Nashville,+TN&key=AIzaSyB_5a30VuUkUUbs6arxItCU_a2jqrQjmyw`).then(result => result.json())
      }

}    