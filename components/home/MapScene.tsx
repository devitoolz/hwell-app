import Map from './Map';
import Markers from './Markers';

const MapScene = () => {
  const onLoad = () => {
    console.log('onload');
  };
  return (
    <>
      <Map onLoad={onLoad} />
      <Markers />
    </>
  );
};

export default MapScene;
