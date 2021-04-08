export const mapTiles = [
    {
      name: 'OpenStreetMap',
      attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    },
    {
      name: 'ArcGIS',
      attribution: 'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
      'World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
    },
    {
      name: 'Swiss OSM Standard',
      attribution: '',
      url: 'http://tile.osm.ch/switzerland/{z}/{x}/{y}.png'
    },
    {
      name: 'OSM Swiss Style',
      attribution: '',
      url: 'http://tile.osm.ch/osm-swiss-style/{z}/{x}/{y}.png'
    },
    {
      name: 'OpenTopoMap',
      attribution: '',
      url: ' https://opentopomap.org/{z}/{x}/{y}.png'
    },
    {
      name: 'GoogleMaps - Terrain',
      attribution: '&copy <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#google-earth">GoogleMaps</a> Data 2021',
      url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
    },
    {
      name: 'GoogleMaps Sattelite',
      attribution: '&copy <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#google-earth">GoogleMaps</a> Data 2021',
      url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
    },
];
