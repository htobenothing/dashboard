import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';

const main = process.env.PUBLIC_URL + "/main";
const data = {
  username: "Albert Ho",
  menus: [
    { text: 'DashBoard', icon: <Assessment />, link: main + "/system" },
    { text: 'Gallery', icon: <Web />, link: main + '/gallery' },
    { text: 'Form Page', icon: <Web />, link: main + '/form' },

    { text: 'Table Page', icon: <GridOn />, link: main + '/table' },
    { text: 'Login Page', icon: <PermIdentity />, link: main + '/login' },
    { text: 'Chat Room', icon: <PermIdentity />, link: main + '/chat' },
  ],

  posts: [
    { id: "post1", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift1", author: "James1", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post2", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift2", author: "James2", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post3", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift3", author: "James3", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
  ]
  
  
}
export const initText = `# Mark Down in Browser

Enjoy your life in markdown, focus on your thought. 

Make lif easy and comfortable, be a person to always getting better

-----
Thanks for the:
1. [react-codemirror](https://github.com/JedWatson/react-codemirror):Codemirror Component for React.js
2. [react-markdown](https://github.com/rexxars/react-markdown):Render Markdown as React components `

export default data