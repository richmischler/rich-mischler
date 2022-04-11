#### Rich Mischler Website
A site built using React, Typescript and deployed using CDK with S3 and Cloudfront UI

### Local
add .env file with following

```dotenv
CDK_DEFAULT_ACCOUNT=123456789012
CDK_DEFAULT_REGION=us-east-1
NODE_ENV=development
HOST=localhost
```
```shell
export $(cat .env xargs)
yarn install
yarn start
```

open localhost:3000

### Deploy
yarn run cdk synth
yarn run cdk deploy

### Live Site
Take a look at the website [here](https://richmischler.com)
