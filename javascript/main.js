const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header_nav_list');
    const navLinks = document.querySelectorAll('.header_nav_list li');
    burger.addEventListener('click' , () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";  
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s` 
            }
        })
        burger.classList.toggle('toggle');
    });   
};
const revealText = () => {
    const text = document.querySelectorAll('.text');
    window.onscroll = function() {
        let scroll = window.pageYOffset;
        if(scroll >= 100) {
            text.forEach(element => {
                element.classList.remove("hidden");
            })
        } else {
            text.forEach(element => {
                element.classList.add("hidden")
            })
        }
    };
};
const lightBox = () => {
    const thumbnail = document.querySelectorAll('.thumbnail')
    let close = document.querySelector('#close')
    let popup = document.querySelector('#popup')
    thumbnail.forEach(item => {
        item.addEventListener('click', function() {
            let address = this.getAttribute("src");
            let lightbox = document.querySelector('#lightbox')
            popup.style.display = 'block'
            lightbox.setAttribute("src", address)
        })
    })
    close.addEventListener('click', function() {
        popup.style.display = 'none'
    })
};
function initMap() {
    var location = {lat: -34.562, lng: 150.658616};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12, 
        center: location,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#ebe3cd"
                }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#523735"
                }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#f5f1e6"
                }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#c9b2a6"
                }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#dcd2be"
                }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#ae9e90"
                }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#dfd2ae"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#dfd2ae"
                }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#93817c"
                }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#a5b076"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#447530"
                }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#f5f1e6"
                }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#fdfcf8"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#f8c967"
                }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#e9bc62"
                }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#e98d58"
                }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                {
                    "color": "#db8555"
                }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                {
                    "visibility": "off"
                }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#806b63"
                }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#dfd2ae"
                }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#8f7d77"
                }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                {
                    "color": "#ebe3cd"
                }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                {
                    "color": "#dfd2ae"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                {
                    "color": "#b9d3c2"
                }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                {
                    "color": "#92998d"
                }
                ]
            }
        ]
    });           
    var marker = new google.maps.Marker({position: location, map: map});
};

