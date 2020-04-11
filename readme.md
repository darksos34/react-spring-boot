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
Your POM.xml should contain following data (depending on your choosen Spring Boot Group, Artifact and other assigned values)
```
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