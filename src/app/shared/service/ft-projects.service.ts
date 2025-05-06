import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FtProjectsService {
  projects = [
    {
      id: '01',
      name: 'Videoflix [Fullstack]',
      gitHub: 'https://github.com/AlbinSchmid/Videoflix-Frontend',
      liveTest: 'https://videoflix.albin-schmid.com/',
      img: 'videoflix',
      skills: [
        {
          name: 'Angular',
          img: 'angular-blue',
        },
        {
          name: 'TypeScript',
          img: 'typescript-blue',
        },
        {
          name: 'Django',
          img: 'django-blue',
        },
        {
          name: 'Python',
          img: 'python-blue',
        },
      ],
    },
    {
      id: '02',
      name: 'Join [Fullstack]',
      gitHub: 'https://github.com/AlbinSchmid/Join-Frontend',
      liveTest: 'https://join.albin-schmid.com/',
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
          name: 'JavaScript',
          img: 'javascript-blue',
        },
      ],
    },
    {
      id: '03',
      name: 'DABubble [Frontend]',
      gitHub: 'https://github.com/AlbinSchmid/DABubble',
      liveTest: 'https://da-bubble.albin-schmid.com/',
      img: 'da-bubble',
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
          name: 'TypeScript',
          img: 'typescript-blue',
        },
        {
          name: 'Angular',
          img: 'angular-blue',
        },
        {
          name: 'Firebase',
          img: 'firebase-blue',
        },
      ],
    },
    {
      id: '04',
      name: 'Coderr/ [Backend]',
      gitHub: 'https://github.com/AlbinSchmid/Coderr-Backend',
      liveTest: 'https://coderr.albin-schmid.com/',
      img: 'coderr',
      skills: [
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
  ];
}
