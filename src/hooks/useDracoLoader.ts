import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

const useDracoLoader = (path: string) => {
  return useLoader(GLTFLoader, path, (loader) => {
    const draco = new DRACOLoader()
    draco.setDecoderPath('./draco/')
    loader.setDRACOLoader(draco)
  })
}

export default useDracoLoader
