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

module.exports = {
  get_theme_images
};
