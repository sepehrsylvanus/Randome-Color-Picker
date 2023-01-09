$(document).ready(function () {
  const values = ["a", "b", "c", "d",'e' ,"f", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  $("#generateColor").click(function () {
    let resultValue = "#";
    for (let i = 0; i < 6; i++) {
      resultValue += values[Math.floor(Math.random() * 16)];
    }
    console.log(resultValue);
    $("#colorContainer").css("background", resultValue);
    $('#inputGroup').css('border', '1px solid' + resultValue)
    $('#icon').css('background', resultValue)
    $('#color').val(resultValue)
    $('#color').css('color', resultValue)
    $('#color').css('font-weight', 'bold')
    
  });
  $('#icon').click(function(){
    $('#color').select()
    document.execCommand('copy')
  })
});
