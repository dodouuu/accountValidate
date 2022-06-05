![cover](https://i.imgur.com/y5sWwCu.png)
# Account Login app 
打造一個帳號密碼驗證器


---
## 功能列表

1. 輸入 Email Password 按下 Sign in：
    1. 通過的話會跳到歡迎畫面
    2. 沒通過的會清空，並且顯示 No such user

    

---
安裝
1. 從 Terminal (command line interface) 移動到想存放專案的位置，執行：
```
git clone https://github.com/dodouuu/accountValidate.git
```
2. 進入 repository 
```
cd accountValidate
```
3. 安裝套件
```
macOS 請至nvm 的 GitHub 頁面：https://github.com/creationix/nvm。安裝 nvm
Windows 請至nvm 的 GitHub 頁面：https://github.com/coreybutler/nvm-windows/releases。安裝 nvm
nvm install 14.16.0
nvm use 14.16.0
npm i express@4.18.1
npm install -g nodemon
npm i express-handlebars@4.0.2
npm i mongoose@5.9.7
npm install body-parser
npm install method-override@3.0.0
npm install standard --save-dev
```
4. 資料庫
    1. 開啟 MongoDB Atlas
    2. 開啟 Robo3T => Create Database => Database Name:URLshortener
    3. 設定環境變數，以 Git Bash 為例，輸入：
    ```
    export MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.am8naws.mongodb.net/accountValidate?retryWrites=true&w=majority"
    ```

5. 執行
```
npm run seed
```
6. 確認 Terminal 顯示以下資訊，代表初始資料建立成功
```
mongoDB connected!
start usersSeeder
usersSeeder create successfully!
```
7. 執行
```
npm run dev
```

8. 確認 Terminal 顯示
```
[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
App is running on http://localhost:3000
mongoDB connected!
```
代表啟動成功，打開瀏覽器，在網址列輸入http://localhost:3000

9. 停止伺服器
```
ctrl + C
```

---
## 開發工具
1. Node.js 14.16.0
2. Express 4.18.1
3. nodemon 2.0.16
4. Express-Handlebars 4.0.2
5. MongoDB mongoose 5.9.7
6. Bootstrap 5.0.2
7. method-override 3.0.0
