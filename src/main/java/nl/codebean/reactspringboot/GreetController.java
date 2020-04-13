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
