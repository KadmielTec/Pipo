export const peng_images = {
  'baby' : require('../img/penguins/baby_peng.jpg')
}

let get_peng_images = (_icon) => {
  let image = (peng_images[_icon]) ? _icon : 'not_found';
  return peng_images[image];
}

export const font_icons = {
  default     : 'not_found',
  math        : 'math',
  science     : 'science',
  history     : 'history',
  orthography : 'orthography',
  pipo        : 'pipo',
  random      : 'random',
  heart       : 'heart',
  fish        : 'fish',
  reload      : 'reload',
}

module.exports = {
  get_peng_images,
  font_icons,
};
