export const theme_images = {
  // 'not_found': require('../img/not_found.jpg')
  'math'    : require('../img/themes/math.jpg')
  ,'science' : require('../img/themes/science.jpg')
  ,'sports'  : require('../img/themes/sports.jpg')
  ,'history' : require('../img/themes/history.jpg')
  ,'vgames'  : require('../img/themes/vgames.jpg')
}

let get_theme_images = function(_icon) {
  let icon = ( theme_images[_icon] ) ? _icon : 'not_found';
  return theme_images[icon];
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
  get_theme_images,
  font_icons
};
