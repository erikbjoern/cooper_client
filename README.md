# The Cooper Calculator

*Week four of the Craft Academy Bootcamp*

***

This app **calculates your aerobic endurance** using the **Cooper method**. Run as far as you can in 12 minutes and enter the distance you ran, your age and gender to get an approximate rating of your VO2max. Logged in, a user can save their data and view their historical data. Currently in the form of a list specifying the rating and the date the data was saved.

The app is made with **JS, React** and styled with **Semantic UI for React**. It communicates with an API built in **Ruby on Rails** with the help of **Devise Token Auth** and **PostreSQL** as database.

***

## Improvements
* First of all it needs the functionality for a user to create an account. Right now, only user@mail is the only one.
* It should have ability to manage data entrys - deleting, editing.
* It should have ability to specify which date the run was made, in case it's not today's date.
* The distance run should be saved along with the rating and date.
* The historical data should be displayed in a more visual way, preferably a chart.
* A user should only have to specify their gender and birthday when registering and have the calculator use that instead of manual input of age and gender every time.

## Credits:
Accessing value from React Semantic UI dropdown thanks to [Saphie Abayomi on Medium.com](https://medium.com/@saphieabayomi/accessing-input-values-from-a-semantic-ui-react-dropdown-f9ede94976fa)
