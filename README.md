* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.body {
  background-color: bisque;
  min-height: 100vh;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
}
.logo {
  width: 150px;
}

.nav-items > ul {
  display: flex;
  list-style-type: none;
}

.nav-items > ul > li {
  padding: 10px;
  margin: 10px;
  font-size: 20px;
}
.res-container {
  display: flex;
  flex-wrap: wrap;
}
.res-card {
  margin: 10px auto;
  width: 300px;
  height: 380px;
  padding: 5px;
  transition: 1s;
  background-color: "#f0f0f0";
}
.link-card{
  margin: 0px auto;
  text-decoration: none;
}
.res-card:hover {
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  transition: 1s;
}
.title {
  padding-bottom: 5px;
  padding-left: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
.search {
  padding: 10px;
}
.res-logo {
  width: 100%;
  height: 60%;
  margin-bottom: 10px;
}
.filter-btn {
  margin: 10px;
  padding: 5px 10px;
}

.shimmer-container {
  display: flex;
  flex-wrap: wrap;
}
.shimmer-card {
  margin: 10px auto;
  width: 300px;
  height: 380px;
  padding: 5px;
  background-color: #f0f0f0;
}
.card-img {
  width: 270px;
  height: 200px;
  margin: 10px 10px;
  background-color: #dfbfbf;
}

.login {
  padding: 0px 15px;
  cursor: pointer;
}
.footer{
  display: flex;
  justify-content: center;
  padding: 20px;
}
.user-container{
  width: 20%;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}