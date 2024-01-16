# CH1
## 웹 문서 스크립트 소스 작성
### 인라인 스크립트
 HTML 태그안에 직접 작성하는 자바스크립트

### 내부 스크립트
- <script>태그 사용. 웹 문서 모든 위치에 위치할 수 있음. 
- <script> 소스는 웹 요소를 모두 로딩한 후에 삽입되어야 함. 
- 대부분의 경우 </body> 태그 직전에 자바스크립트 소스를 삽입. 

### 인라인 스크립트와 내부 스크립트 소스의 단점
 HTML 태그와 자바스크립트 소스가 함께 뒤섞여 있어서 웹 문서의 소스가 복잡해짐. 반복도 생김. 

### 외부 스크립트 파일 링크하기
 웹 문서에 직접 자바스크립트 소스가 드러나지 않아 웹 문서 소스를 훨씬 깔끔히 유지. 외부 스크립트 파일도 </body> 태그 앞에 추가해 웹 문서 요소를 모두 가져온 후 실행.
- 기본형
  - <script src="스크립트 파일 경로"></script>
- 최근 defer 속성 추가
  - 문서를 다 가져운 후 스크립트 소스를 실행하도록 지정. 
  - 외부 스크립트 파일을 링크하는 경우에만 사용 가능.
  - ``<sciprt defer src="스크립트 파일 경로"></script>``

### 웹 브라우저에서 스크립트를 해석하는 과정
1. `<!DOCTYPE html>` 소스를 보고 웹 브라우저는 현재 문서가 웹 문서라는 것을 알게 됨.
2. `<html></html>` 사이의 내용을 HTML 표준에 맞춰 읽기 시작.
3. `<head></head>` 태그 사이에 어떤 태그가 있는지, `<body></body>` 사이에 어떤 태그가 있는지, 그리고 태그 간 관계는 어떤지 등을 분석
4. 태그 분석이 끝나면 외부 스타일 시트나 문서 안의 스타일 정보를 분석해 화면에 표시
5. `<script>` 태그를 만나면 자바스크립트 해석기로 스크립트 소스를 넘김
6. 스크립트 파일 실행

# CH2 변수와 자료형
## 입출력 방법
### alert()
 알림창 표시. 확인 버튼. 주로 어떤 메세지를 사용자에게 알릴 때 사용.

### confirm()
 내용 + 확인 + 취소 버튼. <-- 확인창 이라고 함. 확인=true, 취소=false. 의사를 물어볼 때 사용

### prompt()
 간단한 값 입력. 기본값 입력 가능. prompt(내용, 기본값). 취소버튼 누르면 null 반환

## 변수
### 변수 선언하고 값 할당
- 변수와 상수가 있다. 
- 변수는 let, 상수는 const 예약어 사용

## 자료형
- 자바스크립트 자료형은 크게 '원시형'과 '객체'로 나뉜다. 
  - typeof()
    - 변수가 어떤 자료형인지 알려줌
- 숫자형
  - 자바스크립트는 정수와 실수를 함께 묶어 '숫자형'이라고 함. 
- *자바스크립트에서는 정밀한 실수 계산에 적합하지 않음*
  - 실수를 계산할 때 의도하지 않은 값이 나올 때가 있다. 
- 문자형
  - 템플릿 문자열
    - console.log(`${name}님, ${classroom}호 강의실로 입장해요.`)
- 논리형
  - truthy, falsy
    - true로 인정할 수 있는 값과, false로 인정할 수 있는 값. falsy로 인정하는 값들
    - 0, "", NaN, undefined, null
- undefined, null
  - undefined는 값이 할당되지 않았을 때 변수의 초깃값. 
  - null은 값이 없거나 유효하지 않은 값. 사용자가 직접 할당 가능. let age = null;
  - undefined는 변수를 만들기만 하고 값을 할당하지 않았을 때, 자바스크립트가 자동으로 부여하는 초깃값.
  - null은 변수에 값이 없거나 유효하지 않다는 의미로, 자바스크립트에서 반환하거나 사용자가 할당할 수 있는 값.
  - 자바스크립트에서는 값이 있는지 없는지 여부를 null로 판단

- 객체
  - 객체 정의하기
    - 객체는 중괄호 '{}' 안에 모든 정보를 담는데, 키와 값이 들어감. 
  - 객체에 접근하기
    - 객체명.키
    - 객체명["키"]
- 심벌(symbol)
  - 유일성 보장. 객체 프로퍼티의 키로 사용할 수 있다는 특징. 
  - 오픈소스나 다른 팀원이 만든 객체들을 함께 사용할 경우 객체의 키 이름이 중복될 수 있다. 
  - 이런 경우 키 이름을 심벌로 지정하면 서로 충돌하지 않는다. 
  - 심벌 만들기
    - 한번 만들면 변경할 수도 없고, 같은 값을 가진 심벌을 만들 수도 없다. 
    - let var1 = Symbol()
    - let var2 = Symbol()
    - var1 === var2 (false)
    - 객체에 키로 사용할 때는 대괄호로 묶어 표현. 접근도 마침표가 아닌 대괄호 사용
    ```
    let id = Symbol()
    const member = {
        name : "Oh",
        [id] : 111
    }
    member[id]  // 111
    ```
  - 심벌에 설명 추가
    - 하나의 객체에 여러 개의 심벌을 사용했을 때, 심벌을 쉽게 구별할 수 있도록 함. 
    - Symbol(설명)
    - let grade = Symbol("grade")

## 자바스크립트의 장점이자 단점, 자료형 변환
- 자바스크립트는 프로그램 실행 중에 자료형이 변환됨. 
- 자동으로 형이 바뀌는 경우를 미리 알아두지 않으면 오류가 발생하기도 함. 

### 자바스크립트 자료형 특징
- 강력한 자료형 체크와 느슨한 자료형 체크
  - C언어 처럼 자료형을 제한하는 방식이 '강력한 자료형 체크'
  - 자바스크립트는 미리 변수의 자료형을 지정하지 않음. 
    - 변수에 값을 할당하면 그 값에 따라 자료형이 결정. 이를 '느슨한 자료형 체크'
    - 같은 변수에 다른 유형의 값을 잘못 입력해도 체크할 수 없고, 여러 사람이 프로젝트를 진행할 경우 변수를 일관성 있게 유지하기 어려움. 

### 직접 숫자형으로 변환
- Number()
  - 숫자, null, undefined를 포함해 모든 자료형을 숫자로 변환
- parseInt(), parseFloat()
  - 프로그램에서 숫자를 사용하기 위해 프롬프트 창에서 입력받았다면 입력값을 숫자로 바꾼 후 사용하는 것이 좋다. 

### 문자열로 변환
- toString()
  - null, undefined를 제외한 나머지 자료형을 문자열 데이터로 변환.
- String()
  - null, undefined를 포함한 모든 자료형을 문자열로 변환.
*간단하게 숫자나 문자열로 변환하기*
- 값의 앞에 + 기호를 붙이면 자동으로 문자열이 숫자로 변환
- 숫자에 빈 문자열을 연결하면 숫자가 문자열로 변함.

# CH3 연산자와 제어문
## 연산자
### 비연산자
- ==와 ===, !=와 !==의 차이
  - ==와 !=는 비교하는 피연산자의 자료형을 자동으로 변환해 비교. ex) 3 == "3" // true
  - ===와 !==는 값뿐만 아니라 데이터 유형까지 비교 ex) 3 === "3" // false
  - 프로그램에서 값을 비교할 때는 ===, !== 연산자를 사용하는 것이 좋다.

## 조건문
### 2개 이상의 조건 체크
- 단축 평가값 활용
  - 조건식은 왼쪽에서 오른쪽에서 진행됨
  - 두 가지 이상의 조건을 함께 체크하는 조건식을 만들 때는 첫 번째 조건을 보고 빠르게 판단할 수 있도록 작성하자
  - && 연산자를 사용해 조건을 체크할 경우 false가 될 확률이 높은 조건을 첫 번째 조건식으로 사용하면 좋음
  - || 연산자는 true가 될 확률이 높은 조건식을 첫 번째 조건으로 사용하는 게 좋음

## 반복문
### forEach
- 배열명.forEach(콜백함수) {...}
  - 여기서 콜백함수란, 다른 함수의 인수로 사용할 수 있는 함수

### for...in
- 배열에서만 반복되는 반복문이 forEach라면 for...in은 반복해 객체의 값을 가져와 처리할 수 있게 함.
- for (변수 in 객체) {...}
- key만 가져올 수 있으므로 해당 키에 값에 접근하려면 []를 사용

### for...of
- 문자열이나 배열과 같은 반복 가능 자료에서 사용. 

# 함수와 스코프
## 함수
### 선언과 호출
- 선언할 때는 function 예약어 사용.
- function 함수명() {...}

### 매개변수와 인수, return문
- 매개변수
  - 함수를 선언할 때 외부에서 받는 변수
- 인수
  - 함수 호출 시 실제로 넣는 값
- 기본 매개변수
  - function m(a, b, c) {} 라고 정의 했다하자
  - m(1)로 실행하면 // a:1, b:undefined, c:undefined
  - 에크마스크립트 2015부터 매개변수 기본값 가능
  - function m(a, b=5, c=10) {}

## 변수의 유효범위, 스코프
### 스코프
- 스코프
  - 스코프는 선언한 변수가 어느 범위까지 영향을 미치는지 나타냄
  - 전역 스코프
    - 예약어 없이 선언하면 전역으로 빠짐

- 자바스크립트 변수, 이렇게 사용하자
  - var 변수보단 let, const 사용
    - var는 다시 선언할 수 있어 실수로 같은 변수를 다시 선언해도 오류발생하지 않음. 
    - 심지어 먼저 실행한 후 나중에 선언해도 오류 없음
  - 전역 변수는 최소로
  - 객체 선언은 const 사용
    - 프로그램 도중 객체가 바뀌지 않도록
    - const로 선언해도 객체 안에 프로퍼티는 수정 할 수 있음

## 이름 없이 사용하는 함수
### 익명함수
- 변수에 할당해 사용하는 익명 함수
  - 이름이 없는 함수는 변수에 할당해 사용할 수 있다. 
  - 자바스크립트는 함수를 마치 하나의 값처럼 사용할 수 있다. 함수를 다른 함수의 매개변수로 넘길 수도 있음. (1급시민)
- 즉시 실행 함수
  - 한 번만 실행하는 함수 정의
- 화살표 함수
  - (매개변수) => {...}
### 콜백 함수
- 다른 함수의 인수로 사용하는 함수. 
- 함수 이름 사용해 콜백 함수 실행
  - btn.addEventListener("click", display);
- 함수에 직접 작성해 콜백 함수 실행
  - 딱 한번만 실행한다면 따로 선언한하고 직접
  - btn.addEventListener("click", () => {...});

### 자바스크립트 함수는 1급 시민
- 1급 시민이란?
  - 변수에 할당 할 수 있어야 함
  - 다른 함수의 인자로 사용할 수 있어야 함
  - 다른 함수에서 반환값으로 반환할 수 있어야 함

## 전개 구문
- 배열처럼 값이 다양한 자료를 한꺼번에 인수로 넘겨주거나 배열을 하나의 덩어리로 처리해야 할 때 유용

### 전개 구문 작성방법
- 전개 구문은 말 그대로 '값을 펼쳐 주는'구문.
- '...'기호를 사용
  - console.log(...fruits);
- 문자열이나 배열, 객체처럼 여거 개의 값을 담고 있는 자료형에서 다른 정보는 필요없고 그 안에 값만 꺼내 사용할 때 유용

### 나머지 매개변수
  - 함수 선언시 몇 개의 인수를 받게될지 모를 때

## 시간 고려 타이머 함수
- 자바스크립트에는 특정 시간이 되었을 때 함수를 실행하거나 특정 시간 동안 함수를 반복하기 위해서 시간을 재는 함수가 있음.
- 타이머 함수는 실행할 함수와 시간을 지정하는 함수
- 일정 시간마다 반복 - setInterval(콜백함수, 시간)
- 반복 실행 멈추기 - clearInterval(타이머)
  - setInterval()은 한 번 실행하면 웹 브라우저 종료하기 전까지 계속 실행됨.
  - 이를 멈추고자 씀.
  - setInterval()를 실행하면 타이머가 시작되는데, 타이머에 이름을 지정해주면 그 이름을 사용해 타이머를 멈출 수 있음
    - let timer = setInterval(() => {}, 2000);  clearInterval(timer);
- 특정 시간 이후에 실행 - setTimeout(콜백함수, 시간)
  - 지정한 시간 후에 콜백 함수 실행

# DOM의 기초
## DOM과 DOM 트리
### DOM이란
- 웹에서 자바스크립트를 사용하는 가장 큰 이유는, 어떤 조건에 맞거나 사용자 동작이 있을 때 웹 문서 전체 또는 일부분이 동적으로 반응하기 때문
- 이렇게 하려면 웹 문서에 담겨 있는 모든 요소를 따로 제어할 수 있어야 함
- DOM이란, 자바스크립트 같은 프로그래밍 언어로 웹 문서에 접근하고 제어할 수 있도록 웹 문서를 체계적으로 정리하는 방법을 말함
- DOM에서는 웹 문서를 하나의 객체로 정의

### DOM 트리
- 웹 문서는 여러가지 태그가 서로 포함 관계를 가지고 있음
- 태그의 포함 관계 떄문에 각 태그 간에는 '부모'와 '자식'관계가 생김
- DOM에서 웹 문서를 구조화하려면 먼저 웹 문서 구조를 부모 요소와 자식 요소로 구분해 포함 관계를 나타내야함
- DOM트리에서 이런 구조로 웹 문서를 해석한다는 것을 기억해야 자바스크립트를 사용해 어떻게 접근하고, 원하는 부분을 어떤 방식으로 수정할지 이해할 수 있음

## 웹 요소에 접근하기
### querySelector()
- 선택자를 사용해 웹 요소에 접근할 때 querySelector()나 querySelectorAll()를 사용. 
- 이 함수는 document 객체에 포함됨
- querySelector()를 사용하면 지정한 선택자를 사용한 요소 중 첫 번째 요소에 접근할 수 있음
- docuemnt.querySelector(선택자)
- CSS 선택자 종류
  - 타입 선택자: 특정 태그를 사용한 모든 요소. id나 class가 없는경우 ex) p {...}
  - class 선택자: 클래스명을 사용하는 ex) .accent {...}
  - id 선택자: id명 사용하는 ex) #container {...}
  - 하위 선택자: A 요소의 하위에 있는 모든 B요소 ex) from input {...}
  - 자식 선택자: A 요소의 하위에 있는 요소 중 자식 레벨의 B ex) ul > li {...}
- 웹문서 여러 이미지 중 특정 이미지를 가져온다면
  - document.querySelector('#profile img')

### querySelectorAll()
- id 선택자를 제외한 다른 선택자들은 문서에서 여러 번 사용할 수 있음
- 가져온 것을 인덱스를 사용해 접근 가능
  - document.querySelectorAll(".user")[2]

### 웹 요서 내용 가져오고 수정하기
- 웹 요소에 접근 후 내용을 가져오거나 수정할 수 있음
- 이때 자바스크립트 객체의 innterText,innerHtml, textContent 프로퍼티를 사용
- 웹 요소 내용 가져오기
  - innerText는 웹 브라우저 창에 보이는 내용만 가져옴
    - display:none을 사용해 화면에 감춘 요소의 내용은 가져오지 않음
    - 소스에 공백이 3개 있어도, 브라우저에는 1개만 처리되있다면 브라우저 창 보이는 대로 1칸만 가져옴
    - document.querySelector("#desc").innerText
  - innerHTML은 요소 안에 있는 태그와 내용을 함께 가져와 보여줌
    - 웹 브라우저 창에 보이는지와는 상관없이 소스에 있는 대로 가져옴
    - document.querySelector("#desc").innerHTML
  - textContent는 요소의 내용을 가져오되, 웹 브라우저 창에 보이는 대로가 아니라 소스에 있는 대로 가져옴
    - 감춰진 요소까지 가져와 프로그래밍에 사용할 경우 textContnet 속성이 편리
    - document.querySelector("#desc").textContent
- 웹 요소의 내용 수정하기
  - innerText, innerHTML, textContent 프로퍼티는 웹 요소 내용을 바꿀 떄도 사용
    - 웹요소.innerText = 내용
  - 요소에도 접근해 바꿀 수 있음
    - 이미지 요소.src = 이미지 파일

## 자바스크립트로 스타일 수정
### CSS 속성에 접근하고 수정
- CSS 속성에 접근하려면 요소에 접근 후 예약어 .style과 css 속성을 사용
  - 요소.style.속성명
- classList 프로퍼티
  - 요소에 적용한 클래스 스타일을 모두 모아 놓은 프로퍼티
  - document.querySelector('#desc p').classList
- 클래스 스타일 추가하고 삭제하기
  - classList에 클래스 스타일을 추가하거나 삭제하면서 여러 가지 효과를 지정할 수 있음
    - 요소.classList.add(클래스명)
    - 요소.classList.remove(클래스명)
  - 클래스 스타일을 추가하는 add()
- 특정 클래스 스타일이 있는 요소를 찾아주는 contains()
  - 요소.classList.contains(클래스명)
- 클래스 스타일 토글
  - 클릭할 때마다 특정 클래스를 추가하거나 삭제하기를 반복할 경우 clasList의 toggle()를 사용하는게 편리
  - title.classList.toggle("clicked");

## DOM에서 폼 다루기
### 폼 요소에 접근하고 값 가져오기
- id나 class 속성값을 사용해 폼 요소 접근
- 텍스트 필드에 입력한 값 가져오기
  - 요소.value로 가져옴
    - document.querySelector('#order-name').value
- name 속성값을 사용해 폼 요소에 접근하기
  - 폼요소에 id나 class 속성이 없고 name 속성만 있으면 name 식별자로 접근 가능
  - 요즘은 대부분 폼 요소에 id, class를 사용하지만, css가 등장하기 전에는 name을 사용
- 폼 배열을 사용해 폼 요소에 접근하기
  - id, class, name 속성도 없는 경우 폼 배열사용
  - docuement의 속성 중 forms 속성은 문서에 있는 `<form>` 태그를 가져와 배열과 비슷한 형태로 저장

### 선택 목록과 항목에 접근하기
- `<select>` 태그를 사용한 목록을 '선택 목록'이라 한다
- 선택 목록에 접근
  - querySelector()로 선택 목록에 접근
  - 선택 목록에 여러 개의 옵션 항목이 있는데, 이에 접근하려면 options 프로퍼티 사용
    - docuemnt.querySelector("#major").options
    - selectedIndex에는 선택한 옵션의 인덱스가 들어감 
- 알람 창에 선택한 항목 표시하기
  - 선택 메뉴에서 몇 번째 항목을 선택했는지는 selectedIndex 값을 살펴 보면 안다
  - 선택한 항목의 내용을 가져올 땐 innerText 프로퍼티 사용
  - 선택 목록에 함수를 연결할 때는 onClick이 아닌 onChange 사용

### 라디오 버튼과 체크 박스에 접근하기
- 라이오 버튼이나 체크박스는 각 항목들의 name값이 모두 같음
- 하나의 그룹 안에서 항목을 선택하므로 그룹별 같은 name을 붙임
- checked 속성을 사용해 선택한 항목에 접근하기
  - 라이오 버튼이나 체크 박스에는 checked 속성이 있음
  - 만약 어떤 것을 선택하면 해당하는 `<input>` 태그에 checked 속성이 추가됨
  - document.querySelector("input[name='subject']:checked")
  
# 이벤트와 이벤트 처리기
## 이벤트 알아보기
### 이벤트란
- 웹 문서 영역에서 이뤄지는 동작만을 말함
- 웹 문서 영역을 벗어나 클릭하는 행위는 이벤트가 아님

### 문서 로딩 이벤트
- 문서로딩 이벤트는 문서를 웹 브라우저 창에 보여 주는 것과 관련된 이벤트
- 종류
  - abort: 완전 로딩 전 불러오기 멈출 때
  - error: 문서가 정확히 로딩되지 않았을 때
  - load: 문서 로딩이 끝났을 때
  - resize: 
  - scroll
  - unload: 문서를 벗어날 때
- ex) 문서를 불러오자 마자 알림창 하려면
  - window.onload = alert('안녕');

### 마우스 이벤트
- 종류
  - click
  - dbclick
  - mousedown
  - mousemove
  - mouseover
  - mouseout: 마우스 포인터가 요소를 벗어날 때
  - mouseup
- 버튼 틀릭시 이벤트 
  - btn.onclick = function() {...}

### 키보드 이벤트
- 종류
  - keydown
  - keypress
  - keyup
- 키보드 눌렀을 때
  - body.addEventListener('keydown', event)

### 폼 이벤트
- 폼이란 데이터를 입력하는 모든 요소를 가리킴
- 종류
  - blur: 폼 요소에 포커스 아웃
  - change
  - focus
  - reset: 폼이 리셋되었을 때
  - submit: submit 버튼 클릭 시

## 이벤트 처리하기
### HTML 태그에 함수 연결
- 이벤트 처리의 가장 간단한 방법은 이벤트가 발생한 HTML 태그에 직접 함수를 연결하는 것
- 우선 속성을 추가하는데, 속성 이름은 'on이벤트명'으로 표현하고 그 뒤 함수를 연결
- ex) 버튼 클릭 시 알림창
  - <button onclick="alert('클릭')>Click</button>
- HTML 소스와 자바스크립트 소스가 같이 있어 스크립트 수정 시 빡실수도

### 웹 요소에 함수 연결
- 스크립트 소스를 변경해도 HTML 마크업에는 영향을 주지 않게 하려면 이벤트 처리기도 스크립트 소스에서 처리하는게 조흠
- 요소.on이벤트명 = 함수
- 웹 여소에서 'on이벤트명' 프로퍼티를 하나만 사용할 수 있다
  - 만약 이 프로퍼티를 <button> 태그와 스크립트 소스 두 곳에서 사용한다면 가장 마지막에 사용한 onclick 프로퍼티만 적용됨
  - 따라서 하나의 이벤트에 여러 함수를 연결하려면 addEventListener()를 사용

### 이벤트 리스너로 이벤트 처리하기
- 이벤트 리스너는 모든 DOM요소와 모든 함수에서도 실행할 수 있다. 
- 요소.addEventListener(이벤트, 함수, 캡처 여부);
  - 요소: 이벤트가 발생한 요소
  - 이벤트: 이벤트 유형. on을 붙이지 않고 이벤트 이름 그대로 사용
  - 함수: 이벤트가 발생했을 때 실행할 함수
  - 캡처 여부: 이벤트를 캡처링하는지의 여부. 기본은 false

## event 객체
- DOM에는 웹 문서에 발생하는 이벤트 정보를 저장하는 event 객체가 있음
- event 객체의 프로퍼티와 메서드
  - event 객체에는 이벤트 이름, 발생위치, 발생 시간 등 이벤트와 관련된 다양한 정보가 포함
- event의 target 프로퍼티가 이벤트가 발생한 대상을 가리킴

## 마우스 이벤트에서 클릭 위치 알아내기
- event를 사용해 이벤트가 발생한 위치를 알 수 있음
- pageX, pageY

## 키보드 이벤트에서 키값 알아내기
- event.code, event.key를 가장 많이 사용

## 웹 문서에 마우스 오른쪽 버튼 비활성화시키기
- 오른쪽 버튼을 클릭하면 바로가기 메뉴가 표시되는데, 이것을 컨텍스트 메뉴라 함
- 마우스 오른쪽 버튼을 누르면 contextmenu 이벤트 발생
```
window.addEventListener('contextmenu', e => {
  e.preventDefault();
});
```

## 이벤트 전파
### 이벤트 버블링
- 특정 요소에서 이벤트가 발생했을 때 그 이벤트가 해당 요소뿐만 아니라 그 요소의 부모 요소, 부모 요소의 부모 요소에도 똑같이 발생한 것으로 간주 하는 것

### event.target과 event.currentTarget
- 이벤트가 발생하면 해당 이벤트와 관련된 정보는 event 객체에 담김
- event 객체의 프로퍼티 중 이벤트 전파와 관련이 있는 프로퍼티는 target, currentTarget
- event.target은 처음 이벤트가 발생한 대상
- event.currentTarget은 이벤트가 전파되면서 현재 이벤트가 처리기가 실행되는 대상

### 이벤트 캡처링
- 웹 요소에서 이벤트가 발생하면 일단 최상위 요소에서 시작해 이벤트가 발생한 요소까지 차례대로 이벤트가 전파되는 방식

# DOM 활용하기
## 웹 문서에 새로운 노드 추가하기
### 내용이 있는 텍스트 노드 추가하기
- 요소 노드 만들기 - createElement(요소명)
  - DOM에 새로운 요소를 추가할 때 가장 먼저 요소 노드를 만들어야 함
  - 즉, 어떤 태그를 사용할지 태그를 만들어 주는것
- 텍스트 노드 만들기 - createTextNode(텍스트)
- 자식 노드 연결하기 - appendChild(자식노드)
  - 텍스트 노드를 요소 노드의 자식 노드로 추가할 때 사용
  - 기존 자식 노드가 있을 경우 자식 노드 중 맨 끝에 추가됨
- ex) 장바구니 추가
```
orderButton.addEventListener("click", () => {
    let newP = document.createElement("p");
    let textNode = document.createTextNode(title.innerText);
    newP.appendChild(textNode);
    orderInfo.appendChild(newP);
}, { once : true });
```
  - { once : true } 이렇게 하면 이벤트 1번만 발생됨 여러번 클릭해도

### 속성값이 있는 노드 추가하기
- <img>태그의 src 속성을 넣을 때
- 요소 노드 만들기 - createElement()
- 속성 노드 만들기 - createAttribute(속성명)
  - createAttribute()로 속성 노드를 만듬
  - 속성 노드를 만든 후 속성값을 value 프로퍼티를 사용해 지정
- 속성 노드 연결 - setAttributeNode(속성노드)
- 자식 노드 연결 - appendChild()

### 기존 노드의 앞에 새 요소 추가 - insertBefore(새 노드, 기준 노드)

## 노드 삭제하기
### remove()
- 요소.remove()

### removeChild()
- 이 메서드를 사용하려면 먼저 부모 노드를 찾아야 하고 그 후 자식 노드를 삭제'
- 부모 노드를 찾는 parentNode 프로퍼티
  - 노드.parentNode
- 자식 노드를 제거하는 removeChild()
  - 부모노드.removeChild(자식노드)
- this 사용시 주의할 점
  - function() {..}에 this를 사용하면 this는 이벤트가 발생한 노드를 가리킴
  - 하지만 위 함수를 화살표 함수로 작성하면 this는 window 객체를 가리킴
  - this를 사용하려면 화살표 함수가 아닌 익명 함수로 지정

# 자주 사용하는 내장 객체 알아보기
## 웹 브라우저의 최상위 객체, window
### 내장 객체란
- 웹 브라우저 창에서 웹 문서를 열면 가장 먼저 window라는 객체가 만들어지고, 하위에 웹 브라우저 창의 각 요소에 해당하는 객체들이 만들어짐

### 웹 브라우저 창을 관리하는 window 객체
- window 객체에는 웹 브라우저 창과 관련된 여러 가지 프로퍼티와 메서드가 있음
- window 객체의 프로퍼티
  - 웹브라우저 창과 관련된 정보를 가지고 있음
- window 객체의 메서드
  - window.alert()라고 써야하는데, window가 기본 객체여서 window 생략할 수 있음

### 팝업 창 만들기
- 팝업 창 열기 - open(경로, 창 이름, 창 옵션)
- 팝업 창 위치 지정
  - open()에서 옵션에 left, top 속성 사용
  - window.open("notice.html", "이벤트팝업", "width=500 height=500 left=300 top=200");
- 팝업 창 닫기 - close()
  - 팝업 창의 모든 내용을 살펴본 후 닫을 수 있도록 내용의 아래쪽에 [닫기] 버튼이나 링크를 넣는것이 좋음
  - 버튼에 간단히 넣을 수도 있음. `<button onclick="window.clolse()>닫기</button>`

### screen 객체
- 사용자 화면의 크기나 정보가 필요한 경우 사용
- 브라우저 창 크기가 아니고 PC 모니터나 모바일 기기 화면 자체

### history 객체
- 돌아 다녔던 사이트 주소가 array 배열에 저장됨
- 방문했던 URL을 앞뒤로 이동하는 메서드를 사용할 수 있음

### location 객체
- 웹 브라우저 창의 주소 표시줄과 관련

### 웹 사이트에서 뒤로 이동 금지하기
- navigator 객체의 replace() 이용
- location.replace('...')

# 자바스크립트 객체 만들기
## 생성자 함수와 클래스
### 클래스를 사용해 객체 만들기
- 정확한 클래스 개념이 아니라 생성자 함수를 좀 더 표현하기 쉽게 바꾼 신택틱 슈거
- 외부는 클래스지만, 내부에서는 생성자 함수로 동작

## 객체의 키와 값에 접근하기
### for...in 사용
- 객체 프로퍼티에 맞는 반복문은 for(변수 in 객체)
- 객체의 key만 가져올 수 있음
```
for(key in bag) {
 console.log(`${key} : ${bag[key]`})
}
```

### Object 객체 메서드 사용 - keys(), values(), entries()
- '심벌'이라는 특수한 데이터 유형이 있는데, 프로퍼티키에 심벌을 사용하면 해당 프로퍼티와 값은 건너뜀
- Object.keys(객체명)
- Object.values(객체명)
- Object.entries(객체명)  // [키, 값] 쌍을 배열로

## 프로토타입과 클래스에서의 상속
- 자바스크립트는 상속을 구현하기 위해 프로토타입을 사용
### 프로토타입
- 객체를 만들어 내는 원형이라 볼 수 있고 상위 객체 또는 부모 객체라고도 할 수 있음
- 모든 객체는 프로토타입을 가지고 있고 프로토타입으로부터 프로퍼티와 메서드를 상속받음
- 객체를 까보면 [[Prototype]] 속성이 있는데, 이 객체가 어디서부터 온 것인지 알 수 있음
- 생성자 함수와 프로토타입 객체
  - 생성자 함수를 선언하는 순간 자동으로 프로토타입 객체가 만들어짐
- 인스턴스 객체와 프로토타입
  - 프로토타입인 객체에 있는 프로퍼티나 메서드를 가져와 사용하는 것을 '프로토타입 상속'이라 함
- `__proto__` 프로퍼티와 prototype 프로퍼티
  - 객체의 프로토타입을 확인 할 때는 `__proto__`프로퍼티 사용
    - 이는 모든 객체가 가지고 있는 프로퍼티
    - 자신에게 연결된 부모 프로토타입 객체를 확인할 때 사용
  - 생성자 함수 프로토타입을 확인할 때는 prototype 프로퍼티 사용
    - 어떤 생성자를 사용했는지, 어떤 프로퍼티와 메서드를 가지는 지 등의 정보를 확인할 때 사용
  - 최근 자바스트립트 명세에서는 `__proto__` 프로퍼티를 사용하지 않을것을 권유
- 프로토타입 메서드
  - 메서드를 정의할 때, 함수 안에서 정의하는 것과 메서드를 함수 밖에서 prototype을 사용해 정의 할 수 있음
  - 생성자 함수 안에서 메서드를 정의하려면 처음 객체를 만들 때부터 필요한 함수를 모두 알고 있어야 함
  - 프로토타입을 사용해 메서드를 정의하면 생성자 함수를 정의할 때 미처 생각하지 못했던 메서드도 필요할 때마다 추가 가능
  - 그러므로 일반적으로는 객체의 메서드는 프로토타입을 사용해 정의
- 프로토타입을 상속하는 새로운 객체 만들기
  - 기존 생성자 함수에 있던 프로터티와 메서드를 다른 생성자 함수에서 가져와 사용할 때는 call() 사용
    - 기존객체명.call(this, 프로퍼티 또는 메서드)
    - this는 새로 만드는 객체
  - 다른 객체를 프로토타입으로 지정하려면 Object 객체의 setPropertypeof() 사용
    - Object.setPrototypeOf(하위 객체, 상위 객체);
- 클래스 상속 연습

# 효율적으로 문자열과 배열 활용
## 문자열에 접근
### 원시 유형과 객체
- 자바스크립트에서 number, boolean, string 유형은 별도로 프로토타입 객체가 만들어져 있음
- 이 유형에서 프로퍼티나 메서드를 사용하면 일시적으로 객체로 변환 ('오토박싱')
- 사용이 끝나면 해당 객체는 메모리에서 사라짐

## 똑똑하게 배열 사용
### 새로운 배열 만들기
- 빈 배열을 만들고 값 할당
  - let season = [];
  - season[0] = 'spring';
- 리터럴 표기법으로 만들기
  - 초기값이 있는 배열
  - let pets = ['dog', 'cat']
- Array 객체의 인스턴스 만들기
  - let fruits = new Array("사과", "배")

### 배열 요소 순회 - forEach()
- 배열 요소에 함수 실행가능
- forEach(값)
- forEach(값, 인덱스)
- forEach(값, 인덱스, 배열)

### 배열 합치기
- concat()
- 전개 연산자
  - concat() 보다 간략

# 배열과 객체, 좀 더 깊게
## 에크마스크립트 2015 기능 복습
### 전개 구문
- 나머지 매개변수로 사용
  - function adNum(...numbers) {}
- 전개 구문을 사용해 배열 연결
  - animal.concat(fruits)
  - [...animal, ...fruits]
- 전개 구문을 사용해 배열 복사
  - 전개구문을 사용해 배열을 복사하면 주소를 가져오는 것이 아니라 원래 배열 요소를 꺼냄
  - const mine = [...fruits];

### 객체의 프로퍼티
- 일반적으로 객체 프로퍼티는 점 을 사용해 접근
- 에크라스크립트 2015부터는 []를 사용할 수 있고, 프로퍼티 이름에 계산식 사용 가능
- 계산된 프로퍼티 이름
  - ??? p. 388
- 프로퍼티값 단축
  - 변수와 프로퍼티 이름이 같으면 줄여쓸 수 있음

## 구조분해 할당
### 구조분해 할당이란?
- 자료의 구조를 분해해 변수에 할당
- 배열 구조 분해할당
  - let [apple, peach] = ["사과", "복숭아"]
- 일부 값만 구조 분해 할당
  - let[spring, ,fall, ] = ['봄', ,'가을', ];
- 나머지 변수를 사용해 구조 분해 할당
  - 나머지 변수에 할당하는 값은 마지막에 와야 함
  - let [teacher, ...students] = ['kim', 'lee', 'park', 'choi'];
- 두 변수 값 교환
  - [x, y] = [y, x]

### 객체 구조 분해
- 변수 이름은 프로퍼티나 메서드 이름을 똑같이 사용
  - 객체는 순서가 없어서
- 객체를 구조 분해해 변수에 할당하면 객체 프로퍼티에 접근하지 않고 변수를 사용할 수 있음
- 새로운 변수 이름 사용하기
  - 구조 분해 할 때 변수 옆에 새로운 변수 이름 지정
  - let{name : userName, age} = member
- 중첩된 객체 구조 분해하기
  - 객체 이름이나 배열 이름은 변수로 할당하지 않고, 그 안의 값만 구조 분해해 변수로 할당 할 수 있음

## 배열을 변형하는 메서드
- map()
- filter()
- reduce()
  - 값 하나로 누적 (누산기)
  - 초기값을 생략하면 배열의 첫 번째 값을 사용
  - 초기값 지정하는게 좋음

## Map과 Set
### 등장 이유
- Map은 키에 문자열 뿐아니라 모든 값 사용가능
- 객체에는 프로퍼티 간 순서가 없지만, 맵 셋에는 순서가 있음
- 객체는 프로퍼티 개수를 알려주는 프로퍼티 없음

## 이터레이터와 제너레이터
### 제너레이터 함수
- 배열이나 문자열 외에 일반 객체를 이터러블하게 만듬
- 왜필요할까?
  - 제네레이터에 있는 next()를 사용하면 바로 앞에서 실행했던 요소에 이어 다음 요소를 가져와 실행
  - 함수 안의 실행문을 한꺼번에 실행하는 것이 아니라 하나씩 실행하고, 필요하면 중간에 멈췄다가 나중에 다시 이어서 실행 할 수 있음
- 제너레이터 함수 만들기
  - function 다음에 * 기호 붙임
  - next()하면 value와 done 옴.
  - done은 마지막 요소인지 아닌지여부

# HTTP 통신과 JSON
## JSON
### 객체를 JSON 자료로 변환 - JSON.stringify(객체)
### JSON 문자열을 객체로 - JSON.parse()

# 비동기 프로그래밍
## 동기 처리 방식
### 동기 처리 방식과 비동기 처리 방식
- 자바스크립트는 싱글 스레드 언어
  - 자바스크립트에서는 함수의 실행 시간에 따라 오래 걸리느 것은 별도로 처리하고 실행이 끝났을 때 결과 반환
- 비동기 처리 방식
  - 3가지 방식이 있음
  - 콜백 함수
  - 프로미스
  - async, await

### 비동기 처리와 콜백 함수
- 함수 이름을 콜백으로 사용
```
function order(coffee, callback) {
    console.log('주문 접수');
    setTimeout(() => {
        callback(coffee);
    }, 3000);
}

function display(result) {
    console.log('준비 완료');
}

order('아메리카노', display)
```
### 익명으로 콜백 함수 작성
- 콜백에 다른 콜백 들어가면 콜백 지옥이 발생할 수 있음
- 이런 복잡성 땜에 프로미스 등장

## 프로미스
- 콜백 지옥을 피하기 위해 도입됨
### promise 객체 만들기
- 처리에 성공했을 때 실행할 콜백 함수와 성공하지 않았을 때 실행할 콜백 함수를 미리 약속
- new Promise(resolve, reject)
  - 프로미스를 만드는 소스를 '제작 코드'라 함

### promise 객체 사용
- 사용하는 코드를 '소비 코드'라 함
- then(), catch(), finally() 사용

### promise 상태
- 프로미스 객체는 자신의 상태를 저장했다가 resolve()나 reject()를 실행하면 상태를 바꿈
- promise 3단 진행 상태
  - pending
  - fulfilled
  - rejected
- 결과값을 이해하기 쉽게 result나 err 같은 변수 이름으로 받아 사용함
- resolve가 실행되면 프로미스는 fulfilled 상태가 됨
- then()의 반환값은 프로미스임
  - then(display)라고 하면 반환된 order 프로미스 결과값이 display로 넘어감

### 콜백 함수로 여러 단계 연결
- 콜백지옥 주의

### 프로미스 체이닝
- then()을 사용해 프로미스와 프로미스를 연결

### 프로미스 소비 코드 줄여 작성하기
- pizza().then(step1) 마냥 result를 생략가능

## fetch API
### 프로미스를 반환하는 fetch
- fetch(위치, 옵션) 처럼 가져올 자료 위치를 지정하고 추가 옵션이 있으면 함께 지정

## async 함수와 awati 예약어
- 프로미스 체이닝은 프로미스를 계속 연결해 사용하므로 소스가 복잡해 질 수도 있음
- 이런 문제를 줄이기 위해 async와 await  등장
### async 함수
- 그 함수 안에 있는 명령을 비동기로 실행
- async 예약어를 붙인 비동기 함수가 프로미스를 반환

### await 예약어
- 비동기 코드를 실행할 때 유용
- async 함수에서만 사용







