import React from 'react';
import CardItem from '../../components/card/card-item.component';

import './portfolio.styles.scss';

type Gallery = {
  path: string;
  description: string;
};

type Repo = {
  isAvailable: boolean;
  github: string;
};

type DemoVid = {
  isAvailable: boolean;
  clipchamp: string;
};

export type Portfolio = {
  id: number;
  name: string;
  shortDescription: string;
  technology: string[];
  gallery: Gallery[];
  urlProject: string;
  demoVideo: DemoVid;
  repo: Repo;
  imgUrl: string;
};

const PortfolioPage = () => {
  const portfolios: Portfolio[] = [
    {
      id: 1,
      name: 'ChrisTours',
      shortDescription:
        'A booking website where you can log and book a certain tours. The website is built with NodeJS',
      technology: ['html', 'css', 'javascript', 'NodeJS', 'API', 'Express', 'MongoDB'],
      gallery: [
        {
          path: './img/christours-gallery/christours.PNG',
          description: 'All Tours available',
        },
        {
          path: './img/christours-gallery/singletour.PNG',
          description: 'Single Tour',
        },
        {
          path: './img/christours-gallery/half.PNG',
          description: 'Map of the tour',
        },

        {
          path: './img/christours-gallery/cta.PNG',
          description: 'Call to Action',
        },
        {
          path: './img/christours-gallery/login.PNG',
          description: 'Login Page',
        },
        {
          path: './img/christours-gallery/loggedin.PNG',
          description: 'Profile of user',
        },

        {
          path: './img/christours-gallery/mybookings.PNG',
          description: 'Bookings of the user',
        },
      ],
      urlProject: 'https://christours.onrender.com/',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/natours_dev',
      },
      imgUrl: './img/christours-gallery/christours.PNG',
    },
    {
      id: 1,
      name: 'Max-Cloth',
      shortDescription:
        'is a ecommerce website that uses react as main tool for the frontend. maxcloth is robust application and optimized',
      technology: [
        'html',
        'css',
        'javascript',
        'react',
        'redux-flow',
        'context-api',
        'hooks',
        'firebase',
        'stripe',
        'nodejs',
        'express',
        'thunks',
      ],
      gallery: [
        {
          path: './img/maxcloth-gallery/maxcloth.PNG',
          description: '',
        },
        {
          path: './img/maxcloth-gallery/shopage.PNG',
          description: 'Shop page',
        },
        {
          path: './img/maxcloth-gallery/percat.PNG',
          description: 'Item per category',
        },
        {
          path: './img/maxcloth-gallery/sso.PNG',
          description: 'SSO, Login , Signup',
        },
        {
          path: './img/maxcloth-gallery/ckpage.PNG',
          description: 'Added Cart and checkout page',
        },
        {
          path: './img/maxcloth-gallery/addcart.PNG',
          description: 'Adding of item to cart',
        },
        {
          path: './img/maxcloth-gallery/ckviastripe.PNG',
          description: 'stripe for payment gateway',
        },
      ],
      urlProject: 'https://max-cothing.netlify.app/',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/maxcloth',
      },
      imgUrl: './img/thumbnails/maxcloth.png',
    },
    {
      id: 1,
      name: 'Bookmark',
      shortDescription: 'A landing page that uses ReactJs and Tailwind-css as its main technology',
      technology: ['HTML', 'CSS', 'javascript', 'ReactJs', 'context-api', 'hooks'],
      gallery: [
        {
          path: './img/bookmark-gallery/hero.PNG',
          description: 'Hero Section',
        },
        {
          path: './img/bookmark-gallery/features.PNG',
          description: 'Features section',
        },
        {
          path: './img/bookmark-gallery/extensions.PNG',
          description: 'DL Extensions section',
        },
        {
          path: './img/bookmark-gallery/faqsctafooter.PNG',
          description: 'FAQS, CTA and footer section',
        },
        {
          path: './img/bookmark-gallery/accordion.PNG',
          description: 'Accordion',
        },
        {
          path: './img/bookmark-gallery/active.PNG',
          description: 'Active State Primary',
        },
        {
          path: './img/bookmark-gallery/nav.PNG',
          description: 'Mobile navigation',
        },
      ],
      urlProject: 'https://bookmark-fmtr.netlify.app/',
      demoVideo: {
        isAvailable: false,
        clipchamp: '',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/bookmark',
      },
      imgUrl: './img/bookmark-gallery/bookmark.PNG',
    },
    {
      id: 1,
      name: 'Friendger',
      shortDescription:
        'A Chat component layout design  that has capablity to filter friends and navigate to a specific conversation',
      technology: ['html', 'css', 'javascript', 'react', 'context-api', 'hooks'],
      gallery: [
        {
          path: './img/friendger-gallery/friendlist.PNG',
          description: 'Shows you all the list of your frinds',
        },
        {
          path: './img/friendger-gallery/chatconvo.PNG',
          description: 'shows you the chat conversation you have with specific friends',
        },
        {
          path: './img/friendger-gallery/filter.PNG',
          description: 'Allows you to filter friends',
        },
      ],
      urlProject: 'https://friendger.netlify.app/',
      demoVideo: {
        isAvailable: false,
        clipchamp: '',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/friendger',
      },
      imgUrl: './img/friendger-gallery/friendlist.PNG',
    },
    {
      id: 1,
      name: 'Fylo',
      shortDescription:
        'A Landing page built with ReactJs and Tailwind-CSS also has dark theme version',
      technology: ['html', 'css', 'javascript', 'react', 'context-api', 'hooks'],
      gallery: [
        {
          path: './img/fylo-gallery/fylo.PNG',
          description: '',
        },
        {
          path: './img/fylo-gallery/hero.PNG',
          description: '',
        },
        {
          path: './img/fylo-gallery/fylo-light.PNG',
          description: '',
        },
        {
          path: './img/fylo-gallery/features-light.PNG',
          description: '',
        },
        {
          path: './img/fylo-gallery/features.PNG',
          description: '',
        },
        {
          path: './img/fylo-gallery/cta.PNG',
          description: '',
        },
        {
          path: './img/fylo-gallery/footer-light.PNG',
          description: '',
        },
      ],
      urlProject: 'https://fylo-fe-mentor.netlify.app/',
      demoVideo: {
        isAvailable: false,
        clipchamp: '',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/fylo',
      },
      imgUrl: './img/fylo-gallery/fylo-light.PNG',
    },
    {
      id: 1,
      name: 'TodayWeLearn',
      shortDescription: 'A website that consolidates facts. User can also put on his own facts',
      technology: ['html', 'css', 'javascript', 'ReactJs', 'hooks'],
      gallery: [
        {
          path: './img/twl-gallery/todaywelearn.PNG',
          description: '',
        },
        {
          path: './img/twl-gallery/form.PNG',
          description: '',
        },
        {
          path: './img/twl-gallery/nofacts.PNG',
          description: '',
        },
        {
          path: './img/twl-gallery/sciences.PNG',
          description: '',
        },
      ],
      urlProject: 'https://todaywe-learn.netlify.app/',
      demoVideo: {
        isAvailable: false,
        clipchamp: '',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/todayilearned',
      },
      imgUrl: './img/twl-gallery/todaywelearn.PNG',
    },
    {
      id: 1,
      name: 'Shortly',
      shortDescription: 'Shortly is a website that provides you shorten link',
      technology: ['html', 'css', 'javascript', 'API'],
      gallery: [
        {
          path: './img/shortly-gallery/shortly.PNG',
          description: '',
        },
        {
          path: './img/shortly-gallery/hero.PNG',
          description: '',
        },
        {
          path: './img/shortly-gallery/half.PNG',
          description: '',
        },
        {
          path: './img/shortly-gallery/copied.PNG',
          description: '',
        },
        {
          path: './img/shortly-gallery/mobilenav.PNG',
          description: '',
        },
      ],
      urlProject: 'https://olaknowct.github.io/tw-projects/shortly/',
      demoVideo: {
        isAvailable: false,
        clipchamp: '',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/tw-projects/tree/master/shortly',
      },
      imgUrl: './img/shortly-gallery/shortly.PNG',
    },
    {
      id: 1,
      name: 'OmniFood',
      shortDescription:
        'a fictional company that focuses on personalizing food for people who are very busy with their jobs',
      technology: ['html', 'css', 'javascript'],
      gallery: [
        {
          path: './img/omnifood-gallery/omnifood.PNG',
          description: 'Omnifood landing page / Hero Section',
        },
        {
          path: './img/omnifood-gallery/howitworks.PNG',
          description: 'How it works section',
        },
        {
          path: './img/omnifood-gallery/meals.PNG',
          description: 'List of meals available',
        },
        {
          path: './img/omnifood-gallery/pricing.PNG',
          description: 'Price of the meals',
        },
        {
          path: './img/omnifood-gallery/testimonial.PNG',
          description: 'Testimony of user',
        },
        {
          path: './img/omnifood-gallery/cta.PNG',
          description: 'Call to action section',
        },
        {
          path: './img/omnifood-gallery/footer.PNG',
          description: 'Footer section',
        },
      ],
      urlProject: 'https://olaknowct.github.io/omnifood',
      demoVideo: {
        isAvailable: false,
        clipchamp: '',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/omnifood',
      },
      imgUrl: './img/omnifood-gallery/omnifood.PNG',
    },

    {
      id: 1,
      name: 'Nexter',
      shortDescription:
        'The project uses CSS Grid as the main tool to configure all the layout, it gives the ability to define its layout easily by setting its template row and column.',
      technology: ['html', 'css', 'javascript'],
      gallery: [
        {
          path: './img/nexter-gallery/nexter.PNG',
          description: 'nexter landing page / Hero Section',
        },
        {
          path: './img/nexter-gallery/features.PNG',
          description: 'Features section',
        },
        {
          path: './img/nexter-gallery/testimonial.PNG',
          description: 'Testimonial',
        },
        {
          path: './img/nexter-gallery/gallery.PNG',
          description: 'Gallery section',
        },
        {
          path: './img/nexter-gallery/galleryfooter.PNG',
          description: 'Gallery Footer',
        },
        {
          path: './img/nexter-gallery/active.PNG',
          description: 'Hover state of gallery',
        },
      ],
      urlProject: 'https://olaknowct.github.io/nexter',
      demoVideo: {
        isAvailable: false,
        clipchamp: '',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/nexter',
      },
      imgUrl: './img/nexter-gallery/nexter.PNG',
    },

    {
      id: 2,
      name: 'Monster-Rancher',
      shortDescription: 'is a deck of monster, monster rancher is a popular anime way back 2000s',
      technology: ['html', 'css', 'javascript', 'react'],
      gallery: [
        {
          path: './img/mrancher-gallery/default.PNG',
          description: 'Initial View',
        },
        {
          path: './img/mrancher-gallery/searchres.PNG',
          description: 'Search result',
        },
      ],
      urlProject: 'https://monster-rancher.netlify.app/',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/monster-rancher_v2',
      },
      imgUrl: './img/thumbnails/mr.png',
    },
    {
      id: 3,
      name: 'Advance-Forkify',
      shortDescription:
        'The project serves as a recipe reference for any kind of food, it gives you as well the details on how to cook and etc. there are a lot of feature develop on this project, please visit the repo for further details',
      technology: ['html', 'css', 'javascript'],
      gallery: [
        {
          path: './img/advforkify-gallery/default.PNG',
          description: 'empty search parameter',
        },
        {
          path: './img/advforkify-gallery/addrec.PNG',
          description: 'adding your own recipe',
        },
        {
          path: './img/advforkify-gallery/bookmarked.png',
          description: 'Bookmarked searched recipe',
        },
      ],
      urlProject: 'https://advance-forkify-chris.netlify.app/',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/advance-forkify',
      },
      imgUrl: './img/thumbnails/advforkify.png',
    },
    {
      id: 4,
      name: 'BookHub ',
      shortDescription:
        'is a movie booking system. Bookhub has 3 kind of user, 1. administrator , 2. Co-Admin and 3. Users . An administrator creates movie, show, and co-admin, while co-admin are the account holder of the branch',
      technology: [],
      gallery: [
        {
          path: './img/bookhub-gallery/1home.PNG',
          description: 'A homepage view ',
        },
        {
          path: './img/bookhub-gallery/2homedown.PNG',
          description: 'a glimpse of moving showing',
        },
        {
          path: './img/bookhub-gallery/3selectingbranch.PNG',
          description: 'this is where you select your choice of branch',
        },
        {
          path: './img/bookhub-gallery/4availablemovie.PNG',
          description: 'list of available movie from the branch check into',
        },
        {
          path: './img/bookhub-gallery/5availablesched.PNG',
          description: 'available schedule that based from selected branch and movie',
        },
        {
          path: './img/bookhub-gallery/6seats.PNG',
          description: 'seats available',
        },
        {
          path: './img/bookhub-gallery/7selectingseats.PNG',
          description: 'a gray color for selected seats',
        },
        {
          path: './img/bookhub-gallery/8loginfirst.PNG',
          description: 'a warning if tried to book',
        },
        {
          path: './img/bookhub-gallery/9admin.PNG',
          description: 'navigation if loggedin as Administrator',
        },
        {
          path: './img/bookhub-gallery/10coadmincreate.PNG',
          description:
            'Creation of Co-administrator (Administrator of a branch, creator of show and he knows everything such as schedule availablity, time , date etc.)',
        },
        {
          path: './img/bookhub-gallery/11createshow.PNG',
          description:
            'Administrator can create a show incase Co-administrator are unattended, just give the details and administrator will provision',
        },
        {
          path: './img/bookhub-gallery/12createshowbranch.PNG',
          description: 'A branch is need when creating a show if you are an Administrator',
        },
        {
          path: './img/bookhub-gallery/13createmovieadmin.PNG',
          description:
            'An Administrator need to upload new movies time to time. Creating show depends on the movie that has been uploaded on database',
        },
        {
          path: './img/bookhub-gallery/14listofmovies.PNG',
          description: 'This is where an Admin sees everything in his movie list',
        },
        {
          path: './img/bookhub-gallery/15coadmin.PNG',
          description: 'Co-Administrator Navigation',
        },
        {
          path: './img/bookhub-gallery/16coadmincreateshow.PNG',
          description: 'Co-Administrator create show for his branch',
        },
        {
          path: './img/bookhub-gallery/17successcreateshowcoadmin.PNG',
          description: 'Successfull creation of show',
        },
      ],
      urlProject: 'https://csp3-bookhub.herokuapp.com/',
      demoVideo: {
        isAvailable: true,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: { isAvailable: false, github: '' },
      imgUrl: './img/thumbnails/bookhub.png',
    },
    {
      id: 4,
      name: 'LoopStudios',
      shortDescription: 'A Land page website built with TailwindCSS',
      technology: ['html', 'css', 'javascript'],
      gallery: [
        {
          path: './img/loopstudios-gallery/loopstudios.PNG',
          description: 'Omnifood landing page / Hero Section',
        },
        {
          path: './img/loopstudios-gallery/hero.PNG',
          description: 'How it works section',
        },
        {
          path: './img/loopstudios-gallery/gallery.PNG',
          description: 'How it works section',
        },
      ],
      urlProject: 'https://olaknowct.github.io/tw-projects/loopstudios/',
      demoVideo: {
        isAvailable: false,
        clipchamp: '',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/tw-projects/tree/master/loopstudios',
      },
      imgUrl: './img/loopstudios-gallery/loopstudios.PNG',
    },
    {
      id: 4,
      name: 'Natours',
      shortDescription: 'A tour website that utilize advance CSS coding',
      technology: ['html', 'css', 'javascript'],
      gallery: [
        {
          path: './img/natours-gallery/hero.PNG',
          description: 'Hero Section',
        },
        {
          path: './img/natours-gallery/gallery.PNG',
          description: 'Gallry Section',
        },
        {
          path: './img/natours-gallery/cards.PNG',
          description: 'Cards',
        },
        {
          path: './img/natours-gallery/popular.PNG',
          description: 'Popular Tours Cards',
        },
        {
          path: './img/natours-gallery/Testimonial.PNG',
          description: 'Testimonial section',
        },
        {
          path: './img/natours-gallery/ctafooter.PNG',
          description: 'Call to action and footer section',
        },
        {
          path: './img/natours-gallery/nav.PNG',
          description: 'Navigation when clicked',
        },
      ],
      urlProject: 'https://olaknowct.github.io/natours/',
      demoVideo: {
        isAvailable: false,
        clipchamp: '',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/natours/tree/master',
      },
      imgUrl: './img/natours-gallery/hero.PNG',
    },
    {
      id: 5,
      name: 'API-Mapty',
      shortDescription:
        'is a simple fitness tracker, it has ability to log and track both cycling and running. The project uses an advance API available in the browser where we could leverage from this application',
      technology: ['html', 'css', 'javascript', 'php'],
      gallery: [
        {
          path: './img/mapty-gallery/locate.PNG',
          description: 'initial loading will ask your geolocation',
        },
        {
          path: './img/mapty-gallery/default.PNG',
          description: "if you haven't logged any fitness",
        },
        {
          path: './img/mapty-gallery/logg.PNG',
          description: 'about to logg',
        },
        {
          path: './img/mapty-gallery/logedcyc.PNG',
          description: 'Cycling Logged',
        },
        {
          path: './img/mapty-gallery/logrun.PNG',
          description: 'Running Logged',
        },
      ],
      urlProject: 'https://olaknowct.github.io/API-Mapty/',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/API-Mapty',
      },
      imgUrl: './img/thumbnails/mapty.png',
    },
    {
      id: 6,
      name: 'Array-Bankist',
      shortDescription:
        'is a simple bank app where you simply transfer/load, view balance, credit/debit history and closing account. Data is not persisted as it uses only an array for data structure',
      technology: ['html', 'css', 'javascript', 'php'],
      gallery: [
        {
          path: './img/arraybankist-gallery/default.PNG',
          description: 'This is the view when logged in',
        },
        {
          path: './img/arraybankist-gallery/login.PNG',
          description: 'Login Page',
        },
      ],
      urlProject: 'https://olaknowct.github.io/Array-Bankist/index.html',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/PG-Pig-Game',
      },
      imgUrl: './img/thumbnails/arraybankist.png',
    },
    {
      id: 7,
      name: 'DOM-Bankist',
      shortDescription:
        'A static website that emphasize the how javascript can add some elegance layer and handle interactive user interface',
      technology: ['html', 'css', 'javascript', 'php'],
      gallery: [
        {
          path: './img/dombankist-gallery/default.PNG',
          description: 'The default look of the website',
        },
        {
          path: './img/dombankist-gallery/features.PNG',
          description: 'Feature componet',
        },
        {
          path: './img/dombankist-gallery/openaccount.PNG',
          description: 'Modal effect',
        },
      ],
      urlProject: 'https://olaknowct.github.io/DOM-Bankist/index.html',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/DOM-Bankist',
      },
      imgUrl: './img/thumbnails/dom-bankist.png',
    },
    {
      id: 8,
      name: 'Pig-Game',
      shortDescription:
        'is a simple dice game first described in print by John Scarne in 1945.[1] Players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1.',
      technology: ['html', 'css', 'javascript', 'php'],
      gallery: [
        {
          path: './img/pigame-gallery/default.PNG',
          description: 'Default View of pigame',
        },
        {
          path: './img/pigame-gallery/set.PNG',
          description:
            "If you clicked 'RACE TO' Button, the modal will appear, you have the ability to set up to what race",
        },
        {
          path: './img/pigame-gallery/raceto.PNG',
          description: 'Race Button is modified based from what is being set',
        },
        {
          path: './img/pigame-gallery/rolldice.PNG',
          description: 'Rolling a dice gives the player ability to accumalate scores',
        },
        {
          path: './img/pigame-gallery/holdnext.PNG',
          description:
            'If Hold button clicked the current player will hold the accumulate the next turn will be the next player',
        },
        {
          path: './img/pigame-gallery/winner.PNG',
          description: 'Play wins if the score meets the race threshold',
        },
      ],
      urlProject: 'https://olaknowct.github.io/PG-Pig-Game/',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/PG-Pig-Game',
      },
      imgUrl: './img/thumbnails/pigame.png',
    },
    {
      id: 9,
      name: 'MicroFlag',
      shortDescription:
        'A website where it shows the Flag of a country selected, it uses a some API to establish some data. The application also focus on emphasizing asynchronous javascript',
      technology: ['html', 'css', 'javascript', 'php'],
      gallery: [
        {
          path: './img/microflag-gallery/default.PNG',
          description:
            'there are selected button. left buttons are countries that has no neighbor, right buttons are countries that has neighbor.',
        },
        {
          path: './img/microflag-gallery/wrmi.PNG',
          description:
            'Regardless of where you are, it will show the flag where the place you currently on',
        },
        {
          path: './img/microflag-gallery/jpno.PNG',
          description: 'this is what happen when a japan is being clicked',
        },
        {
          path: './img/microflag-gallery/chnan.PNG',
          description: 'China has a country neighbor, the smaller flag are the neighbor',
        },
      ],
      urlProject: 'https://olaknowct.github.io/MicroFlag/index.html',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/MicroFlag',
      },
      imgUrl: './img/thumbnails/microflag.png',
    },
    {
      id: 10,
      name: 'Tuitter',
      shortDescription:
        'is a social medial platform, it has ability of like and comment on a post, add friend, messenger, self update information, news feed and etc',
      technology: ['php', 'html', 'css', 'javascript', 'jquery'],
      gallery: [
        {
          path: './img/tuitter-gallery/nf.PNG',
          description: 'A default page or news feed page',
        },
        {
          path: './img/tuitter-gallery/notif.PNG',
          description: 'Notification pop up when someone liked or commented',
        },
        {
          path: './img/tuitter-gallery/edit.PNG',
          description: 'Updating your own information',
        },
        {
          path: './img/tuitter-gallery/msgpop.PNG',
          description: 'A quick look of the latest messages',
        },
        {
          path: './img/tuitter-gallery/msgsys.PNG',
          description: 'A messaging page where you can chat over with your selected friends',
        },
        {
          path: './img/tuitter-gallery/newsfeed.PNG',
          description: 'Another look of news feed',
        },
        {
          path: './img/tuitter-gallery/rad.PNG',
          description: 'When someone requesting for a friend request',
        },
      ],
      urlProject: 'https://tuitter-clo.herokuapp.com/',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: { isAvailable: false, github: '' },
      imgUrl: './img/thumbnails/tuitter.png',
    },

    {
      id: 11,
      name: 'GG-GuessGame',
      shortDescription:
        'A Guessing game. The idea of the game is we have a secret box and has a secret number inside, you need to guess whats the secret number inside a secret box. Come and play! ',
      technology: ['html', 'css', 'javascript', 'php'],
      gallery: [
        {
          path: './img/gg-gallery/default.PNG',
          description: 'The default look of the website',
        },
        {
          path: './img/gg-gallery/chk.PNG',
          description: 'Checking of guessed',
        },
      ],
      urlProject: 'https://olaknowct.github.io/GG-Guess-Game-/',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/GG-Guess-Game-',
      },
      imgUrl: './img/thumbnails/gg.png',
    },
    {
      id: 12,
      name: 'Loyal-Wallet',
      shortDescription:
        'is a dynamic website that illustrate the idea of loyal points. it has award and deduct loyal points functionality. A Loyal points history is provided as well',
      technology: ['html', 'css', 'javascript', 'php'],
      gallery: [
        {
          path: './img/loyalwallet-gallery/1default.PNG',
          description: 'The default look of the website',
        },
        {
          path: './img/loyalwallet-gallery/2addinguser.PNG',
          description: 'Adding of new user for this platform',
        },
        {
          path: './img/loyalwallet-gallery/3addingpoints.PNG',
          description: 'Adding of points to existing user',
        },
        {
          path: './img/loyalwallet-gallery/4redeembydeducting.PNG',
          description: 'Deducting points by means of Redeeming of   ',
        },
        {
          path: './img/loyalwallet-gallery/5deleteuser.PNG',
          description: 'Deleting Exising User',
        },
        {
          path: './img/loyalwallet-gallery/6edituser.PNG',
          description: 'Updating of existing user information',
        },
        {
          path: './img/loyalwallet-gallery/7listofusers.PNG',
          description: 'list of registered users',
        },
        {
          path: './img/loyalwallet-gallery/8phandsummary.PNG',
          description: 'a history of the points flow and summary table',
        },
        {
          path: './img/loyalwallet-gallery/9phtable.PNG',
          description: 'A detailed points history data table',
        },
      ],
      urlProject: 'https://loyal-wallet.herokuapp.com/',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: { isAvailable: false, github: '' },
      imgUrl: './img/thumbnails/loyalwallet.png',
    },

    {
      id: 13,
      name: 'Le-Game',
      shortDescription:
        'is a static website for gamer. it helps gamers to decide which game they really want to play.',
      technology: ['html', 'css', 'javascript'],
      gallery: [
        {
          path: './img/legame-gallery/1landingpage.png',
          description: 'A landing page for legame website ',
        },
        {
          path: './img/legame-gallery/2homepagetop.png',
          description: 'Upper-part home page view',
        },
        {
          path: './img/legame-gallery/3homepagetrailer.png',
          description: 'Middle-part homepage View',
        },
        {
          path: './img/legame-gallery/4homepagenews.png',
          description: 'Bottom-part Homepage view',
        },
        {
          path: './img/legame-gallery/5gallery.png',
          description: 'Gallery of Games',
        },
        {
          path: './img/legame-gallery/6gallery2.png',
          description: 'Gallery of Games v2',
        },
        {
          path: './img/legame-gallery/7about.png',
          description: 'About Page',
        },
        {
          path: './img/legame-gallery/8contact.png',
          description: 'Contact Page',
        },
      ],
      urlProject: 'https://olaknowsito.github.io/cps1_le_game/blurd.html',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: { isAvailable: false, github: '' },
      imgUrl: './img/thumbnails/legame.png',
    },

    {
      id: 14,
      name: 'Musical-Instru',
      shortDescription:
        'is an ecommerce website that creates and sells an item specificaly on musical instrument such as Guitar, Piano and Drums',
      technology: ['php', 'html', 'css', 'javascript', 'jquery'],
      gallery: [
        {
          path: './img/musical-gallery/default.PNG',
          description: 'Default page view ',
        },
        {
          path: './img/musical-gallery/ckpg.PNG',
          description: 'checkout page',
        },
      ],
      urlProject: 'https://musical-instru.herokuapp.com/',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: { isAvailable: false, github: '' },
      imgUrl: './img/thumbnails/musical-instru.png',
    },

    // {
    //     id: 3,
    //     name: "GitLaboratory",
    //     shortDescription:
    //         "is an asset management wherein it tracks all the transactions. GitLaboratory mainly focuses on a specific engineering laboratory. The schools can really utilize the product for a better transaction, maintaining equipments and for better monitoring purposes.",
    //     technology: [
    //         "laravel",
    //         "javascript",
    //         "jquery",
    //         "html",
    //         "css",
    //         "php",
    //     ],
    //     gallery: [],
    //     urlProject: "https://cps2-gitlaboratory.herokuapp.com/",
    //     demoVideo: {
    //         isAvailable: false,
    //         clipchamp: "https://clipchamp.com/watch/sYpbeA2kKFi",
    //     },
    //     repo: { isAvailable: false, github: "" },
    //     imgUrl: "./img/thumbnails/gitlaboratory.png",
    // },
  ];

  return (
    <section className='portfolio fade-in'>
      {portfolios.map((portfolio) => (
        <CardItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </section>
  );
};

export default PortfolioPage;
