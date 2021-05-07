# NestJS

### nest 스터디
- 설치 방법
```
npm i -g @nestjs/cli
nest new project-name
```

service(or other provider) + controller => module => main.ts

- Module
  - controller와 provider
  - 기능별로 모듈을 분리
- controller
  - url을 받아 함수를 실행
- Service
  - 비즈니스 로직을 작성하는 곳

### 컨트롤러
- 생성 cli 명령어
  - nest g co 컨트롤러명
- 파라미터
  - @Param("이름") "변수명"
- 바디
  - @Body() "변수명"
- 쿼리
  - @Query("쿼리 이름") "변수명"

### 서비스(provider)
- 생성 cli 명령어
  - nest g s 서비스명

### 모듈
- 기능 단위로 분리
- 기본적으로 싱글톤, 모듈간의 공급자의 동일한 인스턴스를 공유 할 수 있다
- 생성 cli 명령어
  - nest g mo 모듈명
- 글로벌 모듈 사용
  - @Global()
  - imports/exports 없이 사용가능

### DTO
- 정보 교환시 타입체크 등의 용도로 사용하는 스키마
- pipe를 사용해 정보를 걸러낼 수 있다


