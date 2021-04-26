function  light(value){
  var image;
if(value == 0) {
  image = "https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg";


} else {
  image = "https://cdn.mos.cms.futurecdn.net/8URLqwFeJihbNpn3gByhg3-1200-80.jpg";
}
document.getElementById('bulb').src=image;
}
