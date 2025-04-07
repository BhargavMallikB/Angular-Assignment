import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  // Below are the array of data used to render in webpage by applying Data Binding Techniques
  avengers = [
    {
      title: 'SpiderMan',
      heroQuote: 'Great Power comes with Great Responsibility',
      isHeroActive: false,
      imgUrl:
        'https://th.bing.com/th/id/OIP.ib7PR_yLBU8Lf2jShDSlbQHaJ4?w=130&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      hideBar: true,
    },
    {
      title: 'DeadPool',
      heroQuote: 'I am Inevitable',
      isHeroActive: false,
      imgUrl:
        'https://th.bing.com/th/id/OIP.02t5LUMiUNvmh1geoDB_3gHaO5?w=115&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      hideBar: true,
    },
    {
      title: 'DearDevil',
      heroQuote: 'I am a very Good Lawyer',
      isHeroActive: false,
      imgUrl:
        'https://th.bing.com/th/id/OIP.sYaOq5pklttAnszFsTSRIgHaJn?w=130&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      hideBar: true,
    },
    {
      title: 'IronFist',
      heroQuote: 'I am IronFist',
      isHeroActive: false,
      imgUrl:
        'https://th.bing.com/th/id/OIP.BkUctBuQQi7HzRZWGbGwiQHaKL?w=151&h=208&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      hideBar: true,
    },
  ];

  // updateAvengersStatus is an event binding, whenever user clicks button
  // it will changes the status of the data can be represent or not
  updateAvengerStatus(avenger: any) {
    avenger.isHeroActive = !avenger.isHeroActive;
  }

  //showInputBar is an event binding, Whenever user clicks button
  //it will prompts the input bar to change the text presented on screen (Just like an edit)
  showInputBar(avenger: any) {
    avenger.hideBar = !avenger.hideBar;
  }
}
