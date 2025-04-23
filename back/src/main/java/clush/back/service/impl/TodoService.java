package clush.back.service.impl;

import clush.back.dto.TodoDTO;
import clush.back.persistance.mapper.ITodoMapper;
import clush.back.service.ITodoService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@Service
public class TodoService implements ITodoService {

    private final ITodoMapper todoMapper;

    @Override
    public List<TodoDTO> getTodoList(TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".getTodoList Start!");
        return todoMapper.getTodoList(pDTO);
    }

    @Override
    public List<TodoDTO> getTodoListByDate(TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".getTodoListByDate Start!");
        return todoMapper.getTodoListByDate(pDTO);
    }

    @Override
    public Map<String, Object> todoStatistics() throws Exception {
        log.info(this.getClass().getName() + ".todoStatistics Start!");
        return todoMapper.todoStatistics();
    }

    @Override
    public void insertTodo(TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".insertTodo Start!");
        todoMapper.insertTodo(pDTO);
    }

    @Override
    public void updateTodo(TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".updateTodo Start!");
        todoMapper.updateTodo(pDTO);
    }

    @Override
    public void deleteTodo(TodoDTO pDTO) throws Exception {
        log.info(this.getClass().getName() + ".deleteTodo Start!");
        todoMapper.deleteTodo(pDTO);
    }
}
