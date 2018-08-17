# PokéDash
Reading about Pokémon is one thing, knowing about the 700+ different ones are another.
How about a easy to understand chart to break down what types of Pokémon that exists?
Or your own Pokedex? Even better what about a amazing simluated battle to watch two Pokémon's fight eachother.

Welcome to PokéDash the dashboard that gives you the overview with a dash of fun in!
So come and start your own journey!

[PokéDash](https://eventyret.github.io/PokemonDashboard/)
 
## UX

This was a simple dashboard, but I as a developer found it boring to just have a "Dashboard" they all look the same. Since this was for a well known game and stats around this, the people should feel right at home. It should feel like they are in the World of Pokémon's.

The whole thing starts with the loadingscreen with a animated intro from Pokémon Gold.
Just as in the game you would have a "Start Button"

#### The Dashboard
![bOawvp1.png](https://i.imgur.com/bOawvp1.png)

Navigating a Dashboard can always be tricky so be sure to see "Professor Oak" and he will gladly explain what Pokémon's are and a bit about the page. This was ment for a rough intro to it for users. Once closed the user will not see this again, unless the Poké Dex icon in the menu is clicked.


#### Pokemon List
![cUj3MuO.png](https://i.imgur.com/cUj3MuO.png)

The Pokemon list acts as the Poké Dex, where you can find a small image of each pokemon and some stats about them, this was intended to be looking and styled as a Pokedex, but due the layout and how the page looks I felt that this should be more of a table.
Though on Mobile a Table can be hard to read, so this was redone to fetch data as small cards for easier understanding and reading on mobile devices.
![nKeTODu.png](https://i.imgur.com/nKeTODu.png)


#### Pokémon Battles
![FHmy67G.png](https://i.imgur.com/FHmy67G.png)
What is Pokémon without a Pokémon Battle! For me this was a must, and for the project a bonus. Some people really wanted this to be the main event with more functionality and this is something I have planned do at a later stage. It will change color depending on if it's in a fight, waiting, or not started.

Winner is drawn by random by rolling a dice between 0-10.

Again for mobile "cards" where used for simplicity and the way it's easier for a user to consume.
![GUkWdOv.png](https://i.imgur.com/GUkWdOv.png)

#### Page Not Found
I always love good 404 pages, they are supposed to be fun but still have a meaning for the user.
This will ruin the suprise with a screenshot so please do visit our the live demo [here](https://eventyret.github.io/PokemonDashboard/not-found)

[Live Wireframes Link](https://xd.adobe.com/view/b71a6a43-a920-4df7-4c89-2d12299817b7-c12b/?fullscreen&hints=off)


## Features

#### Pokémon by type
- You can visulize the data and clearly see the amount of Pokémon's by their type. 
  This means its easy to see how many "Steeel", "Electric", "Fairy" types of pokemon there is.

#### Pokémon Avg Stats
- This is will display the average stats for the all Pokémon's combined.

#### Pokémon List
- A Simple table list displaying each pokemon, and its stats.

#### Pokémon Battle
- A minigame for the visitor to take part in to have fun and play a small round of Pokémon!

### Features Left to Implement
- The minigame (aka Battle) needs a bit more attention to details, some people have requested to make use of stats to make a winner instead of random.
- Legend for BarChart, this is working fine for Pie Chart but due the package, it seems to have an issue with loading undefined on Barcharts.
- Filter by other types. Currently it the table only sorts.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

### Front End
- [Angular](https://angular.io/)
    - The project uses **Angular** as a framework.
- [Bootswatch - Cosmo](https://bootswatch.com/)
    - The main color theme used.
- [NG-Bootstrap](https://ng-bootstrap.github.io)
    - This makes it possible to use Bootstrap components without Jquery
    - Ready built directives and more native support for Angular
>The goal of ng-bootstrap is to completely replace JavaScript implementation for components. Nor should you include other dependencies like jQuery or popper.js. It is not necessary and might interfere with ng-bootstrap code.
- [Angular CLI](https://cli.angular.io/)
    - This is the Command Line Interface which makes it easy to generate components, services and scaffold the project.
- [TypeScript](https://www.typescriptlang.org/)
  - Angular is written in Typescript. Typescript is a supoerset of Javascript that compiles into plain Javascript.



### Back end
- [Python](https://www.python.org/)
    - The base back end language, [Flask](http://flask.pocoo.org/) is written in Python.
- [Flask](http://flask.pocoo.org/)
	- Flask is the microframework and the whole backend api is running on, this is used to loop over our mongodb response, to then output it for the front end to consume.
- [MongoDB](https://www.mongodb.com/)
	- MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL. I'm using this as my choice of database for this project.
- [Heroku](https://www.heroku.com/)
	- Heroku is a cloud platform as a service supporting several programming languages.  I'm using Heroku to host our backend platform
- [mLab](https://www.mlab.com/)
	- mLab is a fully managed cloud database service that hosts MongoDB databases.
	In convension with Heroku, this is offered as a free addon and serves as holding our database.



## Testing

You can do a quick unittest to see if the api response on `api`
```python
python api\test.py
```

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

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
