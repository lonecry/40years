1、项目初始化 npm init<br/>
2、安装相关依赖包 cnpm i webpack webpack-cli -d<br/>
   处理cnpm404问题：  npm install -g cnpm --registry=https://registry.npm.taobao.org<br/>
3、安装webpack-dev-server    npm i webpack-dev-server -d<br/>
4、根目录下面 新建webpack.config.js<br/>
5、配置webpack<br/>
6、安装HtmlWebpackPlugin  npm i html-webpack-plugin -d<br/>
7、安装extract-text-webpack-plugin@next（注意是next开发包，才能实现css分离） npm i extract-text-webpack-plugin@next -d<br/>
8、安装各种loader  npm i html-loader file-loader style-loader css-loader -d<br/>
9、npm run start,npm run dev(前提配置好package.json) <br/>
10、css预处理，npm i postcss-loader -d 新建postcss.config.js文件，ExtractTextPlugin.extract 多使用一个postcss-loader<br/>
11、git init<br/>
12、git remote add origin git@github.com:lonecry/40years.git<br/> 
13、git add * <br/>
14、git commit -m "descriptions here"<br/>
15、git push origin master <br/>
16、gitignore 忽略node_modules 文件夹，根目录下创建gitignore.txt文件里面添加 '/node_modules',然后运行 ren gitignore.txt .gitignore命令 link：https://segmentfault.com/a/1190000014337700<br/>
16、links https://blog.csdn.net/qq_37577660/article/details/78565899<br/>
17、如有修改  < git add *> ----  <git commit -m ""> ----  <git push origin master> <br/>