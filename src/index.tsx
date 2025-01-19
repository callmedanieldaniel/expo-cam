import { Camera } from './components/Camera';

console.log('Hermes is enabled:', !!global.HermesInternal);

export default function Index() {
  return <Camera />;
} 