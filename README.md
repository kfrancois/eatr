# How to deploy

Eatr currently runs on the Heroku platform. Below are the steps required to deploy this app yourself

## Prerequisites

* A [Git installation](https://git-scm.com/)
* A [Heroku account](https://signup.heroku.com/)
* The [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
* MongoDB database hosting - eatr uses [mLab](https://mlab.com/)

## Deploying



1. Clone the 'deploy'-branch of this repository and go into the directory

```
  git clone -b deploy https://github.com/kfrancois/webapps.git && cd webapps
```

2. Create a Heroku app
```
  heroku create
```

3. [Browse to your app](https://dashboard.heroku.com/apps) and go to your app's settings

[logo]: https://imgur.com/5sG4Itg "Settings"

4. Reveal Config Vars

[logo]: https://imgur.com/7jDb8r3.jpg "Reveal config vars"

5. Enter your own backend secret and the connection string to your database.
__Do *not* share these with anyone, and make sure your backend secret is sufficiently secure. This secret doesn't have to be readable.__

[logo]: https://imgur.com/0QsiFlc "Your backend secret & database url"

6. Your website is now running!
