import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import sampleMe from '../../assets/graphics/sample-me-icon.png';
import sampleAll from '../../assets/graphics/sample-all-icon.png';
import homeMe from '../../assets/graphics/home-me-icon.png';
import homeAll from '../../assets/graphics/home-all-icon.png';
import shipMe from '../../assets/graphics/boat-me-icon.png';
import shipAll from '../../assets/graphics/boat-all-icon.png';

export const sampleMeIcon = L.icon({
  iconUrl: sampleMe,
  iconSize: [10, 10],
  iconAnchor: [2, 8], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});
L.Marker.prototype.options.sampleMe = sampleMeIcon;

export const sampleAllIcon = L.icon({
  iconUrl: sampleAll,
  iconSize: [10, 10],
  iconAnchor: [2, 8], //[left/right, top/bottom]
  popupAnchor: [0, -10], //[left/right, top/bottom]
});
L.Marker.prototype.options.sampleAll = sampleAllIcon;

export const shipMeIcon = L.icon({
  iconUrl: shipMe,
  iconSize: [10, 10],
  iconAnchor: [2, 8], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});
L.Marker.prototype.options.shipMe = shipMeIcon;


export const shipAllIcon = L.icon({
  iconUrl: shipAll,
  iconSize: [10, 10],
  iconAnchor: [2, 8], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});
L.Marker.prototype.options.shipAll = shipAllIcon;

export const homeMeIcon = L.icon({
  iconUrl: homeMe,
  iconSize: [10, 10],
  iconAnchor: [5, 10], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});
L.Marker.prototype.options.homeMe = homeMeIcon;

export const homeAllIcon = L.icon({
  iconUrl: homeAll,
  iconSize: [10, 10],
  iconAnchor: [2, 8], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});
L.Marker.prototype.options.homeAll = homeAllIcon;
