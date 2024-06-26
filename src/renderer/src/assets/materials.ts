const materialList = [
  {
    name: 'MatteAcetate',
    category: 'Acetate',
    sector: 'Eyewear',
    properties: {
      color: 'Black',
      finish: 'Matte',
      matPrev: 'textures/matte_black_albedo.png',
      metallic: 0,
      roughness: 0.2
    },
    usage: 'Modern and elegant eyewear designs',
    physical_properties: { density: '1.28 g/cm³', hardness: 'Rockwell R90' },
    environmental_impact: { recyclable: true, sustainability_rating: 'B' },
    matFolder: 'http://127.0.0.1:5500/public/Acetate/Black/prev.png'
  },
  {
    name: 'OpalAcetate',
    category: 'Acetate',
    sector: 'Eyewear',
    properties: {
      color: 'Opal White',
      finish: 'Matte',
      matPrev: 'textures/opal_white_albedo.png',
      metallic: 0,
      roughness: 0.3
    },
    usage: 'Vintage-style eyewear designs',
    physical_properties: { density: '1.30 g/cm³', hardness: 'Rockwell R85' },
    environmental_impact: { recyclable: true, sustainability_rating: 'B' },
    matFolder: 'http://127.0.0.1:5500/public/Acetate/Opal/prev.png'
  },
  {
    name: 'HighGlossTortoiseAcetate',
    category: 'Acetate',
    sector: 'Eyewear',
    properties: {
      color: 'Tortoiseshell',
      finish: 'HighGloss',
      matPrev: 'textures/tortoiseshell_albedo.png',
      metallic: 0,
      roughness: 0.1
    },
    usage: 'High-end eyewear frames',
    physical_properties: { density: '1.32 g/cm³', hardness: 'Rockwell R100' },
    environmental_impact: { recyclable: true, sustainability_rating: 'A' },
    matFolder: 'http://127.0.0.1:5500/public/Acetate/Tortoise/prev.png'
  },
  {
    name: 'BlackAluminum',
    category: 'Metal',
    sector: 'Eyewear',
    properties: {
      color: 'Black',
      finish: 'Matte',
      matPrev: 'textures/aluminum_normal.png',
      metallic: 1,
      roughness: 0.2
    },
    usage: 'Sleek and modern eyewear designs',
    physical_properties: { density: '2.70 g/cm³', hardness: 'Vickers HV 15' },
    environmental_impact: { recyclable: true, sustainability_rating: 'B' },
    matFolder: 'http://127.0.0.1:5500/public/Aluminum/BlackAlu/prev.png'
  }
]

export default materialList
