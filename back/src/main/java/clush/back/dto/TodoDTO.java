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

    private long seq;           // 기본키
    private String regDt;       // 등록일
    private String chgDt;       // 수정일
    private String contents;    // 내용
    private String status;      // 상태

}
