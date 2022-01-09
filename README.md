# T131-localhost

Official Repository for DotSlash 5.0 Submission of Team 131: localhost.

**Team Members:**

    * Priyan Kishore
    * Sreeram K L
    * Aaryan Deshpande

## Inspiration

When we were surfing through the social media websites and other blogs, we were exposed to some of the NSFW content in the form of posts or ads, for which we ourselves didn't feel comfortable and wondered what if these contents that disturb even the adults were exposed to kids. So, we came up with an idea to filter out the explicit content from the internet without blocking the entire site or the post.

## What it does

The extension replaces all the obsecene words and expressions with the word "peace", additionally list of user defined words can also be inserted irrespective of language, which will be added to the extension's list of harmful words.
<br>
The extension also replaces the explicit and obscene images within the page with random images of nature and art, making the dream of kid-friendly internet a reality.



## How we built it

- Having all the harmful keywords and match all those words in the web page and replace those with that of the given safer word.
- Getting words from the user and put it to the array of the harful words
- Getting the link of all the images in the web page and send it to the server, where a deep learning ai model finds whether the image is safe or not. The link of the image is replaced, if the ai reviewed image is unsafe
- The extension has an authentication setup, where a password can be set while installing the extension, and will need password for subsequent use of the extension. This is done to have the kid away from switching it off or making modifications

## Tech Stacks

- Python 
- JavaScript
- flask (Web Server)
- HTML
- Deep Learning (Nudity Detection)

## Challenges we ran into

- After completing the project as separate tasks, it was very hard to integrate them into one extension and properly connect it to the frontend ui
- The extension broke some websites, it was a challenge to handle those cases

## Accomplishments that we're proud of

- We made a fully working extension with a user-friendly ui that fulfilled our objective which is to filter out the explicit content
- Full-fledged Hackathon experience and close to 24 hours of continuous coding.

## What we learned

- We always doubted on our abililty to execute things and about bringing ideas to working prototypes. We learned to work as a team and discuss things that are required to complete the objective and were able to do it more efficiently that we thought we could.
- This is the first extension that we are making, so we learned a lot about extensions and about the chrome development scope

## What's next for Web Warden | T131: localhost

- Have additional features such as timer that can be set, which stops the browser when the timer runs out.
- Some bugs has to be handled.
