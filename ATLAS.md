# Atlas MongoDB
The database hosting service Atlas lets us host a development database for free. Detailed instructions for the setup can be found below.

- Signup for the service at https://account.mongodb.com/account/register.
- Create an organization. You can call it however you like.
- Create a project in your organization. I called it ShoppingList, but again, you can call it however you like.
- Build a free cluster in your project. The details (hoster, location...) don't matter.
- Grant access to the cluster: Go to "Network Access" and add 0.0.0.0/0 to the IP white list
- Add a user: Go to "Database Access" and add a user with password

Creating the database and adding the items will be done in next week's tutorial.
