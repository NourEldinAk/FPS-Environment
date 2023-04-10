let prev_color = ''
// This function allows switching between red and blue light, as well as turning the light on and off.
function light_switcher(color,place) {
  console.log('clicked');
  console.log(place)
  let light_switcher=''
  let ball = ''
  if(place == 'living_room'){
    light_switcher = document.getElementById("light");
    ball =document.getElementById('ball_texture')
  }else if(place =='room'){
    light_switcher = document.getElementById("room_light");
    ball = document.getElementById('room_ball_texture')
  }else{
    light_switcher = document.getElementById("bath_light");
    ball = document.getElementById('bath_ball_texture')
  }
// change the color once the switcher is clicked 
  light_switcher.setAttribute('color', color);
  ball.setAttribute('diffuseColor', color)

// switch the lights on/off and change the lights color
  if (light_switcher.getAttribute("on") == 'false'){
    light_switcher.setAttribute("on", 'true');
  } else if (color != prev_color )  {
    light_switcher.setAttribute('color',color)
  }else{
    light_switcher.setAttribute("on", 'false');
  }

//  I stored the color here to compare it later if its a new color or the same color
  prev_color= color
//   once the lights are off change the color to gray
  if(light_switcher.getAttribute("on") == 'false')
    ball.setAttribute('diffuseColor', '1 1 1')

}

function switch_mode(){
  let nav_mode = document.getElementById('navigation')
  console.log(nav_mode.getAttribute('type'))

  if(nav_mode.getAttribute('type')=='game'){
      nav_mode.setAttribute('type','walk')
      document.getElementById('nav_button').innerHTML='Walk Mode'
  }else{
    nav_mode.setAttribute('type','game')
    // nav_mode.setAttribute('speed','.5')
    document.getElementById('nav_button').innerHTML='Game Mode'
  }

}



// change between three different floor textures
let prev_floor = 0
function bathroom_floor(){
    let randomNum = Math.floor(Math.random() * 3) ;
    let floors= ['floor_1.jpg','floor_2.jpg','floor_3.jpg']
    let floor = document.getElementById('floor_texture')
    // to make sure the same texture doesnt appear twice in a row
    while(randomNum == prev_floor){
      randomNum = Math.floor(Math.random() * 3) ;
    } 
    floor.setAttribute('url','../floor/'+floors[randomNum])
    prev_floor = randomNum
}

document.addEventListener("keypress", function(event) {

interact_with_keys(event.key);

});

function interact_with_keys(key){
  switch(key){
    case '1':
      light_switcher('1 0 0', 'living_room')
      break;
    case '2':
      light_switcher('0 0 1', 'living_room')
      break;

    case '3':
      light_switcher('1 0 0', 'room')
      break;
    case '4':
      light_switcher('0 0 1', 'room')
      break;
    case '5':
      light_switcher('1 0 0', 'bath')
      break;
    case '6':
      light_switcher('0 0 1', 'bath')
      break;
      case '7':
      bathroom_floor()
      break;

  }
}

