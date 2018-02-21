# classy-vue
> A Vue.js project


## Setup

* npm install -g vue-cli
* cd classy-vue
* npm run dev
* npm install sass-loader node-sass style-loader --save-dev
    *  Add rule to build/webpack.base.conf.js
    ``` rules: [
     {
       test: /\.s[a|c]ss$/,
       loader: 'style!css!sass'
    },``` 
* npm install --save axios vue-axios

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


