export const data = [
  {
    name: 'Lambo',
    type: 'glb',
    path: '/models/model.glb',
  },
  // {
  //   name: 'FloorAOMap',
  //   type: 'jpg',
  //   path: '/textures/asphalt_0002_ao_1k.jpg',
  // },
  {
    name: 'FloorColorMap',
    type: 'jpg',
    path: '/textures/Asphalt010_1K_Color.jpg',
  },
  {
    name: 'FloorHeightMap',
    type: 'jpg',
    path: '/textures/Asphalt010_1K_Displacement.jpg',
  },
  {
    name: 'FloorNormalMap',
    type: 'jpg',
    path: '/textures/Asphalt010_1K_NormalGL.jpg',
  },
  {
    name: 'FloorOpacityMap',
    type: 'jpg',
    path: '/textures/Asphalt010_1K_Opacity.jpg',
  },
  {
    name: 'FloorRoughnessMap',
    type: 'jpg',
    path: '/textures/Asphalt010_1K_Roughness.jpg',
  },
  {
    name: 'EnvMapHDR',
    type: 'hdr',
    path: '/textures/royal_esplanade_1k.hdr',
  },
] as const

export type Asset = (typeof data)[number]
