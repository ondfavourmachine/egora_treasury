import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  view: 'first_view' |'second_view' | 'third_view' | 'fourth_view' | '' | any = 'first_view';
  constructor() { }

  ngOnInit(): void {
  }

  // toggle(event: Event){
  //   console.log('i was clicked')
  //   const input = event.target as HTMLInputElement;
  //   const otherInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.toggler_input');
  //   const filtered = Array.from(otherInputs).filter(elem => elem.name != input.name);
  //   filtered.forEach(elem => elem.checked = false);
  //   this.view = input.name;
  // }

  startToggling(event: Event, nameOfInput: string){
    this.view = nameOfInput;
  }

  toggleSidebar(event: Event, remove?: string){
    if(remove){
      const icons: NodeListOf<HTMLElement> = document.querySelectorAll('.targetted_icon');
      const spanWithText: NodeListOf<HTMLElement> = document.querySelectorAll('.targetted');
      const header: HTMLElement = document.querySelector('.offcanvas-header');
      const sideBar: HTMLElement = document.getElementById('offcanvasExample');
      const majorSide: HTMLElement = document.querySelector('.major_side');
      majorSide.classList.remove('increaseSize');
      sideBar.classList.remove('reduceSize');
      header.classList.remove('hide');
      icons.forEach(elem => elem.classList.remove('hide'));
      spanWithText.forEach(elem => elem.classList.remove('hide'));

      const showWhenTogglerIsOff = document.querySelector('.showWhenTogglerIsOff');
      showWhenTogglerIsOff.classList.add('hide')
      showWhenTogglerIsOff.classList.remove('show');

      return;
    }
      const icons: NodeListOf<HTMLElement> = document.querySelectorAll('.targetted_icon');
      const spanWithText: NodeListOf<HTMLElement> = document.querySelectorAll('.targetted');
      const header: HTMLElement = document.querySelector('.offcanvas-header');
      const sideBar: HTMLElement = document.getElementById('offcanvasExample');
      const majorSide: HTMLElement = document.querySelector('.major_side');
      majorSide.classList.add('increaseSize');
      sideBar.classList.add('reduceSize');
      header.classList.add('hide');
      icons.forEach(elem => elem.classList.add('hide'));
      spanWithText.forEach(elem => elem.classList.add('hide'));

      const showWhenTogglerIsOff = document.querySelector('.showWhenTogglerIsOff');
      showWhenTogglerIsOff.classList.remove('hide')
      showWhenTogglerIsOff.classList.add('show');
  }
}
