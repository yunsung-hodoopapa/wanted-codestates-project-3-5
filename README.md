## 🚀 배포 링크

wanted-preonboarding-team3-oddconcepts.netlify.app

## 💿 실행 방법

```cmd
$ git clone https://github.com/pre-onboarding-team3/wanted-codestates-project-3-5.git

$ npm install

$ npm run start
```

## 😎 3팀

- 노학민 : 페이지네이션, 상대경로 지정 (팀장)
- 김경봉 : 2번 과제 구현
- 김남경 : 2번 과제 구현
- 김형욱 : 검색 알고리즘 작성, 검색 기능 구현, 에러처리, 리덕스 관리
- 이산하 : 디테일 뷰(상품 검색 시 노출되는 컴포넌트 작성)
- 도지현 : 검색 알고리즘 작성, 검색 기능 구현, 에러처리, 반응형 CSS 스타일링
- 양윤성 : 스켈레톤 UI, 반응형 사이트 CSS 스타일링, 리덕스 관리

## 🎇사용 기술스택

- Javascript
- React
- Redux
- styled-components
- Axios
- canvas

## 👩‍💻구현 : 1번과제

### 1번 과제 : 검색 기능 구현  & 로딩 중을 스켈레톤 UI로 시각화 & 페이지네이션

- axios를 사용해 JSON 데이터를 불러왔습니다. 데이터가 도착한 후 검색 알고리즘을 적용해 관련 검색어까지 포함된 데이터를 리덕스 스토어에 보관했습니다. 
- 스켈레톤 UI로 로딩 중임을 시각화해서 표현했습니다. 
- 데이터는 15개씩 페이지 별로 보여줄 수 있도록 페이지네이션 기능을 구현했습니다. 

### 검색기능 : 이미지 주소 혹은 상품 코드로 검색했을때, 상품의 상세 정보와 상품과 같은 카테고리를 가진 상품들이 검색됩니다.
<img src=https://images.velog.io/images/yunsungyang-omc/post/0648c26d-e927-4ac9-9989-d4834431ae2b/Mar-08-2022%2020-30-58.gif>

### 상대 경로 
<img src=https://images.velog.io/images/yunsungyang-omc/post/c5f39737-c6ad-4a4e-b3a9-dae778b1ea46/%E1%84%89%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A2%E1%84%80%E1%85%A7%E1%86%BC%E1%84%85%E1%85%A9.gif>

이미지를 클릭했을때, 새로운 윈도우로 관련 이미지를 띄워줍니다. 이때 경로는 이미지의 주소로 지정되어 있습니다.

### 홈버튼 
<img src=https://images.velog.io/images/yunsungyang-omc/post/a47998e5-a454-4f99-9b71-a72b67aa2502/%E1%84%92%E1%85%A9%E1%86%B7%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB%E1%84%8B%E1%85%B3%E1%84%85%E1%85%A9%20%E1%84%8B%E1%85%B5%E1%84%83%E1%85%A9%E1%86%BC.gif>

픽셀로고를 클릭했을때, 검색 사이트로 돌아갈 수 있습니다.

### 반응형 사이트
<img src=https://media.vlpt.us/images/yunsungyang-omc/post/fb805979-037d-4b58-82ae-0fca137cad74/%E1%84%87%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%B3%E1%86%BC.gif>

### 로컬캐싱
<img src=https://images.velog.io/images/yunsungyang-omc/post/2b84ba2f-13bb-48d4-8f6f-2ac8eb6c71a6/Screen%20Shot%202022-03-08%20at%208.04.32%20PM.jpg>
검색된 데이터는 로컬스토리지에 저장되어, 재활용할 수 있습니다.


## 👩‍💻구현 : 2번과제


![box생성](https://user-images.githubusercontent.com/87519250/157166947-506c3cf9-57e9-486e-b406-22795e1fecab.gif)

박스를 드레그 이벤트로 생성할 수 있습니다.

![수정,삭제](https://user-images.githubusercontent.com/87519250/157167050-e3630f55-eb30-429c-a1a3-978e5c87b0dc.gif)

박스 명을 지정할 수 있고, 수정 삭제도 가능합니다. 

