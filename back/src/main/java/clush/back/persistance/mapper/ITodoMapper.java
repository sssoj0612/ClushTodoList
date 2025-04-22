package clush.back.persistance.mapper;

import clush.back.dto.TodoDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ITodoMapper {

    List<TodoDTO> getTodoList() throws Exception; // 해당 날짜의 투두 리스트

    void insertTodo(TodoDTO pDTO) throws Exception; // 등록

    void updateTodo(TodoDTO pDTO) throws Exception; // 수정

    void deleteTodo(TodoDTO pDTO) throws Exception; // 삭제

}
