package clush.back.service;

import clush.back.dto.TodoDTO;

import java.util.List;

public interface ITodoService {

    List<TodoDTO> getTodoList(TodoDTO pDTO) throws Exception; // 전체 투두 리스트

    List<TodoDTO> getTodoListByDate(TodoDTO pDTO) throws Exception; // 해당 날짜 투두 리스트

    void insertTodo(TodoDTO pDTO) throws Exception; // 등록

    void updateTodo(TodoDTO pDTO) throws Exception; // 수정

    void deleteTodo(TodoDTO pDTO) throws Exception; // 삭제

}
