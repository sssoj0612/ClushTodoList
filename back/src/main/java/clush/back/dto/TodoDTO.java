package clush.back.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TodoDTO {

    private long    todoSeq;     // 기본키
    private String  regDt;      // 등록일
    private String  chgDt;      // 수정일
    private String  contents;   // 내용
    private Boolean status;     // 상태 (0: 미체크 / 1: 체크)
    private String  search;     // 검색어

}
