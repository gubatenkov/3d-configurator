import { degToRad } from 'three/src/math/MathUtils'

export const initialConfig = {
  bodyColor: 'rgb(247, 127, 33)',
  mirrorsColor: 'rgb(247, 127, 33)',
  wheelsType: 'A',
  wheelsColor: 'rgb(0, 0, 0)',
  calipersColor: 'rgb(247, 127, 33)'
}

export type TConfig = typeof initialConfig
export type TPanelData = Array<TPanelTab>
export type TPanelTab = {
  id: number
  label: string
  value: keyof TConfig
  items: Array<{
    id: number
    label: string
    value: string
    backgroundImage?: string
  }>
}
export type TPanelItem = TPanelTab['items'][number]

export const panelData: TPanelData = [
  {
    id: 0,
    label: 'Body Color',
    value: 'bodyColor',
    items: [
      {
        id: 1,
        label: 'Yellow',
        value: 'rgb(247, 127, 33)'
      },
      {
        id: 2,
        label: 'Orange',
        value: 'rgb(252, 71, 5)'
      },
      {
        id: 3,
        label: 'Light Blue',
        value: 'rgb(67, 147, 230)'
      },
      {
        id: 4,
        label: 'Red',
        value: 'rgb(191, 0, 18)'
      },
      {
        id: 5,
        label: 'White',
        value: 'rgb(242, 243, 245)'
      }
    ]
  },
  {
    id: 6,
    label: 'Side Mirrors',
    value: 'mirrorsColor',
    items: [
      {
        id: 7,
        label: 'Yellow',
        value: 'rgb(247, 127, 33)'
      },
      {
        id: 8,
        label: 'Black',
        value: 'rgb(18, 18, 18)'
      }
    ]
  },
  {
    id: 9,
    label: 'Wheels',
    value: 'wheelsType',
    items: [
      {
        id: 10,
        label: 'Type A',
        value: 'A',
        backgroundImage: '/textures/type_a.png'
      },
      {
        id: 11,
        label: 'Type B',
        value: 'B',
        backgroundImage: '/textures/type_b.png'
      }
    ]
  },
  {
    id: 12,
    label: 'Wheel Color',
    value: 'wheelsColor',
    items: [
      {
        id: 13,
        label: 'Black',
        value: 'rgb(0, 0, 0)'
      },
      {
        id: 14,
        label: 'Silver',
        value: 'rgb(76, 84, 87)'
      },
      {
        id: 15,
        label: 'White',
        value: 'rgb(221, 221, 221)'
      }
    ]
  },
  {
    id: 16,
    label: 'Calipers',
    value: 'calipersColor',
    items: [
      {
        id: 17,
        label: 'Red',
        value: 'rgb(153, 0, 0)'
      },
      {
        id: 18,
        label: 'Yellow',
        value: 'rgb(233, 164, 53)'
      },
      {
        id: 19,
        label: 'Black',
        value: 'rgb(0, 0, 0)'
      },
      {
        id: 20,
        label: 'White',
        value: 'rgb(241, 247, 247)'
      }
    ]
  }
]

export const motions = [
  {
    from: {
      x: -35,
      y: 3.5,
      z: 35,
      rotateX: 0,
      rotateY: degToRad(-42.5),
      rotateZ: 0
    },
    to: {
      x: -18,
      y: 3.5,
      z: 18,
      rotateX: 0,
      rotateY: degToRad(-42.5),
      rotateZ: 0
    },
    duration: 6.8
  },
  {
    from: {
      x: -18,
      y: 2.5,
      z: 0,
      rotateX: 0,
      rotateY: degToRad(-90),
      rotateZ: 0
    },
    to: {
      x: -18,
      y: 5,
      z: 0,
      rotateX: 0,
      rotateY: degToRad(-90),
      rotateZ: 0
    },
    duration: 3.6
  },
  {
    from: {
      x: -13.5,
      y: 3.75,
      z: 3.75,
      rotateX: degToRad(-45),
      rotateY: degToRad(-45),
      rotateZ: degToRad(-30)
    },
    to: {
      x: -12.0,
      y: 4.5,
      z: 5.5,
      rotateX: degToRad(-45),
      rotateY: degToRad(-45),
      rotateZ: degToRad(-30)
    },
    duration: 7
  },
  {
    from: {
      x: -10.5,
      y: 1.5,
      z: 8.0,
      rotateX: degToRad(10),
      rotateY: degToRad(-45),
      rotateZ: 0
    },
    to: {
      x: -14.0,
      y: 1.0,
      z: 12.0,
      rotateX: degToRad(10),
      rotateY: degToRad(-45),
      rotateZ: 0
    },
    duration: 7
  },
  {
    from: {
      x: -13,
      y: 15,
      z: 14,
      rotateX: degToRad(-45),
      rotateY: 0,
      rotateZ: 0
    },
    to: {
      x: 13,
      y: 15,
      z: 14,
      rotateX: degToRad(-45),
      rotateY: 0,
      rotateZ: 0
    },
    duration: 12
  },
  {
    from: {
      x: 12.85,
      y: 4.35,
      z: 1.0,
      rotateX: degToRad(45),
      rotateY: degToRad(45),
      rotateZ: degToRad(-35)
    },
    to: {
      x: 12.85,
      y: 4.35,
      z: -0.7,
      rotateX: degToRad(45),
      rotateY: degToRad(45),
      rotateZ: degToRad(-35)
    },
    duration: 7
  },
  {
    from: {
      x: 13,
      y: 2.5,
      z: 4.5,
      rotateX: 0,
      rotateY: degToRad(45),
      rotateZ: degToRad(10)
    },
    to: {
      x: 13,
      y: 5.0,
      z: 4.5,
      rotateX: 0,
      rotateY: degToRad(45),
      rotateZ: degToRad(10)
    },
    duration: 7
  },
  {
    from: {
      x: -3.5,
      y: 5.0,
      z: 6.5,
      rotateX: degToRad(-35),
      rotateY: degToRad(-55),
      rotateZ: 0
    },
    to: {
      x: 1.25,
      y: 5.35,
      z: 6.5,
      rotateX: degToRad(-35),
      rotateY: degToRad(-55),
      rotateZ: 0
    },
    duration: 5
  },
  {
    from: {
      x: -13.85,
      y: 3.15,
      z: 0.35,
      rotateX: degToRad(-35),
      rotateY: degToRad(-35),
      rotateZ: degToRad(-35)
    },
    to: {
      x: -14.5,
      y: 3.75,
      z: 1,
      rotateX: degToRad(-40),
      rotateY: degToRad(-35),
      rotateZ: degToRad(-45)
    },
    duration: 8
  }
]
