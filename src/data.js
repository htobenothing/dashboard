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
    { text: 'Login Page', icon: <PermIdentity />, link: main + '/login' }
  ],

  posts: [
    { id: "post1", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift1", author: "James1", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post2", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift2", author: "James2", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post3", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift3", author: "James3", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post4", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift4", author: "James4", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post5", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift1", author: "James1", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post6", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift2", author: "James2", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post7", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift3", author: "James3", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post8", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift4", author: "James4", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post9", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift1", author: "James1", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post10", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift2", author: "James2", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post11", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift3", author: "James3", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post12", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift4", author: "James4", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post13", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift1", author: "James1", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post14", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift2", author: "James2", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post15", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift3", author: "James3", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post16", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift4", author: "James4", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post17", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift1", author: "James1", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post18", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift2", author: "James2", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post19", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift3", author: "James3", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
    { id: "post20", imageUrl: "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg", title: "Best Gift4", author: "James4", date: "2016-05-04", breifInfo: "ListeningStateChangedEvent" },
  ]

}

export default data