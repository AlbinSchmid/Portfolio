import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FtProjectsService {
  projects = [
    {
      id: '01',
      name: 'Join',
      gitHub: 'https://github.com/AlbinSchmid/Join',
      liveTest: 'https://join.albin-schmid.com/log-in.html',
      img: 'join',
      skills: [
        {
          name: 'CSS',
          img: 'css-blue',
        },
        {
          name: 'HTML',
          img: 'html-blue',
        },
        {
          name: 'Firebase',
          img: 'firebase-blue',
        },
        {
          name: 'Angular',
          img: 'angular-blue',
        },
        {
          name: 'TypeScript',
          img: 'typescript-blue',
        },
      ],
    },
    {
      id: '02',
      name: 'El Pollo Loco',
      gitHub: 'https://github.com/AlbinSchmid/El-Pollo-Loco',
      liveTest: 'https://el-pollo-loco.albin-schmid.com/',
      img: 'pollo-loco',
      skills: [
        {
          name: 'JavaScript',
          img: 'javascript-blue',
        },
        {
          name: 'CSS',
          img: 'css-blue',
        },
        {
          name: 'HTML',
          img: 'html-blue',
        },
      ],
    },
    {
      id: '03',
      name: 'DABubble',
      gitHub: 'https://github.com/AlbinSchmid/DABubble',
      liveTest: 'https://da-bubble.albin-schmid.com/',
      img: 'da-bubble',
      skills: [
        {
          name: 'JavaScript',
          img: 'javascript-blue',
        },
        {
          name: 'CSS',
          img: 'css-blue',
        },
        {
          name: 'HTML',
          img: 'html-blue',
        },
      ],
    },
  ];
}
