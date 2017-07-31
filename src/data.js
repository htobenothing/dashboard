import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';

const main = process.env.PUBLIC_URL+"/main";
const data={
  username:"Albert Ho",
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: main+"/system" },
    { text: 'Form Page', icon: <Web/>, link: main+'/form' },
    { text: 'Table Page', icon: <GridOn/>, link: main+'/table' },
    { text: 'Login Page', icon: <PermIdentity/>, link: main+'/login' }
  ],
  
}

export default data