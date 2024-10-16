# Quick Start
--------------------------------------

go to https://nicolas42.github.io/pwa
There should be an icon in the url bar that allows the program to be installed. 

locally 
python3 -m http.server 8000
http://localhost:8000


Explanation
--------------------------------

This is basically just to get an icon on mobile when the app is added to the home screen.
It also allows the program to be run as a separate browser instance without a tab bar.

Basically, just put this in your html header.
<link rel="manifest" href="manifest.json">

Then make manifest.json and put this in it.
Change the name and short_name.  Short name seems to be used for a mobile icon.
Change the start_url.  
Standalone means it'll run in a separate instance.  It can also be set to browser but I haven't had luck using that.  
Honestly, I'm not sure about the effects of background_color and theme_color but when I removed them 
The icon is the icon.

{
    "name": "My Simple Web App",
    "short_name": "WebApp",
    "start_url": "/pwa/index.html",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#000000",
    "icons": [
        {
            "src": "/pwa/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
        }
    ]
}
