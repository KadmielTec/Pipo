export const theme_images = {
  // 'not_found': require('../img/not_found.jpg')
  'math'    : require('../img/themes/math.jpg')
  ,'science' : require('../img/themes/science.jpg')
  ,'sports'  : require('../img/themes/sports.jpg')
  ,'history' : require('../img/themes/history.jpg')
  ,'vgames'  : require('../img/themes/vgames.jpg')
}

export const peng_images = {
  'baby' : require('../img/penguins/baby_peng.jpg')
}

let get_theme_images = (_icon) => {
  let image = ( theme_images[_icon] ) ? _icon : 'not_found';
  return theme_images[image];
}

let get_peng_images = (_icon) => {
  let image = ( theme_images[_icon] ) ? _icon : 'not_found';
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
  get_theme_images,
  font_icons,
};
