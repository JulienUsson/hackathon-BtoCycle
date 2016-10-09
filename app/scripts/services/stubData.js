angular.module('hackathonApp').factory('stubData', function() {
  var service = {
    'getUser': getUser,
    'getPartners': getPartners,
    'getMapInit': getMapInit,
    'getMarkers': getMarkers,
    'getNews': getNews,
    'getObjectifChart': getObjectifChart,
    'getPerformanceChart': getPerformanceChart
  }
  return service;

  function getUser() {
    return {
      'username': 'Mathilde Dupont',
      'company': 'Sopra Steria',
      'avatar': 'images/components/score/avatar.png',
      'score': 500,
      'kms': 5,
      'objectif': 25,
      'todayKms': 0.1
    };
  }

  function getPartners() {
    return [
      {'title': 'EUM', 'subTitle': 'École Universitaire de Management', 'imageSrc': 'images/components/partner/EUM.png'},
      {'title': 'ISIMA', 'subTitle': 'Institut Supérieur d\'Informatique, de Modélisation et de leurs Applications', 'imageSrc': 'images/components/partner/ISIMA.png'},
      {'title': 'SMTC', 'subTitle': '', 'imageSrc': 'images/components/partner/SMTC.png'},
      {'title': 'Ville de Clermont-Ferrand', 'subTitle': '', 'imageSrc': 'images/components/partner/Ville_Clermont.jpg'}
    ];
  }

  function getNews() {
    return [
      {'title': 'titre', 'content': 'contenu', 'liked': false},
      {'title': 'titre', 'content': 'contenu', 'liked': true},
      {'title': 'titre', 'content': 'contenu', 'liked': false}
    ];
  }

  function getMapInit() {
    return {
      'center': { latitude: 45.760351, longitude: 3.134832 },
      'zoom': 18
    };
  }

  function getObjectifChart() {
    var objectif = [];
    objectif.labels = ["Objectif à ateindre", "Objectif"];
    objectif.data = [10, 90];
    objectif.colors = ['#388e3c', '#bdc3c7'];
    return objectif;
  }

  function getPerformanceChart() {
    var performance = [];
    performance.labels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    performance.series = ['Mes performances', 'Performances moyennes'];
    performance.data = [
      [0.3, 0.5, 0.7, 0.2, 0.1, 0, 0],
      [0.5, 0.7, 0.9, 0.7, 0.6, 0.5, 0.4]
    ];
    return performance;
  }

  function getMarkers() {
    var markers= [];
    markers.push(createMarker(1, "sopra", 45.760351, 3.134832, 4, 5));
    markers.push(createMarker(1, "test", 45.760328, 3.135598, 0, 5));
    return markers;
  }

  function createMarker(id, title, latitude, longitude, available, nbPlaces) {
    var icon = 'images/components/maps/';
    icon += (available > 0)?'green_':'red_';
    icon += (available == nbPlaces)?'red':'green';
    icon += '.png';

    return {
      'id': id,
      'title': title,
      'available': available,
      'nbPlaces': nbPlaces,
      'coords': { 'latitude': latitude, 'longitude': longitude },
      'options': {
        'icon': icon
      }
    };
  }
});
