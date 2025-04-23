package clush.back;

import clush.back.dto.TodoDTO;
import clush.back.service.impl.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class BackApplicationTests {

	@Autowired
	private TodoService todoService;

	private static long insertedSeq = 0;

	@Test
	@Order(1)
	public void insertTodo_등록테스트() throws Exception {
		// given
		TodoDTO dto = new TodoDTO();
		dto.setContents("등록 테스트!!");
		dto.setStatus(false);

		// when
		todoService.insertTodo(dto);

		// then
		List<TodoDTO> list = todoService.getTodoList(new TodoDTO());
		assertFalse(list.isEmpty(), "등록 후 리스트가 비어 있으면 안됨!!");

		TodoDTO inserted = list.stream()
				.filter(t -> t.getContents().equals("등록 테스트!!"))
				.findFirst()
				.orElseThrow(() -> new RuntimeException("등록된 데이터가 조회되지 않았습니다"));

		insertedSeq = inserted.getTodoSeq();
		log.info("등록 테스트 완료!!");
	}

	@Test
	@Order(2)
	public void getTodoList_조회테스트() throws Exception {
		// when
		List<TodoDTO> list = todoService.getTodoList(new TodoDTO());

		// then
		assertNotNull(list, "조회 결과가 널이면 안됨!!");
		assertTrue(list.stream().anyMatch(t -> t.getTodoSeq() == insertedSeq), "등록된 할 일이 조회되지 않음!!");

		log.info("조회 테스트 완료!!");
	}

	@Test
	@Order(3)
	public void updateTodo_수정테스트() throws Exception {
		// given
		TodoDTO updateDTO = new TodoDTO();
		updateDTO.setTodoSeq(insertedSeq);
		updateDTO.setContents("수정 테스트!!");
		updateDTO.setStatus(true);

		// when
		todoService.updateTodo(updateDTO);

		// then
		List<TodoDTO> list = todoService.getTodoList(new TodoDTO());
		assertTrue(list.stream().anyMatch(t ->
				t.getTodoSeq() == insertedSeq &&
						t.getContents().equals("수정 테스트!!") &&
						t.getStatus()), "수정 테스트 실패!!");

		log.info("수정 테스트 완료!!");
	}

	@Test
	@Order(4)
	public void deleteTodo_삭제테스트() throws Exception {
		// given
		TodoDTO deleteDTO = new TodoDTO();
		deleteDTO.setTodoSeq(insertedSeq);

		// when
		todoService.deleteTodo(deleteDTO);

		// then
		List<TodoDTO> list = todoService.getTodoList(new TodoDTO());
		assertTrue(list.stream().noneMatch(t -> t.getTodoSeq() == insertedSeq), "삭제 테스트 실패!!");

		log.info("삭제 테스트 완료!!");
	}
}
