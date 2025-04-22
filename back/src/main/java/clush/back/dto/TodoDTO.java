package clush.back.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "할 일 데이터 객체")
public class TodoDTO {

    @Schema(description = "기본키", example = "1")
    private long    todoSeq;     // 기본키

    @Schema(description = "등록일")
    private String  regDt;      // 등록일

    @Schema(description = "수정일")
    private String  chgDt;      // 수정일

    @Schema(description = "내용", example = "리액트 공부하기")
    private String  contents;   // 내용

    @Schema(description = "상태", example = "false")
    private Boolean status;     // 상태 (0: 미체크 / 1: 체크)

    @Schema(description = "검색어", example = "공부하기")
    private String  search;     // 검색어

}
