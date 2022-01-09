# T131-localhost

Official Repository for DotSlash 5.0 Submission of Team 131: localhost.

**Team Members:**

    * Priyan Kishore
    * Sreeram K L
    * Aaryan Deshpande

## Inspiration

When we were surfing through social media websites and other blogs, we came across some NSFW content in the form of posts or ads that made us uncomfortable, and we wondered what would happen if these disturbing contents were exposed to children. As a result, we devised a method of filtering explicit content from the internet without blocking the entire site or post.

## What it does

The extension replaces all obscene words and expressions with the word "peace," and a list of user-defined words, regardless of language, can be inserted and added to the extension's list of harmful words.
<br>
The extension also substitutes random images of nature and art for explicit and obscene images on the page, making the dream of a kid-friendly internet a reality.

## How we built it

- Having all of the harmful keywords and matching them to all of the words on the web page and replacing them with the safer word.
- Obtaining words from the user and adding them to the list of obnoxious words
- Obtaining the links to all of the images on the web page and sending them to the server, where a deep learning artificial intelligence model determines whether or not the image is safe. If the ai reviewed image is unsafe, the image link is replaced.
- The extension has an authentication setup, in which a password can be set during installation, and the extension will require the password for subsequent use. This is done to keep the child from turning it off or making changes.

## Tech Stacks

- Python
- JavaScript
- flask
- HTML
- AI
- Deep Learning

## Challenges we ran into

- It was extremely difficult to combine the projects into one extension and properly connect it to the frontend ui after they were completed as separate tasks.
- Some websites were broken as a result of the extension, and dealing with those situations was difficult.

## Accomplishments that we're proud of

- We created a fully functional extension with a user-friendly user interface that achieved our goal of filtering out explicit content.
- We had a full Hackathon experience with close to 24 hours of continuous coding.

## What we learned

- We had always doubted our ability to carry out plans and turn concepts into workable prototypes. We learnt to work as a team and discuss the steps necessary to finish the task, and we were able to do it more quickly than we anticipated.
- This is our first extension, so we've learnt a lot about extensions and the Chrome development environment.

## What's next for Web Warden | T131: localhost

- Have additional features such as timer that can be set, which stops the browser when the timer runs out.
- Some bugs has to be handled.
