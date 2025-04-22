package clush.back.controller;
import clush.back.dto.TodoDTO;
import clush.back.service.ITodoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/todo")
@RequiredArgsConstructor
public class TodoController {

    private final ITodoService todoService;

    // ✅ 할 일 리스트 가져오기
    @PostMapping("/list")
    public List<TodoDTO> getTodoList(@RequestBody TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".getTodoList Start!");
        return todoService.getTodoList(pDTO);
    }

    // ✅ 할 일 추가
    @PostMapping("/insert")
    public String insertTodo(@RequestBody TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".insertTodo Start!");
        todoService.insertTodo(pDTO);
        return "success";
    }

    // ✅ 할 일 수정
    @PostMapping("/update")
    public String updateTodo(@RequestBody TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".updateTodo Start!");
        todoService.updateTodo(pDTO);
        return "success";
    }

    // ✅ 할 일 삭제
    @PostMapping("/delete")
    public String deleteTodo(@RequestBody TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".deleteTodo Start!");
        todoService.deleteTodo(pDTO);
        return "success";
    }

}
