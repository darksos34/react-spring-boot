# React and Spring Boot First Setup

*Created on: 11-04-2019*<br />
*Last updated on: 11-04-2019*

**Contributors:**<br />
Jeffrey Spaan (Full Stack Developer @ CodeBean)<br />
Jordy Hamwijk (Full Stack Developer @ CodeBean)<br />
<br />
Welcome developer. This is the first tutorial in developing your first Web Application with **React and Spring Boot**.<br />
Moving forward, we will use this repository as starting point for any further repositories which we will post here on GitHub.<br />
<br />
### What is React?
**React** is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.<br />
It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.<br />
The use of UI components eases the development and reduces the development time of your application.<br />
<br />
### What is Spring Boot?
**Spring Boot** is a Java-Based framework used to create a micro service.<br />
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

To create a pre-generated backend, click: <strong>GENERATE</strong><br /><br />


![Spring Boot Dependency Selection](https://raw.githubusercontent.com/codebean-university/react-spring-boot/master/images/spring-boot-dependency-selection.jpg)
<br /><br />
A ZIP file is downloaded on your hard-drive. Open the ZIP file and extract the project folder.<br />
Open the project folder in your favorite IDE.<br />
<br />
### POM.xml
A Project Object Model or POM is the fundamental unit of work in Maven.<br />
It is an XML file that contains information about the project and configuration details used by Maven to build the project.<br />
<br />
*In this example the files are shown with Visual Studio Code.*<br />

![Spring Boot generated project](https://raw.githubusercontent.com/codebean-university/react-spring-boot/master/images/spring-boot-generated-project.JPG)