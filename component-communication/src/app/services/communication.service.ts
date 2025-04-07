import { Injectable } from '@angular/core';
import { Hero } from '../types/Hero';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  //heroes variable contains the data that used in components to render in template
  heroes: Hero[] = [
    {
      title: 'SpiderMan',
      quote: 'Great Power Comes with Great Responsibility',
      imageURL:
        'https://th.bing.com/th/id/OIP.ib7PR_yLBU8Lf2jShDSlbQHaJ4?w=130&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      isActive: false,
    },
    {
      title: 'Iron Man',
      quote: 'No Amount of Money Ever Brought a Second of Time',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6i3jdWkf3z0SS_kgkx_KsAed2mS9MNDl5w&s',
      isActive: false,
    },
    {
      title: 'Captain America',
      quote: 'I can Do this All Day',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSCudOQ6yWoBFRIgoel0uSzMSLn7Rsut9dQ&s',
      isActive: false,
    },
    {
      title: 'Thor OdinSon',
      quote:
        'Whosoever holds this hammer, if he be worthy, shall possess the power of Thor!',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqUW-r6VRcoIOEk5fopT_yiXrkt6SkKf-gg&s',
      isActive: false,
    },
    {
      title: 'Wolverine',
      quote:
        'I am the best there is at what I do, but what I do best is not very nice',
      imageURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYmGO5JyYhO1Ru9AVKv6bv4lbT4G8s9lmXyg&s',
      isActive: false,
    },
    {
      title: 'DeadPool',
      quote:
        'Life is an endless series of trainwrecks with only brief commercial-like breaks of happiness',
      imageURL:
        'https://th.bing.com/th/id/OIP.02t5LUMiUNvmh1geoDB_3gHaO5?w=115&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      isActive: false,
    },
    {
      title: 'DearDevil',
      quote: 'Fear can be overcome, if you have the will',
      imageURL:
        'https://th.bing.com/th/id/OIP.sYaOq5pklttAnszFsTSRIgHaJn?w=130&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      isActive: false,
    },
    {
      title: 'IronFist',
      quote:
        'I use it to the best of my ability, I honor that power through my actions, and no one can take that from me, not even...',
      imageURL:
        'https://th.bing.com/th/id/OIP.BkUctBuQQi7HzRZWGbGwiQHaKL?w=151&h=208&c=7&r=0&o=5&dpr=1.5&pid=1.7',
      isActive: false,
    },
  ];

  constructor() {}


  getHeroes() { //getHeroes() returns the all heroes data
    return this.heroes;
  }

  getHeroNames(){ //getHeroNames() returns the all heroes names only
    return this.heroes.map(hero => hero.title);
  }

  getHeroImages(){ //getHeroImages() returns the all heroes imageURL's
    return this.heroes.map(hero => hero.imageURL);
  }

  getHeroQuotes(){ //getHeroQuotes() returns the all heroes quotes
    return this.heroes.map(hero => hero.quote);
  }
}
