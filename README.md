# planning.center

## Set up development
```bash
npm install --global gatsby-cli
cd ~/Code/planningcenter/
git clone git@github.com:planningcenter/planning.center.git
cd planning.center
npm install
```

## Run development
`gatsby develop`

## Deploy to staging
A staging environment is setup at [planningcenter.netlify.com](planningcenter.netlify.com).
Pushes to the `master` branch will rebuild the site.
It typically takes less than 5 minutes.
```bash
git push
```
