# express-react-app
This is getting started with express and react

# Heroku Deployment checklist -
1. Dynamic port binding - 

    `const PORT = process.env.PORT`
2. Specify node engine in package.json file

    `"engines": {
        "node": "8.1.4",
        "npm" : "5.0.3"
    }`
3. Start script -

    `node index.js`
4. Sign up for Heroku Account
5. Search Process of Heroku CLI installation
6. On Terminal Verify Heroku version - 

        `heroku -v`
7. Login to Heroku through CLI -

        `heroku login`
8. Create Heroku app - 

        `heroku create`
9. Now add remote repository to your current repository. This is basically the target remote repository for Heroku(Use second Link generated while creating heroku app) -
 
        `git remote add heroku secondLink`
10. Now push your code to heroku master repository for deployment - 
    
        `git push heroku master`
11. Now open your app -

        `heroku open`
12. Follow-up deployment -
        
        `git status
         git add . 
         git commit -m "changed message"
         git push (to your git repo)
         git push heroku master (for heroku master repository)
         heroku logs (to verify if there any error occurs)
        `