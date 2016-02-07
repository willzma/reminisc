[HackFSU Submission](http://devpost.com/software/reminisc-815cy7)

## Inspiration
We were initially trying to find practical uses of the Clarifai API, and found that it could be used in conjunction with information found in Facebook photos to easily sort the images. We decided that this was a feature that could greatly improve Facebook's already existing API. By combining these technologies, we were able to create an efficient and effective tool to help users easily locate old pictures and relive good times.

## What it does
Reminisc is an application that brings up a user's history of photos in an easy to use and visually appealing web application. The user can filter the pictures based on people tagged, the captions of the images, and tags created by the Clarifai API.

## How we built it
We first worked on implementing an API that interfaces with the Facebook Graph API, and Clarifai's picture tagging service, and condenses this information for consumption by a single page Angular.js application. After completing this original benchmark, we focused on extending our product into mobile devices and created an iOS application that made use of our previously created API.

## Challenges we ran into
Some of our original plans for hosting the web application online fell through early on, and we had to quickly decide how to make our product public. In creating the actual application, we did not really run into many issues until we started developing the iOS application. We developed it using the Ionic Framework to make use of our team's previous experience with Angular.js and web development. However, it was not straightforward and required a little bit of experimenting.

## Accomplishments that we're proud of
We successfully harnessed the power of Facebook's Graph API and were able to use it with Clarifai to make a product that we feel greatly extends Facebook's existing feature set. We were also able to quickly create fully functional web AND mobile applications in the same weekend, surprising our entire team.

## What we learned
We gained a great deal of experience in Angular.js and learned how to use the Ionic framework to our advantage to quickly develop stable mobile apps.

## Built With
ionic
javascript
node.js
mongodb
angular.js
express.js
amazon-web-services
facebook-graph
facebook-login-api
clarifai
ios
