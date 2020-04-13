# React and Spring Boot First Setup

*Created on: 11-04-2019*<br />
*Last updated on: 13-04-2019*

**Contributors:**<br />
Jeffrey Spaan (Full Stack Developer @ CodeBean)<br />
Jordy Hamwijk (Full Stack Developer @ CodeBean)<br />
<br />
Welcome developer. This is the first tutorial in developing your first Web Application with <strong>React and Spring Boot.</strong><br />
Moving forward, we will use this repository as starting point for any further repositories which we will post here on GitHub.<br />
In this tutorial we will cover the basics and setup a React frontend with a Spring Boot backend.
<br />

### What is React?
<strong>React</strong> is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.<br />
It's used for handling the view layer for web and mobile apps. <strong>React</strong> also allows us to create reusable UI components.<br />
The use of UI components eases the development and reduces the development time of your application.<br />
<br />

### What is Spring Boot?
<strong>Spring Boot</strong> is a Java-Based framework used to create a micro service.<br />
Configuring the backend of your application is simplified with the use of Spring Boot dependencies which enables you to simply select the required dependencies to quickly setup the backend of your application.<br />
Speaking of which, let's start with creating our backend right away.<br />
<br />
## Getting started
In your browser, open: [https://start.spring.io](https://start.spring.io)<br />
* **Project:** ```Maven Project```<br />
* **Language:** ```Java```<br />
* **Spring Boot (version):** We will use the latest stable version: ```2.2.6```<br />
* **Group:** this is your internet domain, backwards. For CodeBean we will use: ```nl.codebean```<br />
* **Artifact:** this is the name of your project. For this project we will use: ```react-spring-boot```<br />
* **Description:** this is a short description about your project. For this project we will use: ```React and Spring Boot Tutorial```<br />
* **Packaging:** ```JAR```<br />
* **Java:** version ```8```<br />
* **Dependencies:** ```Spring Web```<br />

To create the pre-generated Spring Boot application, click: <strong>GENERATE</strong><br /><br />


![Spring Boot Dependency Selection](https://raw.githubusercontent.com/codebean-university/react-spring-boot/master/images/spring-boot-dependency-selection.jpg)
<br /><br />
A ZIP file is downloaded on your hard-drive. Open the ZIP file and extract the project folder.<br />
Open the project folder in your favorite IDE.<br />
<br />
### POM.xml
A Project Object Model or POM is the fundamental unit of work in Maven.<br />
It is an XML file that contains information about the project and configuration details used by Maven to build the project.<br />
<br />
The following listing shows the ```POM.xml``` file that is created when you choose a Maven project:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.2.6.RELEASE</version>
    <relativePath/> <!-- lookup parent from repository -->
  </parent>
  <groupId>nl.codebean</groupId>
  <artifactId>react-spring-boot</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <name>react-spring-boot</name>
  <description>React and Spring Boot Tutorial</description>

  <properties>
    <java.version>1.8</java.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
      <exclusions>
        <exclusion>
          <groupId>org.junit.vintage</groupId>
          <artifactId>junit-vintage-engine</artifactId>
        </exclusion>
      </exclusions>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
         <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>

</project>
```
<br />

### Spring Boot Controller
Let's add a service to make the application output some data.<br />
To do so, add a controller named: ```GreetController.java```<br />

Save the Controller in ```src/main/java/nl/codebean/reactspringboot/GreetController.java```<br />

```java
package nl.codebean.reactspringboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetController {

  @RequestMapping("/api/greet")
  public String greet() {
    return "Greetings from CodeBean!";
  }
}
```

```@RestController```: This is a <strong>Spring Boot</strong> annotation which marks the class as a Controller;
<br />

```@RequestMapping```: This is a <strong>Spring Boot</strong> annotation which maps ```"/api/greet"``` to the ```greet()``` method;
When invoked from a browser or by using curl on the command line, the method returns text only. That is because ```@RestController``` combines ```@Controller``` and ```@ResponseBody```, two annotations that results in web requests returning data rather than a view.<br />
<br />
Now let's run the application in the terminal.<br />
<br />

### Run the Spring Boot Application
To start the application, open the command terminal and execute following task (shown with its output):<br />
*In this tutorial, terminal commands are marked with > in front of the original command.*<br />

```console
> mvn spring-boot:run

2020-04-12 10:42:20.303  INFO 2232 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 8080 (http)
2020-04-12 10:42:20.311  INFO 2232 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2020-04-12 10:42:20.312  INFO 2232 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.33]
2020-04-12 10:42:20.378  INFO 2232 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2020-04-12 10:42:20.378  INFO 2232 --- [           main] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 896 ms
2020-04-12 10:42:20.503  INFO 2232 --- [           main] o.s.s.concurrent.ThreadPoolTaskExecutor  : Initializing ExecutorService 'applicationTaskExecutor'
2020-04-12 10:42:20.610  INFO 2232 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2020-04-12 10:42:20.612  INFO 2232 --- [           main] n.c.r.ReactSpringBootApplication         : Started ReactSpringBootApplication in 1.444 seconds (JVM running for 1.78)
```

Once the application is started, let's run the service (in a separate command terminal).
Execute the following task (shown with its output):<br />
```console
> curl http://localhost:8080/api/greet
Greetings from CodeBean!
```

Great work! The <strong>Spring Boot</strong> REST service is now up and running.<br />
Let's continue with getting the backend data to the frontend.<br />
<br />

### Create React frontend
Now we will build the frontend using the JavaScript library called <strong>React.</strong><br />
In the frontend we are able to fetch the data which is generated by the backend. Let's get started!<br />

```console
> npx create-react-app frontend

Creating a new React app in ../react-spring-boot/frontend

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts with cra-template...
Installing template dependencies using npm...
Removing template package using npm...

Success! Created frontend at ../react-spring-boot/frontend

We suggest that you begin by typing:

  cd frontend
  npm start
```

The instructions are clear, let's continue doing so (shown with its output):
```console
> cd frontend
> npm start

Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000

```

Open your browser and go to http://localhost:3000 to view the <strong>React</strong> application.<br />
It should look something like this:

![React created browser](https://raw.githubusercontent.com/codebean-university/react-spring-boot/master/images/react-created-browser.JPG)<br />
<br />

## View REST Services from Spring Boot in the React frontend

Our next task is to show the API data from the backend *(server-side)* in the frontend *(client-side)*.<br />
The backend is running on port **8080** ```http://localhost:8080```<br />
The frontend is running on port **3000** ```http://localhost:3000```<br />
<br />
Both ports are now running alongside eachother without any interconnectivity. To allow read and write access from the frontend port to the backend port, we need to setup a proxy which allows data transfer.<br />

This is solved by adding a ```proxy``` field to your ```frontend/package.json``` file which allows port ```3000``` to transfer data from/to port ```8080```.<br />
```json
"proxy": "http://localhost:8080",
```

Your ```frontend/package.json``` file should now look something like this:

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "3.4.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "proxy": "http://localhost:8080",
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
To learn more about proxying API requests, see Create React App's [documentation](https://create-react-app.dev/docs/proxying-api-requests-in-development/#docsNav).<br />
<br />
Let's test if we are now able to access the data from the frontend also.<br />

First, restart your frontend. *To stop the current session, type CTRL + C in your IDE terminal window.*<br />
Once the frontend is restarted, open a new terminal window and type following command (shown with its output):
```console
> curl http://localhost:3000/api/greet
Greetings from CodeBean!
```
<br />

### Fetch data from the Spring Boot backend in the React frontend

We're almost there. We will now fetch the data from the backend to show in the frontend.<br />
Open your ```/frontend/src``` folder. Add a folder named ```components```.<br />
In the ```components``` folder, add a file named ```Greet.js```<br />

*According the React best practices, the components folder will contain all files which act as a component.*<br />
*According the React best practices, the component names will start with a capital letter.*<br />

Your ```/src``` folder structure will now look like this:
```
.
├─ ...
├─ components
│   └─ Greet.js
└─ ...
```

Add the following code to your ```Greet.js``` file.<br />


```jsx
import React, { useState, useEffect } from 'react';

const Greet = () => {
  const [greet, setGreet] = useState("");

  async function fetchData() {
    fetch('/api/greet')
      .then(res => res.text())
      .then(greet => {
        setGreet(greet);
    });
  }
  
  useEffect(() => {
    fetchData()
  }, []);
  
  return (
  <div>
    <p>{greet}</p>
  </div>
  )
}

export default Greet;
```

Now open your ```App.js``` file, located in the ```/frontend/src``` folder.<br />
Here we will import the ```Greet.js``` component by adding ```import Greet from './components/Greet';``` and ```<Greet />``` to the ```App.js``` file.<br />
Your code should look like this:

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h4><Greet /></h4>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Your **React** frontend should now display the text from your backend API.

![React show API text](https://raw.githubusercontent.com/codebean-university/react-spring-boot/master/images/react-shows-api-text.JPG)

## Congratulations!
Your React frontend is now connected with your Spring Boot backend which enables your application to fetch and write data from/to your server.

### Upcoming tutorials
In the upcoming tutorials we will explore the possibility to run the full application on just one (assigned) port, how to make a fully operational RESTful application including the database connection, security implementation and settings and many more topics.

Give this tutorial a Star: <button type="submit" class="btn btn-sm btn-with-count js-toggler-target" aria-label="Unstar this repository" title="Star codebean-university/react-spring-boot" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:254914787,&quot;originating_url&quot;:&quot;https://github.com/codebean-university/react-spring-boot&quot;,&quot;user_id&quot;:63418838}}" data-hydro-click-hmac="3f6f6a8e6c82d1b7adb2980a47f4bec7ef81111961780575a6a7d1cefd71036a" data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">        <svg height="16" class="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>
        Star
</button>
