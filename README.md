# NuxtJS Web App
NuxtJS Web App Frontend with Serverless Functions 

## Setup
### Install nvm
[https://nvm.sh](https://nvm.sh)

``` bash
# use node version
nvm use
```

### Install packages
``` bash
# update package manager
npm install -g npm

# install packages
npm install
```

### Create .env file
Create the .dev.vars file based on .dev.vars.sample

## Start
``` bash
# set node version + start web app
nvm use
npx nuxi dev --dotenv .dev.vars
```

```bash
# start worker
npx wrangler pages dev .output
```