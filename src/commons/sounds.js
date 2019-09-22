  var SoundPlayer = require('react-native-sound');
  
  SoundPlayer.setCategory('Playback');

  let inicio = new SoundPlayer ('inicio.mp3', SoundPlayer.MAIN_BUNDLE,(error) => {
    if (error){
     //ToastAndroid.show('Error', ToastAndroid.SHORT);
  }
});

let hands = new SoundPlayer ('aplausos.mp3', SoundPlayer.MAIN_BUNDLE,(error) => {
    if (error){
     //ToastAndroid.show('Error', ToastAndroid.SHORT);
  }
});
   
let fail = new SoundPlayer ('fail.mp3', SoundPlayer.MAIN_BUNDLE,(error) => {
  if (error){
   //ToastAndroid.show('Error', ToastAndroid.SHORT);
}
});

let history = new SoundPlayer ('history.mp3', SoundPlayer.MAIN_BUNDLE,(error) => {
  if (error){
   //ToastAndroid.show('Error', ToastAndroid.SHORT);
}
});

  module.exports = {
    inicio,
    hands,
    fail,
    history
  };