# Dorm Portal

Dormitory reservation and management system for both students and dormitory managers.

## Live Demo

https://dorm-portal.herokuapp.com

## Running locally

For the API, you can simply write in your command line (this will prepare the virtual environment, migrate the db, and run the server):

```
python run.py
```

To run the SPA project:
```
yarn install
yarn run serve
```

## Deploy on Heroku

<p align="center">
    <a href="https://heroku.com/deploy?template=https://github.com/coretabs/dorm-portal">
        <img src="https://www.herokucdn.com/deploy/button.svg">
    </a>
</p>


### Seeding Database

To get up and running in a matter of seconds, simply run `python manage.py seed` to get your database seed.

### Scheduled Tasks

You will need to add both `update_rates` and `collectquota` scheduled tasks into your deployed app whether [using cron](https://askubuntu.com/a/2369) or [Heroku Scheduler](https://devcenter.heroku.com/articles/scheduler). Their job is to update the exchange rate (for currency conversion) and collect the quota (from the expired reservations), respectively.

## Tech stack

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Vue.js_Logo.svg" width="50"> <img src="https://www.djangoproject.com/m/img/logos/django-logo-negative.svg" width="80"> <img src="https://cdn.worldvectorlogo.com/logos/heroku-1.svg" width="120">
</p>
