## To run locally

# Create .env file

PORT = ENTER PORT
CONNECTION_URL = ENTER YOUR MONGODB URL HERE

# Update url in ./client/src/api/index.js file

baseURL = 'http://localhost:5000';

## To deploy in HEROKU

# Create .env file

CONNECTION_URL = ENTER YOUR MONGODB URL HERE

# Create Procfile file

web: npm run start

# Update url in ./client/src/api/index.js file

baseURL = 'https://beyond-the-blog.herokuapp.com';

## And follow Heroku instructions to deploy, visit https://www.heroku.com/

cd server/
git init
heroku login
heroku git:remote -a heroku-repo-name-here
git add .
git commit -m "make it better"
git push heroku master -f
