import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyDzEUKevwsee4QMBIsn7-zfXrZBLBGNyY8",
  authDomain: "react-sec02-054.firebaseapp.com",
  projectId: "react-sec02-054",
  storageBucket: "react-sec02-054.appspot.com",
  messagingSenderId: "335759748688",
  appId: "1:335759748688:web:f927d7de0a6b93fbcb6b55"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BNIQuuRbC_ZqnKGDMbh15yHOK_8uClSWeRxlFmGNKlyx0I044MGNG9s1kLXip9d9MkjwJ5L1xWZgOwMeiCLiYb4"
);

export { messaging };
