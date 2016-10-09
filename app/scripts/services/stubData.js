angular.module('hackathonApp').factory('stubData', function() {
  var service = {
    'getUser': getUser,
    'getPartners': getPartners,
    'getMapInit': getMapInit,
    'getMarkers': getMarkers,
    'getNews': getNews,
    'getObjectifChart': getObjectifChart,
    'getPerformanceChart': getPerformanceChart,
    'getReservations': getReservations
  }
  return service;

  function getUser() {
    return {
      'username': 'Mathilde Dupont',
      'company': 'Sopra Steria',
      'avatar': 'images/components/score/avatar.jpg',
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
      {'title': 'Challenge du mois', 'content': 'Lot variable dans l\'esprit \'Green\'' , 'liked': false},
      {'title': 'Récompense personnelle', 'content': 'Une place de cinéma', 'liked': false},
      {'title': 'Récompense service', 'content': 'Une plante pour son open-space', 'liked': true},
      {'title': 'Récompense entreprise', 'content': 'Rétribution financière pour l\'achat d\'un bien ou d\'un service à vocation écologique', 'liked': false},
      {'title': 'Sopra Steria Group organise son premier week-end InAuvergne', 'content': 'Étudiants ingénieurs et étudiants consultants collaborent ce week-end ensemble pour imaginer la mobilité verte de demain.', 'liked': true},
      {'title': 'Le tweet du jour de BtoCycle', 'content': 'BtoCycle : Parlez-en à vos collègues !', 'liked': false},

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
    objectif.labels = ["Objectif atteint", "Objectif à atteindre"];
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

  function getReservations() {
    var date = new Date(2016, 08, 16, 10, 10);
    return [{'date': date, 'time': date, 'station': 'Sopra'}];
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
