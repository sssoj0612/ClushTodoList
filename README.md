# clushTodoList

1. 프로젝트 설명 : 스프링부트 + 리액트 기반의 투두리스트 웹으로
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
│                  └── BackApplicationTests.java  # 테스트
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


✅ DB : MySQL (로컬)
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
✅ 백엔드
- MyBatis : 복잡한 SQL 제어가 쉬움, 직관적인 쿼리 관리
- Lombok : 어노테이션 기반 코드 축소 도구 + DTO, 서비스에서 Getter/Setter 자동 생성으로 생산성 향상

✅ 프론트
- Vite : 프론트엔드 빌드 도구
- Axios : HTTP 통신 라이브러리. 백엔드와 REST API 간 통신을 간편하게 처리
- react-datepicker : 달력
- dayjs : 날짜 포맷을 YYYY-MM-DD 형식으로 변환

4. Api 명세 작성
스웨거 : http://localhost:11000/swagger-ui/index.html


5. 테스트 케이스
JUnit 5 기반의 단위/통합 테스트를 통해 핵심 기능의 정확성을 검증합니다.

📌 위치 : src/test/java/clush/back/BackApplicationTests.java

  순서 | 테스트명    | 설명
  1️⃣  | 등록 테스트 | 새로운 Todo가 정상적으로 등록되는지 확인합니다.
  2️⃣  | 조회 테스트 | 등록된 Todo가 목록에서 정상적으로 조회되는지 확인합니다.
  3️⃣  | 수정 테스트 | Todo의 내용 및 상태가 올바르게 수정되는지 검증합니다.
  4️⃣  | 삭제 테스트 | 특정 Todo가 정상적으로 삭제되는지 확인합니다.


6. 기본 CRUD 업무 외 추가적인 업무 Api
/byDate : 선택한 날짜의 할 일만 조회회



# clushTodoList

## 1. 프로젝트 설명
Spring Boot + React 기반의 투두리스트(할 일 관리) 웹 프로젝트입니다.
사용자는 할 일을 등록, 수정, 삭제, 검색 할 수 있습니다.

---

## ✅ 백엔드 (Java 11 + Spring Boot 2.7.18)
```
back/
├── src/
│   ├── main/
│   │   ├── java/clush/back/
│   │   │   ├── BackApplication.java          # 메인 클래스
│   │   │   ├── controller/
│   │   │   │   └── TodoController.java       # 컨트롤러
│   │   │   ├── dto/
│   │   │   │   └── TodoDTO.java              # DTO 객체
│   │   │   ├── persistance/mapper/
│   │   │   │   └── ITodoMapper.java          # MyBatis 매퍼 인터페이스
│   │   │   └── service/
│   │   │       ├── impl/
│   │   │       │   └── TodoService.java      # 서비스 구현체
│   │   │       └── ITodoService.java         # 서비스 인터페이스
│   │   └── resources/
│   │       ├── application.properties        # 설정 파일
│   │       └── mapper/
│   │           └── ITodoMapper.xml           # MyBatis 쿼리
├── test/
│   └── java/clush/back/
│       └── BackApplicationTests.java         # 테스트
└── pom.xml                                   # Maven 설정
```

---

## ✅ 프론트 (React + Vite)
```
front/
├── src/
│   ├── components/
│   │   ├── Header.jsx                  # 상단 날짜 헤더
│   │   ├── Editor.jsx                  # Todo 입력창
│   │   ├── List.jsx                    # Todo 목록 전체
│   │   ├── TodoItem.jsx                # Todo 개별 항목
│   │   └── (CSS 파일 각 컨트롤 단위)
│   ├── App.jsx                         # 메인
│   ├── App.css                         # 메인 CSS
│   └── main.jsx                        # 시작 점
├── package.json                        # 의존성 & 스크립트
└── vite.config.js                      # Vite 설정
```

---

## ✅ 데이터베이스 (MySQL 로컬컬)
```
┌────────────────────────────────────────┐
│               TODOLIST                 │
├────────────────────────────────────────┤
│ PK  TODO_SEQ      INT (AUTO_INCREMENT) │
│     CONTENTS      VARCHAR(1000)        │
│     STATUS        BOOLEAN (default: 0) │
│     REG_DT        DATETIME             │
│     CHG_DT        DATETIME             │
└────────────────────────────────────────┘
```

---

## 2. 소스 빌드 & 시작

### 🚀 백엔드
```bash
cd back
mvn clean install
java -jar target/back-0.0.1-SNAPSHOT.jar
```

### 🚀 프론트
```bash
cd front
npm install
npm run dev
# http://localhost:5173/ 에서 열 수 있습니다.
```

---

## 3. 주력으로 사용한 라이브러리

### ✔️ 백엔드
- **MyBatis** : 복잡한 SQL 제어가 쉬움, 직관적인 쿼리 관리
- **Lombok** : 어노테이션 기반 코드 축소 도구 + DTO, 서비스에서 Getter/Setter 자동 생성으로 생산성 향상

### ✔️ 프론트
- **Vite** : 고속 시작 & 바로로 변경 확인 가능
- **Axios** : REST API 과의 HTTP 통신을 간편하게 처리
- **react-datepicker** : 날짜 선택을 위한 다일 포팅 UI 패턴
- **dayjs** : 날짜 형식(같은 YYYY-MM-DD) 변환을 위한 라이브러리

---

## 4. API 명세

- Swagger 연동 클릭 : [http://localhost:11000/swagger-ui/index.html](http://localhost:11000/swagger-ui/index.html)

---

## 5. 테스트케이스스

### ✅ JUnit 5 기반의 자바 프로젝트 테스트 목록

#### 파일 위치
```
src/test/java/clush/back/BackApplicationTests.java
```

#### 테스트 역할

| 순서 | 테스트명    | 설명 |
|--------|------------------|--------------------------------------------|
| 1️⃣     | 등록 테스트   | Todo가 정상적으로 등록되는지 확인 |
| 2️⃣     | 조회 테스트   | 등록된 Todo가 목록에 나오는지 확인 |
| 3️⃣     | 수정 테스트   | Todo의 내용과 상태가 올바르게 변경되는지 검증 |
| 4️⃣     | 삭제 테스트   | Todo가 정상적으로 삭제되는지 확인 |

---

## 6. 기본 CRUD 외 추가 API
- `/byDate`: 선택한 날짜에 해당하는 Todo만 조회

---

