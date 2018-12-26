1、项目初始化 npm init
2、安装相关依赖包 cnpm i webpack webpack-cli -d
   处理cnpm404问题：  npm install -g cnpm --registry=https://registry.npm.taobao.org
3、安装webpack-dev-server    npm i webpack-dev-server -d
4、根目录下面 新建webpack.config.js
5、配置webpack
6、安装HtmlWebpackPlugin  npm i html-webpack-plugin -d
7、安装extract-text-webpack-plugin@next（注意是next开发包，才能实现css分离） npm i extract-text-webpack-plugin@next -d
8、安装各种loader  npm i html-loader file-loader style-loader css-loader -d
9、npm run start,npm run dev(前提配置好package.json) 
10、css预处理，npm i postcss-loader -d 新建postcss.config.js文件，ExtractTextPlugin.extract 多使用一个postcss-loader
11、git init
12、git remote add origin git@github.com:lonecry/40years.git 
13、git add * 
14、git commit -m "descriptions here"
15、git push origin master 
16、links https://blog.csdn.net/qq_37577660/article/details/78565899