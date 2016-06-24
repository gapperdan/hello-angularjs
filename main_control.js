angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'AngularJS Tutorial Example';
    vm.searchInput = '';
    vm.shows = [
        {
            title: 'Agents Of Shield',
            year: 2012,
            favorite: false
        },
        {
            title: 'Friends',
            year: 1994,
            favorite: false
        },
        {
            title: 'Walking Dead',
            year: 2010,
            favorite: true
        },
        {
            title: 'MacGyver',
            year: 1985,
            favorite: true
        },
        {
            title: 'Firefly',
            year: 2002,
            favorite: true
        },
        {
            title: 'Banshee',
            year: 2013,
            favorite: false
        },
        {
            title: 'Seinfeld',
            year: 1989,
            favorite: true
        },
        {
            title: 'Heroes',
            year: 2006,
            favorite: false
        },
        {
            title: 'The A-Team',
            year: 1986,
            favorite: false
        },
        {
            title: 'The Voice',
            year: 2010,
            favorite: false
        },
        {
            title: 'The Big Bang Theory',
            year: 2007,
            favorite: false
        },
        {
            title: 'The Flash',
            year: 2014,
            favorite: false
        }
    ];

    vm.orders = [
    {
        id: 1,
        title: 'Year Ascending',
        key: 'year',
        reverse: false
    },
    {
        id: 2,
        title: 'Year Descending',
        key: 'year',
        reverse: true
    },
    {
        id: 3,
        title: 'Title Ascending',
        key: 'title',
        reverse: false
    },
    {
        id: 4,
        title: 'Title Descending',
        key: 'title',
        reverse: true
    }
  ];

  vm.order = vm.orders[0];

  vm.new = {};

  vm.addShow = function() {
    vm.shows.push(vm.new);
    vm.new = {};
  };

});
