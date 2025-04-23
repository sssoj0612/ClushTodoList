package clush.back.controller;

import clush.back.dto.TodoDTO;
import clush.back.service.ITodoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/todo")
@CrossOrigin(origins = "*")
@Tag(name = "TodoList API", description = "투두리스트 API")
public class TodoController {

    private final ITodoService todoService;

    // 전체 리스트 조회
    @Operation(summary = "전체 할 일 조회", description = "전체 할 일 목록을 조회합니다.")
    @GetMapping("/list")
    public List<TodoDTO> getTodoList(@RequestParam(value = "search", required = false) String search) throws Exception {
        log.info(this.getClass().getName() + ".getTodoList Start!");
        log.info("검색어 : " + search);

        TodoDTO pDTO = new TodoDTO();
        pDTO.setSearch(search); // 검색어 세팅

        return todoService.getTodoList(pDTO);
    }

    // 해당 날짜 리스트 조회
    @Operation(summary = "선택한 날짜 할 일 조회", description = "선택한 날짜의 할 일 목록을 조회합니다.")
    @GetMapping("/byDate")
    public List<TodoDTO> getTodoListByDate(@RequestParam(value = "search", required = false) String search, @RequestParam String date) throws Exception {
        log.info(this.getClass().getName() + ".getTodoListByDate Start!");

        log.info("검색어 : ", search);
        log.info("선택 날짜 : {}", date);

        TodoDTO pDTO = new TodoDTO();
        pDTO.setSearch(search); // 검색어 세팅
        pDTO.setRegDt(date); // 날짜 세팅

        return todoService.getTodoListByDate(pDTO);
    }

    // 등록
    @Operation(summary = "할 일 등록", description = "할 일을 추가합니다.")
    @PostMapping("/insert")
    public void insertTodo(@RequestBody TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".insertTodo Start!");
        todoService.insertTodo(pDTO);
    }

    // 수정
    @Operation(summary = "할 일 수정", description = "할 일의 상태나 내용을 수정합니다.")
    @PutMapping("/update")
    public void updateTodo(@RequestBody TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".updateTodo Start!");
        todoService.updateTodo(pDTO);
    }

    // 삭제
    @Operation(summary = "할 일 삭제", description = "할 일을 삭제합니다.")
    @DeleteMapping("/delete/{todoSeq}")
    public void deleteTodo(@PathVariable("todoSeq") long todoSeq) throws Exception {
        log.info(this.getClass().getName() + ".deleteTodo Start!");

        TodoDTO pDTO = new TodoDTO();
        pDTO.setTodoSeq(todoSeq);

        todoService.deleteTodo(pDTO);
    }

}
