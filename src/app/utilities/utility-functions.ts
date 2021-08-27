

export class UtilityFunctions{
    static toggleSidebar(event: Event, remove?: string){
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