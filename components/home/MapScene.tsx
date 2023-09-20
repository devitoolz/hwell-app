import useMap from '@/hooks/useMap';
import Map from './Map';
import Markers from './Markers';
import { NaverMap } from '@/types/map';

// Marker 를 그려야 합니다.
// Marker 는 naver.map 객체 에 그려야 합니다. (전역참조)

const MapScene = () => {
  const { initializeMap } = useMap();

  const onLoad = (map: NaverMap) => {
    initializeMap(map);
  };
  return (
    <>
      <Map onLoad={onLoad} />
      <Markers />
    </>
  );
};

export default MapScene;
