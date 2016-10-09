angular.module('hackathonApp').factory('stubData', function() {
  var service = {
    'getUser': getUser,
    'getPartners': getPartners
  }
  return service;

  function getUser() {
    return {
      'username': 'Mathilde Dupont',
      'company': 'Sopra Steria',
      'avatar': 'images/components/score/avatar.png',
      'score': 500,
      'kms': 5,
      'objectif': 25
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
});
