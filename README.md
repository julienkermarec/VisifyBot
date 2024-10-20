

## Deploying

### Progressive Web App

1. Run `ionic build --prod`
2. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`



### Deploy

`ionic build --prod -- --base-href https://julienkermarec.github.io/VisifyBot/`
`npx angular-cli-ghpages --dir=www`



Here is how to use angular-cli-ghpages with Ionic 4:

Create your Ionic project (ionic start MyApp blank)
Install the plugin: npm i angular-cli-ghpages --save
Connect your project with your github repository.
Navigate in the terminal to your project directory and execute ionic build --prod -- --base-href https://YOUR_GITHUB_USERNAME.github.io/YOUR_PROJECT_NAME/, what will create the www folder, which is comparable to the dist folder for Angular. It also sets your github page domain as base href in index.html.
Then run the plugin: npx angular-cli-ghpages --dir=www. The flag at the end points to the www folder, where the index.html file is located that will be displayed at https://YOUR_GITHUB_USERNAME.github.io/YOUR_PROJECT_NAME/. The plugin will create a branch called "gh-pages" in your project that contains all files which are located in your www folder.
As a last step you have to select the "gh-page" branch in the settings of your project (https://YOUR_GITHUB_USERNAME.github.io/YOUR_PROJECT_NAME/settings) as a source for your github page.

