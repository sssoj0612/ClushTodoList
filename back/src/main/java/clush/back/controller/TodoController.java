package clush.back.controller;

import clush.back.dto.TodoDTO;
import clush.back.service.ITodoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/todo")
@CrossOrigin(origins = "*")
public class TodoController {

    private final ITodoService todoService;

    // 전체 리스트 조회
    @GetMapping("/list")
    public List<TodoDTO> getTodoList(@RequestParam(value = "search", required = false) String search) throws Exception {
        log.info(this.getClass().getName() + ".getTodoList Start!");
        log.info("검색어 : " + search);
        TodoDTO pDTO = new TodoDTO();
        pDTO.setSearch(search); // 검색어 세팅
        return todoService.getTodoList(pDTO);
    }

    // 등록
    @PostMapping("/insert")
    public void insertTodo(@RequestBody TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".insertTodo Start!");
        todoService.insertTodo(pDTO);
    }

    // 수정
    @PutMapping("/update")
    public void updateTodo(@RequestBody TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".updateTodo Start!");
        todoService.updateTodo(pDTO);
    }

    // 삭제
    @DeleteMapping("/delete/{todoSeq}")
    public void deleteTodo(@PathVariable("todoSeq") long todoSeq) throws Exception {
        log.info(this.getClass().getName() + ".deleteTodo Start!");
        TodoDTO pDTO = new TodoDTO();
        pDTO.setTodoSeq(todoSeq);
        todoService.deleteTodo(pDTO);
    }

}
