package nl.codebean.reactspringboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

  @RequestMapping("/api/hello")
  public String hello() {
    return "Greetings from CodeBean!";
  }
}
