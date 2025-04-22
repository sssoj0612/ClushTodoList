# clushTodoList

1. 프로젝트 설명 : 스프링부트 + 리액트 기반의 투두리스트 웹으로로
사용자는 할 일 추가, 수정, 삭제, 검색이 가능합니다.

✅ 백엔드 : Java11 + Spring Boot(2.7.18)
back/
├── src/
│   ├── main/
│   │   ├── java/clush/back/
│   │   │   │   ├── BackApplication.java          # 메인 클래스
│   │   │   │   ├── controller/
│   │   │   │   │   └── TodoController.java       # 컨트롤러
│   │   │   │   ├── dto/
│   │   │   │   │   └── TodoDTO.java              # DTO 객체
│   │   │   │   ├── persistance/mapper/
│   │   │   │   │   └── ITodoMapper.java          # MyBatis 매퍼 인터페이스
│   │   │   │   └── service/ 
│   │   │   │       ├── impl/
│   │   │   │       │   └── TodoService.java      # 서비스 구현체
│   │   │   │       └── ITodoService.java         # 서비스 인터페이스 
│   │   └── resources/
│   │       ├── application.properties            # 설정 파일
│   │       └── mapper/
│   │           └── ITodoMapper.xml               # MyBatis 쿼리 정의
├── test/
│   └── java/clush/back/
│                  ├── TodoServiceTest.java       # 유닛 테스트 예시
│                  └── TodoControllerTest.java    # 컨트롤러 테스트 예시
└── pom.xml                                       # Maven 설정


✅ 프론트 : React(Node 22.11.0) + Vite
front/
├── src/
│   ├── components/
│   │   ├── Header.jsx                      # 상단 날짜 헤더
│   │   ├── Editor.jsx                      # Todo 입력창
│   │   ├── List.jsx                        # Todo 리스트 전체
│   │   ├── TodoItem.jsx                    # Todo 항목 개별
│   │   └── (각 컴포넌트별 CSS 파일들)
│   ├── App.jsx                             # 메인 앱 컴포넌트
│   ├── App.css                             # 메인 앱 CSS
│   └── main.jsx                            # 진입점
├── package.json                            # 의존성 및 실행 스크립트
└── vite.config.js                          # Vite 설정


✅ DB : MySQL
┌────────────────────────────────────────┐
│               TODOLIST                 │
├────────────────────────────────────────┤
│ PK  TODO_SEQ      INT (AUTO_INCREMENT) │
│     CONTENTS      VARCHAR(1000)        │
│     STATUS        BOOLEAN (default: 0) │
│     REG_DT        DATETIME             │
│     CHG_DT        DATETIME             │
└────────────────────────────────────────┘


2. 소스 빌드 및 실행

🚀 백엔드 : 터미널 -> cd back -> mvn clean install -> java -jar target/back-0.0.1-SNAPSHOT.jar
🚀 프론트 : 터미널 -> cd front -> npm install -> npm run dev -> 인터넷 http://localhost:5173/


3. 주력으로 사용한 라이브러리


4. Api 명세 작성


5. 테스트 케이스


6. 기본 CRUD 업무 외 추가적인 업무 Api




