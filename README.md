# Recipes App

This app allows a user to type in a specific food and view recipes that include that food


## How to Run

***THIS WILL NOT RUN WITHOUT YOUR OWN FOOD2FORK API KEY***

To run on your machine, you must first obtain a free Food2Fork API Key. You can get the API key from: https://www.food2fork.com/about/api. Please keep in mind, last I checked, the API only allows 50 calls PER DAY. 

#### Running the App - Instructions

1. Navigate to Terminal

> open directory in your Terminal

2. Start the server:

> type "yarn start"

> press "enter"

3. View the app:

> open localhost:3000 in your browser (might open automatically)


#### Running the Tests - Instructions

1. Navigate to Terminal

> open directory in your Terminal

2. Run Tests

> type "npm test"

> press enter


## Abilities & Features

* A user can search for any single food item and view the recipe
* A user can click a Home button that navigates them back to the previous page 


## Notable Technologies/Functions/Methods

| Technology/Function  | Purpose                                               |
| -------------------- |:-----------------------------------------------------:|
| Food2Fork API        | Source of Recipe Data                                 |
| Fetch API            | GET Req (fetch initial recipes)                       |
| Cors-Anywhere Heroku | Mimic a server in production for the API call(s)      |
| Boostrap             | Styling components                                    |
| Env Variable         | Safe usage of API Key                                 |
| Local Storage        | Save original lookup data so a user can navigate back |

* Using React Router Dom to handle properly routing between the main list of recipes and the individual recipe information
* Making the initial API call, once a user inputs a specific food, then allowing the user to click on an item and open a custom URL with that specific foods id


## Future Implementation(s)

* Heavy refactoring potential in this entire app
* Improve code clarity readability using more modern understandings of React (i.e. Hooks)
* When a user searches for a particualar item, sometimes the page can try to load before the data and an error can occur, look into the lifecycle method or Hook that would resolve this
* Make the More Info Component that displays more information for a specific recipe into a pop up modal
* Make it so that the initial GET Req is for Pizza recipes and a user can type in a query to change it
* Use warmer colors; make the look and UI feel more welcoming
