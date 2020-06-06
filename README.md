<h1 align="center">
    <img alt="Ecoleta" src="https://res.cloudinary.com/zagatti/image/upload/v1591460899/readme/logo_3x_xv7eea.png" />
    <br>
    ♻️ Ecoleta ♻️
</h1>

<h3 align="center">
  Your waste collection marketplace
</h3>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/azagatti/ecoleta?style=plastic">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/azagatti/ecoleta?style=plastic">

  <img alt="Repo size" src="https://img.shields.io/github/repo-size/azagatti/ecoleta?style=plastic">

  <a href="https://github.com/AZagatti/ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/azagatti/ecoleta?style=plastic">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/azagatti/ecoleta?style=plastic">

  <a href="https://app.codacy.com/manual/AZagatti/ecoleta/dashboard">
    <img alt="Code Quality" src="https://img.shields.io/codacy/grade/68af2047ff0a4ed9aafa998a865736b6?style=plastic">
  </a>
</p>

<div align="center">

  [![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Ecoleta&uri=https%3A%2F%2Fres.cloudinary.com%2Fzagatti%2Fraw%2Fupload%2Fv1591460808%2Fimsomnia%2Fecoleta_sptymz.json)

</div>

<p align="center">
  <a href="#ℹ%EF%B8%8F-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-preview">Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## ℹ️ About

<div align="center">

  <p align="center">
    Ecoleta is a project for places to register with the type of waste they collect and people to find places to deposit waste
  </p>

  <img alt="Be The Hero" width="700" src="https://res.cloudinary.com/zagatti/image/upload/v1591459961/readme/capa-ecoleta_ltbv0r.png" />
</div>

## 👁 Preview

<div align="center">

The web application is responsible for registering the place that receives the waste.

  <img src="https://res.cloudinary.com/zagatti/image/upload/v1591461653/readme/ecoleta-web_nwdnpi.gif" />
</div>

<div align="center">

The mobile application is where people select what type of waste they want to deposit and find the place to receive it.
<br/>
Available for Android and iOS.

  <img width="250" src="https://res.cloudinary.com/zagatti/image/upload/v1591461653/readme/ecoleta-android_oj9zd6.gif" />
  <img width="258" src="https://res.cloudinary.com/zagatti/image/upload/v1591461653/readme/ecoleta-iphone_yy8sdv.gif" />
</div>

## 🖥 Technologies

This project was developed in the [Next Level Week of Rocketseat](https://www.youtube.com/rocketseat) over the course of a week using Node.js, ReactJS and React Native with Typescript to create a complete application.

The project was developed with the following technologies:

<details>
  <summary>Backend</summary>

- [Celebrate](https://github.com/arb/celebrate)
- [Cors](https://www.npmjs.com/package/cors)
- [Express](https://www.npmjs.com/package/express)
- [Knex](http://knexjs.org/)
- [Node.js](https://nodejs.org/)
- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [TS-Node](https://www.npmjs.com/package/ts-node)
- [TS-Node-Dev](https://www.npmjs.com/package/ts-node-dev)
- [Typescript](https://www.typescriptlang.org/)

</details>

<details>
  <summary>Frontend</summary>

- [Axios](https://www.npmjs.com/package/axios)
- [Leaflet](https://leafletjs.com/)
- [React](https://pt-br.reactjs.org/)
- [React DOM](https://pt-br.reactjs.org/docs/react-dom.html)
- [React Dropzone](https://github.com/react-dropzone/react-dropzone)
- [React Icons](https://react-icons.netlify.com/#/)
- [React Leaflet](https://react-leaflet.js.org/)
- [React Router Dom](https://reacttraining.com/react-router/web/)
- [Styled Components](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)

</details>

<details>
  <summary>Mobile</summary>

- [Axios](https://www.npmjs.com/package/axios)
- [Expo](https://expo.io/learn)
- [Expo Constants](https://docs.expo.io/versions/latest/sdk/constants/)
- [Expo Font](https://docs.expo.io/versions/latest/sdk/font/)
- [Expo Google Fonts](https://github.com/expo/google-fonts)
- [Expo Location](https://docs.expo.io/versions/latest/sdk/location/)
- [Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [React Native Appearance](https://github.com/expo/react-native-appearance)
- [React Native Picker Select](https://www.npmjs.com/package/react-native-picker-select)
- [React Native Svg](https://github.com/react-native-community/react-native-svg)
- [React Navigation](https://reactnavigation.org/)
- [Styled Components](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)

</details>

## 🚀 Getting started

First of all you need to have `node` and `yarn`(or `npm`) installed on your machine.

_If you decide to use npm don't forget to delete yarn.lock in folders_

Then you can clone the repository.

`git clone https://github.com/azagatti/ecoleta`

First start the application backend.

1. `cd backend`
2. `yarn` or `npm install`
3. `yarn dev` or `npm run dev`

Now starting the web application.

1. `cd frontend`
2. `yarn` or `npm install`
3. `yarn start` or `npm run start`

Starting the application with Expo.

1. `cd mobile`
2. `yarn` or `npm install`
3. `yarn start` or `npm run start`
4. Press on `Run on Android device/emulator` or `Run on iOS simulator`
5. Another option is to install Expo on your phone and scan the QRCode.

_For the api to work on the cell phone, change the fields that have a fixed IP to your own IP_

## 📝 License

This project is under the MIT license. See the [LICENSE](https://github.com/AZagatti/ecoleta/blob/master/LICENSE.md) for more information.

---

Made with 💟 by André Zagatti 👋 [Talk to me!](https://www.linkedin.com/in/andre-zagatti/)
