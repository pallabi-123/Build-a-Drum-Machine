var numberOfDrumButtons = document.querySelectorAll('.drum').length
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML

    switch (buttonInnerHTML) {
      case 'w':
        var audio = new Audio(
          'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        ) //pressing each button makes you listen drum beats.
        audio.play()
        break

      case 'a':
        var audio = new Audio(
          'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        ) //pressing each button makes you listen drum beats.
        audio.play()
        break

      case 's':
        var audio = new Audio(
          'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        ) //pressing each button makes you listen drum beats.
        audio.play()
        break

      case 'd':
        var audio = new Audio(
          'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        ) //pressing each button makes you listen drum beats.
        audio.play()
        break

      case 'j':
        var audio = new Audio(
          'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        ) //pressing each button makes you listen drum beats.
        audio.play()
        break

      case 'k':
        var audio = new Audio(
          'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        ) //pressing each button makes you listen drum beats.
        audio.play()
        break

      case 'l':
        var audio = new Audio(
          'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        ) //pressing each button makes you listen drum beats.
        audio.play()
        break

      default:
        console.log(buttonInnerHTML)
    }
  })
}
