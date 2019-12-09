const open = require('open');
 
// Opens the image in the default image viewer
(async () => {
     await open('https://sindresorhus.com');
 
    // Specify the app to open in
    await open('https://sindresorhus.com', {app: 'firefox'});
 
    // Specify app arguments
    await open('https://sindresorhus.com', {app: ['google chrome', '--incognito']});
})();