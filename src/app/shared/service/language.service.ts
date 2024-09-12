import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  header = {
    linkLeft: {
      en: 'About me',
      de: 'Über mich',
    },
    linkMid: {
      en: 'Skills',
      de: 'Fähigkeiten',
    },
    linkRight: {
      en: 'Projects',
      de: 'Projekte',
    }
  }
  aot = {
    headline: {
      en: 'Frontend Developer',
      de: 'Frontend Entwickler',
    },
    btnLeft: {
      en: 'Check my work',
      de: 'Meine Arbeit',
    },
    btnRight: {
      en: 'Contact me',
      de: 'Schreibe mir',
    },
    animation: {
      content1: {
        en: 'Open to work',
        de: 'Offen für neues',
      },
      content2: {
        en: 'Frontend Developer',
        de: 'Frontend Entwickler',
      },
      content3: {
        en: 'Based in Tirol',
        de: 'Wohnhaft in Tirol',
      },
      content4: {
        en: 'Available for remote Work',
        de: 'Remote-Arbeit möglich',
      }
    }
  };
  aboutMe = {
    smallHeadline: {
      en: 'Who I Am',
      de: 'Wer ich bin',
    },
    bigHeadline: {
      en: 'About me',
      de: 'Über mich',
    },
    content: {
      en: 'Hi, I’m a german speaking Frontend Developer based in Munich. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.',
      de: 'Hallo, ich bin ein deutschsprachiger Frontend-Entwickler mit Sitz in München. Motiviert von den grenzenlosen Möglichkeiten in der IT bin ich begeistert von der Gestaltung visuell ansprechender und intuitiver Websites und Anwendungen.',
    },
    loaction: {
      en: 'Flexible in terms of working environments, I can work effectively both on-site in Munich and remotely.',
      de: 'Da ich hinsichtlich meiner Arbeitsumgebung flexibel bin, kann ich sowohl vor Ort in München als auch remote effektiv arbeiten.',
    },
    mindset: {
      en: 'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.',
      de: 'Ich bin aufgeschlossen und suche immer nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten ständig zu verbessern.',
    },
    strengthen: {
      en: `In my profession, programming isn't just about writing code it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.`,
      de: 'In meinem Beruf geht es beim Programmieren nicht nur darum, Code zu schreiben es ist eine kreative Form der Problemlösung. Ich bin stolz auf meine Fähigkeit, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu destillieren. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.',
    },

  }
  skill = {
    smallHeadline: {
      en: 'Technologies',
      de: 'Technologien',
    },
    bigHeadline: {
      en: 'Skill Set',
      de: 'Fähigkeiten',
    },
    content: {
      en: 'My journey has involved working on diverse projects, employing a range of frontend technologies and concepts. I am open to embracing new technologies and methodologies to Continously enhance my skills and stay ahead in the ever-evolving landscape of web development.',
      de: 'Auf meinem Weg habe ich an verschiedenen Projekten gearbeitet und dabei eine Reihe von Frontend-Technologien und -Konzepten eingesetzt. Ich bin offen für neue Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig weiterentwickelnden Landschaft der Webentwicklung an der Spitze zu bleiben.',
    },
    content2: {
      en: 'You need ',
      de: 'Sie benötigen eine ',
    },
    mark: {
      en: 'another skill?',
      de: 'andere Fähigkeit?',
    },
    content3: {
      en: 'Feel free to contact me. I look forward to <br> expanding on my previous knowledge.',
      de: 'Nehmen Sie gerne Kontakt mit mir auf. Ich freue mich darauf, meine bisherigen Kenntnisse zu erweitern.',
    },
    btn: {
      en: `Let's Talk`,
      de: 'Lass uns reden',
    },
  }
  projects = {
    smallHeadline: {
      en: 'Portfolio',
      de: 'Portfolio',
    },
    bigHeadline: {
      en: 'Featured Projects',
      de: 'Projekte',
    },
    content: {
      en: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
      de: 'Entdecken Sie hier eine Auswahl meiner Arbeiten. Interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.',
    },
    detailProject: {
      headline: {
        en: 'What is this project about?',
        de: 'Worum geht es in diesem Projekt?',
      },
      description: [
        {
          en: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
          de: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag & Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
        },
        {
          en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
          de: 'Spring-, Lauf- und Wurfspiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa zu finden, um gegen die verrückte Henne zu kämpfen.',
        },
        {
          en: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
          de: 'Diese App ist eine Slack-Klon-App. Sie revolutioniert die Kommunikation und Zusammenarbeit im Team mit ihrer intuitiven Benutzeroberfläche, Echtzeitnachrichten und robusten Kanalorganisation.',
        }
      ],
      btn: {
        en: 'next project',
        de: 'Nächstes Projekt',
      },
    }
  }
  feedback = {
    feedbacks: [
      {
        en: 'Albin has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the succes of our project.',
        de: 'Albin hat sich als zuverlässiger Gruppenpartner erwiesen. Seine technischen Fähigkeiten und sein proaktiver Einsatz waren entscheiden für den Erfolg unseres Projekts.',
        name: 'H. Janisch - Team Partner',
      },
      {
        en: 'I had the good fortune of working with Albin in a group project at the Developer Akadmie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He is super knowledgeable, easy to with, and I did happily work with him again given the chance.',
        de: 'Ich hatte das Glück, mit Albin in einem Gruppenprojekt an der Developer Akademie zusammenzuarbeiten, das viel Arbeit erforderte. Er blieb immer ruhig, gelassen und konzentriert und sorgte dafür, dass unser Team voran kam. Er ist super kompetent, unkompliziert und ich würde mit ihm gerne wieder an einen Projekt arbeiten.',
        name: 'A. Fischer - Team Partner',
      },
      {
        en: 'Our project benefited enormously from Albin efficient way of working',
        de: 'Unser Projekt profitierte enorm von Albins effizienter Arbeitsweise',
        name: 'T. Schulz - Frontend Developer',
      },
    ],
    headline: {
      en: 'What my colleagues say about me',
      de: 'Was meine Kollegen über mich sagen',
    },
  }
  contact = {
    smallHeadline: {
      en: 'Contact me',
      de: 'Kontaktieren Sie mich',
    },
    bigHeadline: {
      en: `Let's work together`,
      de: 'Lassen Sie uns zusammenarbeiten',
    },
    content: {
      en: 'Got a proplem to solve',
      de: 'Sie habe ein Problem zu lösen',
    },
    content2: {
      en: 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
      de: 'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.',
    },
    content3: {
      en: 'Need a Frontend developer?',
      de: 'Brauchen Sie einen Frontend-Entwickler?',
    },
    btn: {
      en: `Let's talk!`,
      de: 'Lass uns Reden!',
    },
    form: {
      name: {
        en: `What's your name?`,
        de: 'Wie heißen Sie?',
      },
      email: {
        en: `What's your email?`,
        de: 'Wie lautet Ihre E-Mail?',
      },
      message: {
        en: `How can I help you?`,
        de: 'Wie kann ich dir helfen?',
      },
      checkbox: {
        content: {
          en: `I've read the `,
          de: 'Ich Habe die ',
        },
        link: {
          en: `privacy policy`,
          de: 'Datenschutzerklärung',
        },
        content2: {
          en: `and agree to the processing of my data as outlined.`,
          de: 'gelesen und stimme der darin beschriebenen Verarbeitung meiner Daten zu.',
        },
      },
      btn: {
        en: 'Say Hello',
        de: 'Sag Hallo'
      },
      input: {
        name: {
          en: `Your name goes here`,
          de: 'Ihr Name steht hier',
        },
        email: {
          en: `youremail@gmail.com`,
          de: 'deineemail@gamil.com',
        },
        message: {
          en: `Hello Albin, I am Interested in...`,
          de: 'Hallo Albin, ich Interessiere mich für...',
        },
      },
      errors: {
        name: {
          en: `Oops! it seems your name is missing`,
          de: 'Ups! Ihr Name scheint zu fehlen',
        },
        email: {
          en: `Hoppla! your email is required`,
          de: 'Hoppla! Ihre E-Mail ist erforderlich',
        },
        message: {
          en: `What do you need to develop?`,
          de: 'Was müssen sie entwicklen?',
        },
        checkbox: {
          en: `Please accept the privacy policy.`,
          de: 'Bitten aktzeptieren sie unsere Datenschutz Richtlinien.',
        },
      }
    },
    sendMail: {
      headline: {
        en: 'I received it.',
        de: 'Ich habe deine Nachricht erhalten',
      },
      content: {
        en: `Thanks for the message. I'll reply as soon as possible.`,
        de: 'Vielen Dank für deine Nachricht, Ich werde sie in kürze beantworten',
      }   
    }
  }
  footer = {
    impressum: {
      en: 'Legal Notice',
      de: 'Impressum'
    }
  }
  legalNotice = {
    headline: {
      en: 'Legal Notice',
      de: 'Impressum',
    },
    smallHeadline: {
      en: 'Information and Disclosure pursuant to §5 (1) ECG, § 25 MedienG, § 63 GewO and § 14 UGB',
      de: 'Informationen und Offenlegung gemäß § 5 Abs. 1 ECG, § 25 MedienG, § 63 GewO und § 14 UGB',
    },
    operator: {
      en: 'Website Operator:',
      de: 'Website-Betreiber:',
    },
    adress: {
      en: 'Address:',
      de: 'Anschrift:',
    },
    contact: {
      en: 'Contact Details:',
      de: 'Kontaktdaten:',
    },
    applicableLaw: {
        en: 'Applicable Law:',
        de: 'Anwendbares Recht:',
    },
    disputeResolution: {
      headline: {
        en: 'Online Dispute Resolution:',
        de: 'Online-Streitbeilegung:',
      },
      text: {
        en: 'Consumers who are domiciled in Austria or another Member State of the EU and who have purchased goods or services online can use the Online Dispute Resolution (ODR) platform provided by the European Commission to resolve disputes:',
        de: 'Verbraucher, die in Österreich oder einem anderen Mitgliedstaat der EU ansässig sind und online Waren oder Dienstleistungen gekauft haben, können die von der Europäischen Kommission bereitgestellte Online-Streitbeilegungsplattform (OS) zur Beilegung von Streitigkeiten nutzen:',
      }
    },
    copyright: {
      headline: {
        en: 'Copyright:',
        de: 'Urheberrecht:',
      },
      text: {
        en: 'The content of this website is subject to various intellectual property rights (e.g., copyright) to the extent permitted by law. Any use or distribution of the provided material that is prohibited by copyright law requires the written consent of the website operator.',
        de: 'Der Inhalt dieser Website unterliegt verschiedenen geistigen Eigentumsrechten (z. B. Urheberrecht), soweit dies gesetzlich zulässig ist. Jede Verwendung oder Verbreitung des bereitgestellten Materials, die gegen das Urheberrecht verstößt, bedarf der schriftlichen Zustimmung des Website-Betreibers.',
      }
    },
    disclaimer: {
      headline: {
        en: 'Disclaimer:',
        de: 'Haftungsausschluss:',
      },
      text: {
        en: 'Despite careful content control, the website operator assumes no liability for the content of external links. The operators of the linked pages are solely responsible for their content. If you become aware of any outgoing links that refer to a website with illegal activities or information, please notify us so that we can remove them in accordance with § 17 (2) ECG. The copyright of third parties is respected by the operator of this website with the utmost care. If you nevertheless become aware of a copyright infringement, please notify us accordingly. Upon notification of such infringements, we will remove the content in question immediately.',
        de: 'Trotz sorgfältiger inhaltlicher Kontrolle übernimmt der Website-Betreiber keine Haftung für die Inhalte externer Links. Die Betreiber der verlinkten Seiten sind für ihre Inhalte allein verantwortlich. Wenn Sie Kenntnis von ausgehenden Links erhalten, die auf eine Website mit illegalen Aktivitäten oder Informationen verweisen, teilen Sie uns dies bitte mit, damit wir diese gemäß § 17 Abs. 2 ECG entfernen können. Das Urheberrecht Dritter wird vom Betreiber dieser Website mit größter Sorgfalt gewahrt. Wenn Sie dennoch Kenntnis von einer Urheberrechtsverletzung erhalten, teilen Sie uns dies bitte mit. Nach Kenntnisnahme solcher Verstöße werden wir die betreffenden Inhalte unverzüglich entfernen.',
      }
    },
    source: {
      en: 'Source',
      de: 'Quelle',
  },
  }
  germanLanguage: boolean = true;
  englishLanguage: boolean = false;


  /**
   * 
   * @param text - get the path of the array which we should change the language
   * @returns return the path of the array with de correct langauge
   */
  controllLang(text: any) {
    if (this.germanLanguage) {
      return text.de
    } else {
      return text.en
    }
  }


  /**
   * checked the already used language its saved in local storage
   */
  checkChosedLang() {
    const english = localStorage.getItem('english');
    if (english) {
      this.englishLanguage = JSON.parse(english);
    }
    if (this.englishLanguage) {
      this.germanLanguage = false;
    }
  }
}
