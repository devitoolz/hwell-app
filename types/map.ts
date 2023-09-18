type Lat = number;
type Lng = number;
export type Cordinates = [Lat, Lng];

export type NaverMap = naver.maps.Map;

export type MapProps = {
  mapId?: string;
  initialCenter?: Cordinates;
  initialZoom?: number;
  initialMinZoom?: number;
  onLoad?: (map: NaverMap) => void;
};
