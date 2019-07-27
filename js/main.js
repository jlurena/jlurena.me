(function($) {
  'use strict';

  $(window).on('load', function() {
    /* ================================= */
    /* :::::::::: 1. Loading ::::::::::: */
    /* ================================= */

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $('#video').css({ display: 'none' });
    }

    $('.loader-icon')
      .delay(500)
      .fadeOut();
    $('#page-loader')
      .delay(700)
      .fadeOut('slow');

    $('.icon-mobile-wrapper').on('click', function() {
      $(this).toggleClass('s-active');
      $('#navigation').toggleClass('menu-mobile animated fadeIn');
    });

    /* ================================= */
    /* ::::::::: 2. OwlCarousel :::::::: */
    /* ================================= */

    $('#owl-blog').owlCarousel({
      // Most important owl features
      items: 1,
      itemsCustom: false,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 3],
      itemsTabletSmall: false,
      itemsMobile: [479, 1],
      singleItem: false,
      itemsScaleUp: false,

      //Basic Speeds
      slideSpeed: 200,
      paginationSpeed: 800,
      rewindSpeed: 1000,

      //Autoplay
      autoPlay: true,
      stopOnHover: false,

      //Pagination
      pagination: false,
      paginationNumbers: false,

      // Responsive
      responsive: true,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: window
    });

    /* ================================= */
    /* ::::::::: 3. NiceScroll ::::::::: */
    /* ================================= */

    $('.content-wrapper').niceScroll({
      cursorcolor: '#3d4a6e',
      cursorwidth: '6px',
      cursorborderradius: '5px',
      cursorborder: '0px',
      zindex: 999999,
      railpadding: {
        top: 0,
        right: 1,
        left: 0,
        bottom: 0
      }
    });

    /* ================================= */
    /* ::::::::: 5. Isotope :::::::::::: */
    /* ================================= */

    // init Isotope
    var $container = $('.grid').isotope({
      itemSelector: '.element-item',
      masonry: {
        columnWidth: 200
      }
    });

    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this)
          .find('.number')
          .text();
        return parseInt(number, 10) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this)
          .find('.name')
          .text();
        return name.match(/ium$/);
      }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[filterValue] || filterValue;
      $container.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
      });

      /* ================================= */
      /* :::::::: 8. Contact form :::::::: */
      /* ================================= */

      $('#submit').on('click', function() {
        // validate and process form here
        $('#ajax-contact-form').validate({
          rules: {
            name: {
              required: true
            },

            email: {
              required: true,
              email: true
            },

            msg: {
              required: true
            }
          },

          messages: {
            name: {
              required: "<i class='fa fa-exclamation-triangle name'></i>"
            },

            email: {
              required: "<i class='fa fa-exclamation-triangle email'></i>",
              email: "<i class='fa fa-exclamation-triangle email'></i>"
            },

            msg: {
              required: "<i class='fa fa-exclamation-triangle message'></i>"
            }
          },

          // JQuery's awesome submit handler.
          submitHandler: function(form) {
            // Create variables from the form
            var name = $('input#name').val();
            var email = $('input#email').val();
            var msg = $('textarea#msg').val();

            // Create variables that will be sent in a URL string to contact.php
            var dataString = '&name=' + name + '&email=' + email + '&msg=' + msg;

            $.ajax({
              type: 'POST',
              url: 'php/contact.php',
              data: dataString,
              success: function(data) {
                if (data == 'OK') {
                  var result =
                    '<div class="notification_ok"><i class="fa fa-check"></i> Your email was sent, thanks!</div>';
                  $('#ajax-contact-form')
                    .find('input[type=text], input[type=email], textarea')
                    .val('');
                } else {
                  result = data;
                }
                $('#note').html(result);
              }
            });
            return false;
          }
        });
      });

      /* ================================= */
      /* :::::::: 9. Google Map :::::::::: */
      /* ================================= */

      // Google map coordinates
      var latitude = 40.8498223,
        longitude = -73.9104652,
        map_zoom = 9;

      //google map custom marker icon - .png fallback for IE11
      var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
      var marker_url = is_internetExplorer11 ? 'images/icon-location.png' : 'images/icon-location.png';

      //define the basic color of your map, plus a value for saturation and brightness
      var main_color = '#2d313f',
        saturation_value = -20,
        brightness_value = 5;

      //we define here the style of the map
      var style = [
        {
          //set saturation for the labels on the map
          elementType: 'labels',
          stylers: [
            {
              saturation: saturation_value
            }
          ]
        },
        {
          //poi stands for point of interest - don't show these lables on the map
          featureType: 'poi',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          //don't show highways lables on the map
          featureType: 'road.highway',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          //don't show local road lables on the map
          featureType: 'road.local',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          //don't show arterial road lables on the map
          featureType: 'road.arterial',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          //don't show road lables on the map
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        //style different elements on the map
        {
          featureType: 'transit',
          elementType: 'geometry.fill',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry.fill',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        },
        {
          featureType: 'poi.government',
          elementType: 'geometry.fill',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        },
        {
          featureType: 'poi.sports_complex',
          elementType: 'geometry.fill',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        },
        {
          featureType: 'poi.attraction',
          elementType: 'geometry.fill',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        },
        {
          featureType: 'poi.business',
          elementType: 'geometry.fill',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry.fill',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry.fill',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        },
        {
          featureType: 'landscape',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry.fill',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.fill',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              hue: main_color
            },
            {
              visibility: 'on'
            },
            {
              lightness: brightness_value
            },
            {
              saturation: saturation_value
            }
          ]
        }
      ];

      //set google map options
      var map_options = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: map_zoom,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: style
      };
      //inizialize the map
      var map = new google.maps.Map(document.getElementById('google-container'), map_options);
      //add a custom marker to the map
      var privateEm = '&#101;&#108;&#106;&#101;&#97;&#110;&#64;&#108;&#105;&#118;&#101;&#46;&#99;&#111;&#109;';

      var contentString =
        '<div class="contact-box left">' +
        '<h3>CONTACT INFORMATION.</h3>' +
        '<ul>' +
        '<li><i class="fa fa-fw fa-map-marker"></i>Bronx, NY</li>' +
        '<li><i class="fa fa-fw fa-envelope-o"></i><a href="mailto:eljean@live.com">' +
        privateEm +
        '</a></li>' +
        '<li><i class="fa fa-fw fa-globe"></i><a href="">jlurena.me</a></li>' +
        '</ul>' +
        '</div>';

      var infowindow = new google.maps.InfoWindow({ content: contentString, maxWidth: 300 });

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
        title: 'Bronx, NY',
        visible: true,
        icon: marker_url
      });

      infowindow.open(map, marker);

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      });

      google.maps.event.addDomListener(window, 'resize', function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      });

      //add custom buttons for the zoom-in/zoom-out on the map
      function CustomZoomControl(controlDiv, map) {
        //grap the zoom elements from the DOM and insert them in the map
        var controlUIzoomIn = document.getElementById('zoom-in'),
          controlUIzoomOut = document.getElementById('zoom-out');
        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);

        // Setup the click event listeners and zoom-in or out according to the clicked element
        google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
          map.setZoom(map.getZoom() + 1);
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
          map.setZoom(map.getZoom() - 1);
        });
      }

      var zoomControlDiv = document.createElement('div');
      var zoomControl = new CustomZoomControl(zoomControlDiv, map);

      //insert the zoom div on the top left of the map
      map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
    });
  });
})(jQuery);
