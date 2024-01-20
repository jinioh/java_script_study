## 순서도 그리기
- 프로그래밍에서는 절차가 매우 중요
- 프로그램은 고정된 절차로 돌아가야 한다.
- 각 절차는 항상 내용이 같아야 한다. 
- 예시를 들어 절차를 설ㄹ명하는 행동은 좋지 않다. 예시는 언제든 비뀔 수 있으니까.
- 예시는 절차를 세우고 나서 절차를 검증할 떄 사용하는 것이 좋음. 
- 절차를 세울 때는 모든 가능성을 고려해야 함. 
- 처름부터 모든 가능성을 고려하기는 어려우므로, 절차를 생각나는 대로 만들어 놓고 차차 보완해가자. 
- 프로그램 절차를 만들 때의 춴칙
  1. 프로그램 절차의 개수는 정해져 있어야 한다
  2. 각 절차는 항상 같은 내용이어야 한다
  3. 모든 가능성을 고려해야 한다
  4. 예시는 절차를 검증하는 데 사용한다
  - 순서도를 만들 때 사용자의 이벤트가 필요한 곳에서 순서도를 끊어야 함은 잊지말자
- 절차는 항상 일직선 모양이 아니다. (분기점)

## HTML 태그 선택
- 보통 자바스크립트에서 HTML 태그를 가져오는 것을 '선택'이라 표현. 
- 선택의 특별한 방법으로 document.querySelector('선택자')를 사용
- 태그가 여러개라면 document.querySelectorAll('선택자') 하면 모두 선택
  - html 태그에 id 속성이 있는데, 이는 유일한 값이다. 
  - '선택자' 대신 '#아이디'를 사용하면 id 속성을 사용해 유일한 값을 가져오게 된다. 
- 두번째, 세번째 버튼을 동시에 선택하고 싶다면, class를 사용
  - class는 여러번 사용 가능하다. 
  - document.querySelectorAll('.클래스')처럼 .을 사용
- 어떤 태그 안있는 다른 태그 선택
  - 선택자를 여러 개 동시에 적으면 되는데, 선택자 사이에 공백을 주어 구분
  - document.querySelector('선택자 내부선택자 ...')

## 태그에 이벤트 달기
- 사용자가 태그와 상호 작용을 할 때 '이벤트'라는 것이 발생. 
  - ex) input 태그에 글자 입력하면, input이라는 이벤트 발생하고 버튼을 클릭하면 click 이벤트 발생
- 자바스크립트는 이벤트를 자동으로 감지할 수 없다
- 그래서 이벤트 리스너라는 것을 직접 추가. addEventListener('이벤트 이름', 리스너 함수) 사용
  - 여기서 리스너 함수를 '콜백 함수'라 부름. 특정 작업이 실행되고 난 뒤 추가로 실행되는 함수를 말함.
  - 이벤트 리스너에 넣는 함수에는 매개변수로 이벤트에 관해 정보가 제공된다. 
  ```
  const onInput = (evnet) => {
    console.log('글자 입력', event.target.value);
  };
  const $input = document.querySelector('input');
  $input.addEventListener('input', onInput);
  ```
- '태그.textContent' 이는 태그 내부의 값을 얻거나 수정할 때 사용됨
  - textContent는 무조건 문자열로 나와서 ''로 나옴
  - 기본적으로 태그 내부의 값을 선택할 때는 textContent를 사용하는게 맞지만, 입력 태그만 value를 사용한다. 
    - input이 대표적인 입력 태그로, 입력태그.value = 값; 이렇게 하면 입력창에 값이 들어감
    - 일반 태그는 value가 아니라 textContent 속성을 사용
    - focus로 입력 태그를 선택할 수 있음. 입력태그.focus()

## 함수
- 함수를 호출 할 때마다 반환 함수를 생성하는 함수를 '고차 함수'라고 함
```
const func = () => {
  return () => {
    console.log('hello');
  }
}
```
  - 반환된 함수는 다른 변수에 저장할 수 있고, 그 변수에 저장된 함수를 다시 호출 할 수 있음.
- '모든 내부 코드가 같은' 함수보다 '대부분 다 비슷한데 특정 부분만 다른'함수가 실무에 더 많이 나와 이럴땐 고차 함수를 사용해 중복을 제거해야 한다
- 아래 코드 아리까리한점. 왜 () => 이걸 한번 더 해야만 햇나? (op) => {..} 이렇게 하면 안되나?
```
const onClickOperator = (op) => () => {
  if (numOne) {
      operator = op;
      $operator.value = op;
  } else {
      alert('숫자 먼저 입력');
  }
}
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));
```
```
<GPT 답변>
표시된 대로 onClickOperator 함수를 수정하면 HTML의 이벤트 리스너와 함께 함수를 사용하는 방식이 변경됩니다. 흐름을 살펴보겠습니다.

HTML 로드: HTML 페이지가 로드되면 <body> 태그 끝에 연결된 JavaScript 파일을 읽고 실행합니다. 여기에는 'onClickOperator' 함수 정의가 포함됩니다.
이벤트 리스너 설정: 원본 코드에서는 연산자 버튼(#plus, #minus, #divide, #multiply)에 대한 이벤트 리스너를 설정합니다. 그러나 수정된 ​​onClickOperator 함수를 사용하면 이벤트 리스너를 설정할 때 '+' 또는 '-'와 같은 연산자를 직접 전달할 수 없습니다. 이는 수정된 함수가 다른 함수를 반환하지 않고 클릭 이벤트를 직접 처리하기 때문입니다.

연산자 버튼 클릭: 연산자 버튼을 클릭하면 적절한 연산자를 onClickOperator에 수동으로 전달해야 합니다. 이벤트 리스너를 설정할 때 'onClickOperator'를 다른 함수 내에 래핑하면 됩니다. 다음은 더하기 버튼에 대한 이벤트 리스너를 설정하는 방법에 대한 예입니다.

document.querySelector('#plus').addEventListener('click', () => onClickOperator('+'));

이 예에서는 #plus 버튼을 클릭하면 익명 함수가 호출되고 '+'를 인수로 사용하여 onClickOperator를 호출합니다.

onClickOperator 실행: onClickOperator가 '+'와 같은 연산자로 호출되면 먼저 numOne에 값이 있는지 확인합니다. 그렇다면 '연산자'를 전달된 연산자로 설정하고 '$연산자' 입력 값을 업데이트합니다. numOne이 비어 있으면 '숫자를 먼저 입력하세요'라는 경고가 표시됩니다.
지속적인 상호 작용: 계산기와 더 많은 상호 작용(숫자 입력, 연산자 선택 등)을 하면 연산자 버튼을 클릭할 때마다 해당 연산자에 따라 'onClickOperator'가 호출됩니다.
참고: 이제 onClickOperator가 클릭 이벤트를 직접 처리하므로 예제에 표시된 것처럼 이벤트 리스너의 컨텍스트에서 이벤트가 올바르게 호출되는지 확인해야 합니다.
```

- 중첩 if를 제거하는 방법
  1. if 문 다음에 나오는 공통된 절차를 각 분기점 내부에 넣음
  2. 분기점에서 짧은 절차부터 실행하게 if문 작성
  3. 짧은 절차가 끝나면 return이나 break로 중단
  4. else를 제거함(이때 중첩 하나가 제거됨)
  5. 다음 중첩된 분기점이 나오면 1~4의 과정 반복

## Math.random()은 무작위가 아님
- 보안과관련된 작업을 할 떄는 이를 이용하면 위험
- window.crypto.getRandomValues()가 따로 있음

## 입력창 검증
- 보통 입력창이 있으면 폼 태그로 감싸 submit 이벤트를 사용하는 것이 좋음
- alert 함수는 undefined를 반환. undefined는 false로 처리됨

### for문 사용않고, 배열 만들기
- const numbers = Array(9).fill().map((v, i) => i + 1); 
- 배열 메서드가 많으므로 배열 메서드를 익히면 좋음

### indexOf와 includes
- 배열이나 문자열에 원하는 값이 있는지 찾는 메서드

### 이미지 스프라이트

### || 조건 배열 includes로 줄이기
- dif == 2 || dif == -1을 아래와 같이 줄일 수 있음
- [2, -1].includes(diff)

### setInterval
- setTimeout과 비슷
- 단, 한번만 실행되는 setTime과 달리 지정 시간 주기로 함수 실행

### clearInterval, clearTimeout
- setInterval과 setTimeout 함수는 각각 위 함수로 취소가능

### 태그에 붙은 클래스 조작
- 태그.classList.contains('클래스')
- 태그.classList.add('클래스')
- 태그.classList.replace('기존클래스', '수정클래스')
- 태그.classList.remove('클래스')

### event.target
- 이벤트가 발생한 직접적인 대상

### event.currentTarget
- 이벤트가 발생한 태그가 아닌 이벤트를 연결한 태그에 접근
- 버블링 개념
  - 이벤트가 발생할 때 부모 태그에도 동일한 이벤트 발생하는 현상
  - 이벤트 버블링이 일어나면 이벤트 리스너 콜백 함수의 event.target은 이벤트가 발생한 태그로 바꿔줌

### Array.from
- 유사 배열 객체를 배열로 만듬
- 문자열도 배열로 만듬

### every, some
- 배열의 모든 조건에 해당하는지 판단하려면 every
- 하나라도 조건에 해당하는지 판단하려면 some

### factory 함수, 생성자 함수, class
- factory 핳ㅁ수에서 객체를 생성할 때마다 메서드도 같이 새로 생성됨
- 생성자 함수는 메서드를 추가할 때는 prototype 속성 사용
  - 프로토타입 메서드
  - 메서드를 재사용
  - 생성자 함수와 프로토타입 메서드가 하나로 묶여 있지 않음
- 위 두개를 보완한게 class 문법 
  - 메서드 재사용함

## addEventListener 안에서의 함수 (ch10)
- 함수 기능이 console.log(this)라면
- 함수 선언문을 사용하면 documrhent가 출력
- 화살표 함수를 사용하면 window가 출력
  - 화살표 함수는 기존 this를 유지할 뿐 this를 어떤 값으로 바꾸지는 않음
- 기본적으로 this는 window 객체를 가리킴
  - 객체를 통해 this를 사용할 때는 this가 해당 객체를 가리킴
  - 특정 메서드는 콜백 함수의 this를 바꿈 addEventListener가 대표적
  - this가 바뀌는 것을 원치 않는다면 함수 선언문 대신 화살표 함수 사용

## 참조, 깊은복사, 얕은복사
- 얕은 복사는 중첩된 객체가 있을 때 가장 바깥 객체만 복사되고 내부 객체는 참조 유지
- 깊은 복사는 내부 객체까지 참조관계를 끊겨서 복사가 됨