This system relies on capturing an event called beforeinstallprompt.  But this doesn't work on ios
so it's a bit silly.  There are some libraries that claim to fix this issue but I haven't tested them and who knows what their support would be, especially if the underlying programming interfaces change.  

So, I've gotten rid of the install button.  It's probably more stable to rely on the mechanisms of the browsers themselves.  Chrome on ios for instance 

To install a PWA on iOS, follow these steps:

Open Safari: iOS only supports PWA installation through Safari, so make sure to use that browser.

Visit the PWA Website: Navigate to the website you want to install as a PWA.

Tap the Share Button: At the bottom of the Safari screen, you'll see the Share icon (a box with an arrow pointing up). Tap it.

Select 'Add to Home Screen': Scroll down the share sheet and tap on the Add to Home Screen option.

Customize the Name (Optional): You can change the name of the PWA that will appear on your home screen, if desired.

Tap 'Add': The PWA will now appear on your home screen like a regular app icon.

Once added, the PWA will function like a native app, launching in full-screen mode without the Safari interface. It will also cache content for offline use if set up with a service worker.







# Quick Start

python3 -m http.server 8000

go to http://localhost:8080

There should be an icon in the url bar that allows the program to be "installed".

It may need to be run on an https server to work on a proper server.


# ChatGPT explanation of a Progressive Web App

what is a progressive web app?
ChatGPT said:
ChatGPT
A Progressive Web App (PWA) is a type of web application that offers an app-like experience directly through a web browser. PWAs are designed to be fast, reliable, and engaging, combining the best of websites and mobile apps. Here are the key features:

Installable: Users can add PWAs to their home screen without going through an app store.
Offline Access: They can work offline or with poor internet connectivity through caching.
Responsive: They adapt to any screen size (mobile, tablet, desktop).
Push Notifications: They can send notifications like native apps.
Secure: PWAs are served over HTTPS, ensuring secure communications.
They provide a seamless user experience by integrating features traditionally found in native apps.


# To Do

Test on a proper server.  Not local host.  
Test on a mobile phone.
See if we can change the install link from something that is in the url bar to something else, like a link in the webpage.
Implement described functionality
