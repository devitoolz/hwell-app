import Map from './Map';

const MapScene = () => {
  const onLoad = () => {
    console.log('onload');
  };
  return <Map onLoad={onLoad} />;
};

export default MapScene;
