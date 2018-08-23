# PokéDash
Reading about Pokémon is one thing, knowing about the 700+ different ones are another.
How about an easy to understand chart to break down what types of Pokémon that exists?
Or your own Pokedex? Even better what about an amazing simulated battle to watch two Pokémon's fight each other.

Welcome to PokéDash the dashboard that gives you the overview with a dash of fun in!
So come and start your own journey!

[PokéDash](https://eventyret.github.io/PokemonDashboard/)
 
## UX

This was a simple dashboard, but I as a developer found it boring to just have a "Dashboard" they all look the same. Since this was for a well-known game and stats around this, the people should feel right at home. It should feel like they are in the World of Pokémon's.

The whole thing starts with the loading screen with an animated intro from Pokémon Gold.
Just as in the game you would have a "Start Button"

### The Dashboard
![bOawvp1.png](https://i.imgur.com/bOawvp1.png)

Navigating a Dashboard can always be tricky so be sure to see "Professor Oak" and he will gladly explain what Pokémon's are and a bit about the page. This was meant for a rough intro to it for users. Once closed the user will not see this again unless the Poké Dex icon in the menu is clicked.


### Pokemon List
![cUj3MuO.png](https://i.imgur.com/cUj3MuO.png)

The Pokemon list acts as the Poké Dex, where you can find a small image of each pokemon and some stats about them, this was intended to be looking and styled as a Pokedex, but due to the layout and how the page looks, I felt that this should be more of a table.
Though on Mobile a Table can be hard to read, so this was redone to fetch data as small cards for easier understanding and reading on mobile devices.
![nKeTODu.png](https://i.imgur.com/nKeTODu.png)


### Pokémon Battles
![FHmy67G.png](https://i.imgur.com/FHmy67G.png)
What is Pokémon without a Pokémon Battle! For me, this was a must and for the project a bonus. Some people really wanted this to be the main event with more functionality and this is something I have planned to do at a later stage. It will change colour depending on if it's in a fight, waiting, or not started.

The winner is drawn by random by rolling a dice between 0-10.

Again for mobile "cards" were used for simplicity and the way it's easier for a user to consume.
![GUkWdOv.png](https://i.imgur.com/GUkWdOv.png)

### Page Not Found
I always love good 404 pages, they are supposed to be fun but still have a meaning for the user.
This will ruin the surprise with a screenshot so please do visit our the live demo [here](https://eventyret.github.io/PokemonDashboard/not-found)

## [Live Wireframes](https://xd.adobe.com/view/b71a6a43-a920-4df7-4c89-2d12299817b7-c12b/?fullscreen&hints=off)
If you do not have adobe XD installed you can have a look at the wireframes live on this page.


## Features

### Pokémon by type
- You can visualise the data and clearly see the amount of Pokémon's by their type. 
  This means its easy to see how many "Steel", "Electric", "Fairy" types of pokemon there is.

### Pokémon Avg Stats
- This is will display the average stats for the all Pokémon's combined.

### Pokémon List
- This is a simple table displaying data about each pokemon along with the picture of it.

### Pokémon Battle
- A minigame for the visitor to take part in to have fun and play a small round of Pokémon!

## Features Left to Implement
- The minigame (aka Battle) needs a bit more attention to details, some people have requested to make use of stats to make a winner instead of random.
- Legend for BarChart, this is working fine for Pie Chart but due to the package, it seems to have an issue with loading undefined on Bar charts.
- Filter by other types. Currently it the table only sorts.
- If the server does not respond and we get an error, you will be stuck on a loading screen, I'm working on implementing an error handler to remove the loading screen and show an error. The reason was I sadly did not get enough time to implement this, but the idea is then to redirect to a page. As without the data we are unable to display anything to the user. - ***This is now implemented***

## Technologies Used

These are technologies and third-party packages that are used throughout the project

### Front End
- [Angular](https://angular.io)/
    Angular (commonly referred to as "Angular 2+") is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
    I'm using this to build all the front end logic and components for my app. As Typescript makes it easy to compile and also easy to scaffold code.
- [Bootswatch - Cosmo](https://bootswatch.com/)
    Bootswatch is a collection of bootstrap themes. We are using the Cosmo theme modified with some material colours.

- [NG-Bootstrap](https://ng-bootstrap.github.io)
    NG Bootstrap was created to give components and directives to Angular without the use of jQuery.
    I'm using the modal, and tooltip directives to display information for the user in a simple but good way.
    >The goal of ng-bootstrap is to completely replace JavaScript implementation for components.

- [Angular CLI](https://cli.angular.io/)
    The Angular CLI is part of the Angular platform and is a great command-line interface to scaffold, generate, test and lint your code.
    This makes it easy to scaffold out components that we use in the project, saving time and give more time to focus on developing the application rather than create all the files, import them etc.
  
- [Chart.js](https://www.chartjs.org/)
    ChartJS is an open-source Javascript library. All charts in this project are generated with this.
    
- [Lodash](https://lodash.com/)
    Lodash is a modern JavaScript utility library making complex code with arrays and objects a simple task.
    
- [Angular2 Charts](https://valor-software.com/ng2-charts/)
    Angular2 directives for Chart.js. This is used to render our Chart.js within Angular as a native directive.
    
- [Ngx-pagination](http://michaelbromley.github.io/ngx-pagination)
    A simple solution to create pagination without a lot of code using directives in Angular.
    On the mobile display we are switching from a table to cards, by using this we can then also add pagination to the same data without calling the directive on the charts.
    
- [NgxSpinner](https://napster2210.github.io/ngx-spinner/)
    Animated loading spinner service, this is the small clock you will see when making API calls and waiting for data. This then gives a simple service which you can call with `.show()` or `.hide()`

- [ngx-toastr](https://github.com/scttcper/ngx-toastr)
    An amazing npm module to create minimal toast notification services.
    Using this to display errors and information on the first screen when fetching the API.



### Back end
- [Python](https://www.python.org/)
    >Python is a programming language that lets you work quickly and integrate systems more effectively.
    The whole backend is written in [Python](https://www.python.org/) as [Flask](http://flask.pocoo.org/) is written in Python.
    
- [Flask](http://flask.pocoo.org/)
    >Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions.
    The API backend is written with the [Flask Microframwork](http://flask.pocoo.org/) this is used to loop over the database, create an array and append the results into it for Angular to consume.

- [MongoDB](https://www.mongodb.com/)
    >MongoDB is a free and open-source cross-platform document-oriented database program
    The Pokémon data we gathered was a simple CSV file with the help of [mongoimport](https://docs.mongodb.com/manual/reference/program/mongoimport/) we can make a simple one-line command to import a CSV file into our NoSQL Database.
    
- [Heroku](https://www.heroku.com/)
    >Heroku is a cloud platform as a service supporting several programming languages. 
    >
    When hosting different applications that are not static [Heroku](https://www.heroku.com/) is a great choice at least I think.
    If the backend is Django, Flask, Node, Ruby On Rails or any other this is a great hosting environment which simplifies a lot of work. 
    We can simply push our app to Heroku using their [CLI](https://devcenter.heroku.com/articles/heroku-cli) and from there it does everything for you, you can also setup pipelines and pull from a GitHub repo.
    
    See more about this in [Deployment](#Deployment) below.
    
- [mLab](https://www.mlab.com/)
    >mLab is a fully managed cloud database service that hosts MongoDB databases.
    In convention with Heroku, this is offered as a free add-on, this means we do not need to spin our anything like a docker image or anything to run our host.



## Testing

### Automatic Testing:
The course teaches and goes into the dept of TDD and writing automatic testing.
I'm a person that loves the challenge of searching then test and write code.
So I admit that writing a lot of TDD has not been the biggest but I wanted to give it a go.

I wrote a quick and simple test to see if we can get a response with `content_type="application/json"` and a response code of `200`.
This test should simply check that the route is correct and that it will give you the correct data back.

You can run the unit test by executing the following:
```python
python api\test.py
```
**Note:** If you are in the folder `api` you can simply run
```python 
python test.py
```

### Manual Tests
I'm fairly certain that I have done a lot of tests. So for manual tests, we have tested the following

#### Responsive Testing

##### Browsers
```
Microsoft Explorer 11
Microsoft Edge (v18)
Chrome (v70)
Firefox Developer Edition (v62)
```

##### Frontend
I had some issues regarding the battle, where the help text would not update. This was simply because I forgot to rename the help text in `battles.component.ts` this was fixed at a later date but now updates correctly.

The user would start a battle and the help text would be `Get Ready to fight` user then would start the fight and the text would change to `Fight in progress` once fight was completed it would say `Please stop the Fight to continue` now the bug would the be that if a user clicked stop it would still display this message. This was fixed in the following commit [#d922680](https://github.com/Eventyret/PokeDash/commit/d92268082b31c66d9670458f1e038ea157174f3b)

### Known Bugs

Since the project is built with Bootstrap 4 (Bootswatch) I'm fairly certain things are responsive, though there will always be widths and heights that are uncommon and will "glitch".

1. An example of this was pointed out to me on the following widths and heights

```
710-726px x 837px
919-935px x 837px
```
The bug here would be regarding ChartJS and the Angular 2 Charts, where it would try to resize itself and go into an infinite loop. I'm currently working finding a solution but trying to delay the resize or change the breakpoint will then cause it to break on a different breakpoint.

 1. Go to the Pokémon Stats page
 2. Resize to any of the above sizes. `710-726px X 837px` or `919-935px X 837px`
 3. You will see that the Chart will try to auto update and flickers.

2. There is also a bug where if Bar Chart Legend is enabled it will display undefined, I do think the reason for this is that it writes and creates the Labels BEFORE it fetches the data. Sadly I have been unable to fix this, so if you have a way to do this please let me know so this can be fixed.
***To reproduce the bug or test this:***
  1. Open `bar-chart.components.ts`
  2. Change line 38 `public barChartLegend = false;` to `public barChartLegend = true;`
  3. `ng serve` to start the server
  4. Open PokéDash Stats Page or navigate to `/dashboard`

You will now see that at the top of the Bar Chart the legend it's undefined`

## Installing and building

### Requirements
```
NodeJS 8+
NPM 5.6+
Python 3+
Angular 4+
```

##### Installing
1. Clone the project `git clone https://github.com/Eventyret/PokeDash.git`
2. `cd` into the project
3. Create a Virtual Environment `virtualenv .venv` (This creates a folder named `.venv` to hold python environment files)
4. Install Python dependencies `pip install -r api\requirements.txt` (the `api\` is if you still are in the PokeDash folder)
5. Install Angular dependencies by running `npm install` (This will install all angular dependencies)

#### Running project locally.

As a developer, I feel its important to give you different ways to run your backend in a simple and clean way, so I have made two ways to run your backend project.

##### Backend
***Sidenote***: The project has set up a default database to connect to on developer mode, check #Deployment for info on how to create a database etc to connect to.
1. Docker (Recommended)
    If you have [Docker](https://www.docker.com/) installed you can simply run
    `docker-compose up` and the server will be running on port 5000
2. Manual
    2.1 Activate the Virtual Enviroment:
        Windows: `.venv\Scripts\Active`
        Unix: `source .venv\bin\activate`
    2.2 Start the server
        `python api\app.py`
        
##### Frontend
Since we are using angular for our build it's as simple as running: `ng serve` in the root folder of the project.
This will start our development server on port `4200`
##### Building
To build your app and make it ready for deployment Angular again gives you a simple command to build and make this ready
`ng build --prod --base-href "https://yourdomain.com/`
If you are building this to be uploaded directly to the root folder of a domain you can also shorten this by doing
`ng build --prod` 

##### Backend

## Deployment

### Backend

**The App**
There is a simple but great git command we can use to upload JUST the backend instead of the whole project folder.
We can use the power of git and use `git subtree` to upload and deploy ONLY the API to Heroku you can use the following command.

`git subtree push --prefix api heroku master`
*note the API here which is the folder name we want to push*

**The Database**
We are using mlab with Heroku so please follow this guide [mLab MongoDB | Heroku Dev Center](https://devcenter.heroku.com/articles/mongolab) if you have not created a NoSQL database before with mlab
We need to set a secret variable so Heroku knows what database to use.
**Make Sure you set the configurations before you push to the server**
`heroku config:set Development=False`
`heroku config: set SECRET_URI="mongodb://<dbuser>:<dbpassword>@XXX.mlab.com:XXXX/XXXX"`
Make sure you change the following in that string
    - <dbuser> your mlab username for the database
    - <dbpassword> your mlab password for the database

All this information you can find on [mlab Dashboard](https://www.mlab.com/databases/) once you are logged in. You are looking for an URL like the one in this picture.
![0r2UfHC.png](https://i.imgur.com/0r2UfHC.png)


### Frontend
After you have **built** your application you got a few options.
1. If you are uploading to your own domain, just upload the content of the `dist` folder and you're ready to go.
2. If you want to deploy to GitHub Pages there is an amazing dev dependency installed in the project for you named [GitHub pages for angular-cli users](https://github.com/angular-schule/angular-cli-ghpages). So all you need to do is issue the command `npx ngh` and the npm package will automatically publish this to your GitHub pages.
***Sidenote:*** If your using this method make sure you do `ng build --prod --base-href "https://USERNAME.github.io/REPOSITORY_NAME/"` this is to make it compatible with GitHub pages.
In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- Loading Animation Pikachu - [Pikachu - SVG Animation](https://codepen.io/royutoan/pen/JXOwwL)
### Media
- [PokéAPI · GitHub](https://github.com/PokeAPI) - For all Pokémon Sprites
- [I Like Sticker](https://www.ilikesticker.com/LineStickerAnimation/S002997-Pok%C3%A9mon-The-Oaks/en) - Professor Oak image
- Loading Animation [Pokemon Gold Desktop Background Animation - Album on Imgur](https://imgur.com/gallery/0Gi6O)

### Dataset
- [Pokemon with stats | Kaggle](https://www.kaggle.com/abcsds/pokemon)
  - This is the Dataset originated from, have been customized and added images to all of them and cleaned up Mega Evolution Pokémon
