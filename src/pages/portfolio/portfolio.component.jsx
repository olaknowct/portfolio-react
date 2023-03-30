import React from 'react';
import CardItem from './../../components/card/card-item.component';

import './portfolio.styles.scss';

const PortfolioPage = () => {
  const portfolios = [
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
      urlProject: 'https://olaknowct.github.io/monster-rancher/',
      demoVideo: {
        isAvailable: false,
        clipchamp: 'https://clipchamp.com/watch/sYpbeA2kKFi',
      },
      repo: {
        isAvailable: true,
        github: 'https://github.com/olaknowct/monster-rancher',
      },
      imgUrl: './img/thumbnails/mr.png',
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
      urlProject: 'https://maxcloth.herokuapp.com/',
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
  ];

  const compare = (a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  };

  return (
    <section className='portfolio fade-in'>
      {portfolios.sort(compare).map((portfolio) => (
        <CardItem key={portfolio.id} portfolio={portfolio} />
      ))}
    </section>
  );
};

export default PortfolioPage;
