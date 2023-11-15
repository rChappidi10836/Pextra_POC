import { Component, OnInit } from '@angular/core';
// import { setInterval, setTimeout } from 'timers';
@Component({
  selector: 'app-rain-text',
  templateUrl: './rain-text.component.html',
  styleUrls: ['./rain-text.component.css']
})
export class RainTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

//    rain(): void {
//     let cloud = document.querySelector('.cloud') as HTMLElement;
//     let e = document.createElement('div');
//     e.classList.add('text');
//     cloud.appendChild(e);
//     e.innerText = 'z';
//     setTimeout(function() {
//         cloud.removeChild(e);
//     }, 2000);
// }

//   setInterval(function() {
//       rain();
//   }, 20);


  
  /* 
  function rain(){
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    e.classList.add('text');
    cloud.appendChild(e);
    e.innerText='z'

    setTimeout(function(){
      cloud.removeChild(e)
    },2000)
  }

  setInterval(function(){
    rain()
  },20);

  */
}
