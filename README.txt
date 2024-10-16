This is basically just to get an icon on mobile when the app is added to the home screen.
It also allows the program to be run as a separate browser instance without a tab bar.

# Quick Start
--------------------------------------

go to https://nicolas42.github.io/pwa
There should be an icon in the url bar that allows the program to be installed. 

locally 
python3 -m http.server 8000
http://localhost:8000


Usage
--------------------------------

Basically, just put this in your html header.
<link rel="manifest" href="manifest.json">

Then make a manifest.json file and put this in it.

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

Change the name and short_name.  Short name seems to be used on mobile icons.
Change the start_url.  

Standalone means it'll run in a separate instance like an app.  It can also be set to browser but I haven't had much luck testing that yet.
I'm not sure about the effects of background_color and theme_color.  The icon is the icon.  Multiple icons with different sizes can be defined.  


Testing
-----------------------------------
Tested on windows and on an iphone using add to home screen.


Discussion of additional features
----------------------------------------
There is a way to add an install button by triggering on an beforeinstallprompt event.
However this doesn't work in ios so it's a bit pointless.
There are libraries that claim to offer this kind of functionality with cross platform compatibility
but I haven't tested them nor do I have much of an idea about their long-term robustness or stability.

The service-worker.js file is apparently used for more advanced features like push notifications.
It's left as a blank file in this example.


