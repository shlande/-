export function extendToType(name) {
  const extendArr = name.split('.')
  const extend = extendArr[extendArr.length - 1]
  const types = {
    video: ['mkv', 'mp4'],
    zip: ['zip', '7z', 'tar', 'gz', 'rar'],
    doc: ['doc'],
    sound: ['mp3']
  }
  for (const type in types) {
    for(const ex of types[type]){
      if (ex == extend) {
        return {
          extend,
          type:type
        }
      }
    }
  }
  return {
    extend,
    type: 'unknow'
  }
}