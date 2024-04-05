import {Component, ViewChild} from '@angular/core';
import {Element} from "@angular/compiler";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  onClick(type: string) {
    const content = document.getElementById(type);
    // @ts-ignore
    const button = content.previousSibling;
    // @ts-ignore
    console.log(content.style.display);
    // @ts-ignore
    content.classList.toggle('visible');
    // @ts-ignore
    if (content.style.display === 'none' || !content.style.display) {
      // @ts-ignore
      button.style.transform = 'rotate(180deg)';
      // @ts-ignore
      content.style.display = 'block'
    } else {
      // @ts-ignore
      button.style.transform = 'rotate(0deg)';
      // @ts-ignore
      content.style.display = 'none'
    }

  }
}
