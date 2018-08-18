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

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

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
    ChartJS is an open-source Javascript library. All charts in this projectare generated with this.
	
- [Lodash](https://lodash.com/)
	Loadsh is a modern JavaScript utility libary making complex code with arrays and objects a simple task.
	
- [Angular2 Charts](https://valor-software.com/ng2-charts/)
    Angular2 directives for Chart.js. This is used to render our Chart.js within Angular as a native directive.
	
- [Ngx-pagination](http://michaelbromley.github.io/ngx-pagination)
    A simple solution to create pagination without a lot of code using directives in Angular.
	On the mobile display we are switching from an table to cards, by using this we can then also add pagination to the same data without calling the directive on the charts.
	
- [NgxSpinner](https://napster2210.github.io/ngx-spinner/)
    Animated loading spinner service, this is the small clock you will see when making API calls and waiting for data. This then gives a simple service which you can call with `.show()` or `.hide()`



### Back end
- [Python](https://www.python.org/)
	>Python is a programming language that lets you work quickly and integrate systems more effectively.
    The whole backend is written in [Python](https://www.python.org/) as [Flask](http://flask.pocoo.org/) is written in Python.
	
- [Flask](http://flask.pocoo.org/)
	>Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions.
    The API backend is written with the [Flask Microframwork](http://flask.pocoo.org/) this is used to loop over the database, create an array and append the results into it for Angular to consume.

- [MongoDB](https://www.mongodb.com/)
    >MongoDB is a free and open-source cross-platform document-oriented database program
	The Pokémon data we gathered was a simple CSV file with the help of [mongoimport](https://docs.mongodb.com/manual/reference/program/mongoimport/) we can make a simple one line command to import a CSV file into our NoSQL Database.
	
- [Heroku](https://www.heroku.com/)
    >Heroku is a cloud platform as a service supporting several programming languages. 
    >
	When hosting different applications that are not static [Heroku](https://www.heroku.com/) is a great choice atleast I think.
	If the backend is Django, Flask, Node, Ruby On Rails or any other this is a great hosting enviroment which simplifies alot of work. 
	We can simply push our app to heroku using their [CLI](https://devcenter.heroku.com/articles/heroku-cli) and from there it does everyting for you, you can also setup pipelines and pull from a github repo.
	
	See more about this in [Deployment](#Deployment) below.
	
- [mLab](https://www.mlab.com/)
    >mLab is a fully managed cloud database service that hosts MongoDB databases.
    In convention with Heroku, this is offered as a free addon, this means we do not need to spin our anything like an docker image or anything to run our host.



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
I'm fairly certain that i have done alot of tests. So for manual we have tested the follwoing

#### Browsers
	- Microsoft Explorer 11
	-  Microsoft Edge (v18)
	-  Chrome (v70)
	-  Firefox Developer Edition (v62)

#### Responsive Testing
Since the project is built with Bootstrap 4 (Bootswatch) i'm fairly certain things are responsive, though there will always be widths and heights that are uncommon and will "glitch". An example of this was pointed out to me on the following widths and heights
```
710-726px x 837px
919-935px x 837px
```
The bug here would be regarding ChartJS and the Angular 2 Charts, where it would try to resize itself and go into an infinite loop. I'm currently working finding a solution but trying to delay the resize or change the breakpoint will then cause it to break on a different breakpoint.


### Known Bugs

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part, you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Dataset
- [Pokemon with stats | Kaggle](https://www.kaggle.com/abcsds/pokemon)
  - This is the Dataset originated from, have been customized and added images to all of them and cleaned up Mega Evolution Pokémon
### Acknowledgements

- I received inspiration for this project from X
