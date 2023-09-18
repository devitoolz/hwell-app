import { INITIAL_CENTER, INITIAL_MIN_ZOOM, INITIAL_ZOOM } from '@/hooks/useMap';
import { MapProps, NaverMap } from '@/types/map';
import Script from 'next/script';
import { useRef } from 'react';

const Map = ({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  initialMinZoom = INITIAL_MIN_ZOOM,
  onLoad,
}: MapProps) => {
  const mapRef = useRef<NaverMap | null>(null);

  const initializeMap = () => {
    const mapOptions = {
      center: new naver.maps.LatLng(...initialCenter),
      zoom: initialZoom,
      minZoom: initialMinZoom,
      scaleControl: false,
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };
    const map = new naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    if (onLoad) {
      onLoad(map);
    }
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onLoad={initializeMap}
      />
      <div id={mapId} style={{ width: '100%', height: '100%' }}></div>
    </>
  );
};

export default Map;
