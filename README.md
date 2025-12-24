# 프로젝트 구성 및 환경설정
<details>
<summary>접기/펼치기</summary>
<br>

## 프로젝트 clone degit
깃 리포지토리에서 파일만 복사해오는 도구인 degit 옵션을 사용한다.
- [indiecoder-svelte3-template.git](https://github.com/YooHyeok/indiecoder-svelte3-template.git)

### npx 방식
설치 없이 실행 가능한 npm CLI 이다. 아래 명령을 통해 degit 패키지를 즉시 실행하여 GitHub 레포지토리를 다운로드한다.
- `npx degit YooHyeok/indiecoder-svelte3-template#main ./`
  - `./`: 현재 경로를 프로젝트로 지정  
    (`-/`가 아닌 프로젝트명을 기입할경우 디렉토리가 생성되고, 하위로 설치된다.)

### npm 방식
degit을 로컬 또는 전역에 설치한 뒤 degit 명령을 통해 GitHub 레포지토리를 다운로드한다.
- `npm install -g degit`
- `degit YooHyeok/indiecoder-svelte3-template#main ./`
  - `./`: 현재 경로를 프로젝트로 지정  
    (`-/`가 아닌 프로젝트명을 기입할경우 디렉토리가 생성되고, 하위로 설치된다.)

### 설치 및 기동
- `npm install`
- `npm run dev`
</details>
<br>

# Svelte 기본 문법

<details>
<summary>접기/펼치기</summary>
<br>

## Svelte의 특징
svelte의 가장 큰 특징중 하나는 바로 write less code 이다.  
다른 프레임워크보다 적은 코드로 결과를 만들 수 있는 간결함이다.  

### 1. state 상태값
모든 프론트엔드 프레임워크의 구동방식은 비슷하다.  
자바스크립트로 state라고 하는 상태에 해당하는 어떤 변수를 두고  
해당 상태값의 상태에 따라 html과 css로 화면을 만들어간다.  
#### 코드 분석 
```html
<script>
let count = 0;

function handleClick() {
  // 이벤트 코드
  count += 1;
}
</script>
<button on:click={handleClick}>
  클릭수 { count }
</button>
```
`let count = 0;` 부분이 바로 상태를 나타내는 상태값인 state이다.  
상태값은 html 영역에서 `{ count }`와 같은 형태로 표현할 수 있다.  
또한 함수 `handleClick`은 상태값인 count에 1을 더하는 역할을 한다.  
handleClick함수는 마크업 영역에서 onClick 이벤트에 연동하여 실제 마우스 클릭 이벤트에 바인딩하여 
실제 마우스 클릭 이벤트를 감지하고 작동하게 된다.  
결국 변경된 상태값은 바로 적용되어 해당 상태값이 사용하는곳에 반영되게 된다.  


svelte 공식 사이트 > REPL 

별다른 설치 없이 스벨트 코드를 입력하고 바로 결과를 확인할 수 있다.  

#### 예제
```svelte
<script>
  let count = 0;
  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  클릭수 {count}
</button>
```


상태값의 경우 기본이 되는 변수는 물론 배열, 객체 그리고 객체의 배열 형태 등 자바스크립트에서 사용할 수 있는 대부분의 데이터 형태를 사용할 수 있다.  

```js
let count = 1; // 기본
let array = [1, 2, 3, 4, 5] // 배열
let objectState = { // 객체
  name: 'john',
  age: 20,
  location: 'seoul'
}
let objectArray = [ // 객체의 배열
  { 
    name: 'john',
    age: 20,
    location: 'seoul'
  },
  { 
    name: 'kim',
    age: 12,
    location: 'busan'
  },
  { 
    name: 'sun',
    age: 30,
    location: 'jeju'
  },
]
```

### 2. Reactivity - 반응형 구문 (`$:`)
Svelte에서는 `$:` 기호를 이용해서 리액티비티적인 기능들을 쉽게 구현할 수 있다.  

#### 코드분석
```svelte
<script>
let count = 0
$: doubled = count * 2
$: if(count >= 10) {
  alert('카운트가 10을 넘었습니다. ')
  count = 9
}

$: {
  console.log( count )
  console.log( doubled )
}

function handleClick() {
  // 이벤트 코드
  count += 1
}
</script>
<button on:click={handleClick}>
  클릭수 {count} {count === 1 ? 'time' : 'times'}
</button>
<p>{count} 두배는 {doubled}</p>
```

일반적인 상태값이 let으로 선언되는것과 달리 doubled 변수는 반응성 기호로 선언되었다.  
`$: doubled = count * 2`  
따러서 doubled는 count가 변경될 때마다 1을 갑지하고 해당 count에 2를 곱한 값으로 설정된다.  

반응성 기호는 변수뿐만 아니라 중괄호 블록으로 감싸 특정 영역에 영향을 줄 수도 있다.  
```svelte
<script>
$: {
  console.log( count )
  console.log( doubled )
}
</script>
```
예제에서 위 코드는 반응성 기호 안에 console.log() 들은 count와 doubled가 변경이 되면 로그를 출력하게 된다.  

심지어 if조건문과 사용해도 된다.  
```js
<script>
$: if(count >= 10) {
  alert('카운트가 10을 넘었습니다. ')
  count = 9
}
</script>
```
예제에서 위 코드는 count가 10보다 같거나 클 경우 alert을 출력하고 count값을 9로 변경한다.  

이렇게 반응성 기호를 이용하면 일반적인 프로그램에서의 호출과 달리 선언만 하면 그에 맞는 환경에 따라 작동한다.  
마치 화재경보기가 열을 감지하면 스프링쿨러가 물을 발사하는 것과 비슷한 작용이다.  
또한 마크업영역의 경우 기본적으로 상태값과 연계되어 상태값의 변화에 따라 dom이나 내용들이 보여지게 된다.  

예제의 경우 count와 doubled는 변경이 되면 해당 변경된 값이 표현되고 count의 경우 1과 같을때 time이 그 외의 값에는 times가 표시되게 된다.  

이처럼 반응성 기호로 변수나 영역을 만들고 선언을 하면 대상이 되는 상태값의 변화를 자동으로 감지해서 필요한 행동을 할 수 있도록 만들 수 있다.  
따라서 반응성 기호를 잘 활용하면 복잡한 기능의 연계를 쉽게 구현할 수 있다.  

주의할점은 let으로 선언한 기본 state 의존 변수를 코드에 꼭 포함시켜야 한다는 점이다.  
```svelte
<script>
let count = 0
$: doubled += 'abc'

$: {
  console.log("메롱");
  console.log(doubled);
}
</script>
```
만약 위와같이 reactive 변수에 의존변수를 포함시키지 않는다면, doubled는 dom 이 렌더링 될때 최초 1회만 초기화되고, {} 실행블록도 최초 1회만 실행된다.  
즉, 변경을 감지하지 못하는것이다.  
이 말은 `$:` 코드 내에 포함되고 있는 모든 반응형 의존변수를 감시하고, 해당 의존변수의 상태 변경이 감지될 경우 현재의 상태를 유지한 채 재실행 된다.


현실세계로 비교하자면 일반적인 프로그램 방식을 물을 수동으로 틀었다 잠그는 샤워기와 비슷하다면 선언형 방식의 경우는 불이 나면 자동으로 물을 뿌려주는 화재경보기와 비슷하다고 할 수 있을 것이다.  

### 3. Component

#### Single Page Application (SPA)
svelte를 포함한 대부분의 프론트엔드 프레임워크들은 SPA, 싱글페이지 어플리케이션의 구조를 가진다.  
하나의 페이지에 필요에 따라 다양한 요소들을 배치해서 사용하는 구조가 바로 SPA 이다.  
SPA 구조 앱을 만들 때 페이지가 하나라고 해서 하나의 페이지에 모든 내용을 넣는 것은 효율적이지 못한다.  
그래서 컴포넌트라는 작은 블록을 만들고 그 블록을 조합하며 화면을 구성하는 것이 일반적이다.  
블로그 등을 예로 들자면 상단의 Header, 사이드의 Aside, 내용 Content, 그리고 하단의 Footer로 구성할 수 있다.  
![alt text](docs/images/part01/image.png)  
또한 Content에는 개별 Post를 독립된 컴포넌트로 만들어 배치할 수도 있다.  
![alt text](docs/images/part01/image-1.png)  

하나의 컴포넌트에는 Javascript, Html, CSS가 포함될 수 있고 재사용도 가능하다.  
이런 컴포넌트는 필요한 기능으로 만들어지고 만들어진 컴포넌트는 필요에 따라 조합되어 사용된다.  
현실세계의 레고 블록에 비유할 수 있다.  
```svelte
<script>
  let state = 1
</script>
<h1>component</h1>
<style>
  h1 {
    color: red;
  }
</style>
```

이러한 컴포넌트가 모여 하나의 앱이 되는 형태이므로 완성된 앱은 구조상 트리 구조를 가진다.  
![alt text](docs/images/part01/image-2.png)  
App.svelte 라는 제일 상위 컴포넌트가 있고 해당 컴포넌트로부터 가지가 뻗어나가듯 다양한 컴포넌트가 위치하게 되는 구조이다.  

### 4. Props
하나의 컴포넌트에 배치된 컴포넌트들은 props를 이용해 통신할 수 있다.  
상위 컴포넌트에서 하위 컴포넌트로 상태값을 전달하는 것으로 단방향적인 성격을 가진다.  

사용 방법은 `<ComponentName {상태변수}/>` 형태와 같이 선언된 컴포넌트 태그 내 중괄호를 작성하고 그 안에 상태값의 이름(변수명)을 작성하여 값을 넘길 수 있다.  
```svelte
<script>
  import ComponentName from '~/componentName.svelte'
  let state = 0;
</script>
```

받는 측에서는 `export` 키워드를 사용하여 `export let 상태변수` 형태로 선언하여 값을 받는다.
```svelte
<script>
  export let state;
</script>
```

이렇게 전달된 props는 단방향적인 성격을 가진다.  
그래서 만약 하위 컴포넌트에서 상위 컴포넌트의 상태값을 변경할 경우 상위 컴포넌트의 변경과 관련된 메소드를 만들고 해당 메소드를 상태값과 같은 방법으로 전달하여 사용해야 한다.

```svelte
<script>
  import BtnClick from './btnClick.svelte'
  let count = 0;

  function handleClick() {
    //이벤트 코드
    count += 1;
  }
</script>
<BtnClick {count} {handleClick} />
```
전달받는 측에서는 상태값과 마찬가지로 export let으로 함수를 받을 수 있다.  
```svelte
<script>
  export let count;
  export let handleClick;
</script>

<button on:click={handleClick}>
  클릭수 {count}
</button>
```

참고로 하위 컴포넌트에서 전달받은 상태값을 그냥 변경해버릴 경우 상위 컴포넌트의 상태값은 변경되지 않는다.  
따라서 props를 이용한 상태값의 제어의 경우 꼭 상태값에 위치한 상위 컴포넌트에 변경 메소드를 만들어
변경하고자 하는 하위 컴포넌트로 전달하여 제어해야 한다.  

#### 단방향 바인딩
상위 컴포넌트에서 변경이 되고 변경이 되면 다시 하위컴포넌트로 전달되는방식이다.
react나 vue와 같은 프론트엔드 프레임워크에서 널리사용되는 통신 패턴이다.  
핵심은 상위 컴포넌트에서 하위 컴포넌트로만 변화를 전달할 수 있다.
props를 이용하면 상하관계의 상태값 조작은 용이하지만 수평관계이거나 혹은 컴포넌트끼리 거리가 아주 먼 경우 구조가 복잡해 질 수 있다.  
이 경우 context, dispatcher, store 등을 이용하여 통신하면 된다.  
강의에서는 전역 컴포넌트 통신에 store를 사용한다.  


### 5.HTML DOM 제어
프론트엔드는 결국 상태값에 따라 화면에 그려주는 기능이 메인이다.  
Svelte에서는 화면 즉, HTML DOM을 효율적으로 제어하게 도와주는 기능들을 제공하고 있다.  

#### 1. 논리 블록
논리 블록은 일반적인 프로그램언어의 if와 비슷한 기능을 한다.  
단지, 스크립트 영역에서 사용하는것이 아니고 html, 즉 markup 영역에서 상태값에 따라 분기를 나누고 표현할 수 있게 도와주는 기능이다.  

markup 영역에서 `{#if 조건}`형태와 같이 중괄호 안에 `#if`를 작성하고 조건을 넣어준다.  
해당 조건이 참일경우에 대한 내용을 다음 라인으로 개행하고 들여쓰기로 구분하여 작성한다.  
`{:else}` 형태와 같이 조건이 반대되어 if 조건에 해당되지 않을 경우의 내용을 작성한다.  
완료된 후에는 꼭 `{/if}` 문장으로 if문을 닫아줘야 한다.
```svelte
{#if 조건}
  if 조건이 참일때 내용
{:else}
  if 조건이 거짓일때 내용
{/if}
```

단순하게 하나의 조건을 작성할 수도 있다.  
```svelte
{#if 조건}
  if 조건이 참일때 내용
{/if}
```

`{:else if 조건}`과 같이 `else if`문을 이용하여 더 많은 조건을 사용할 수도 있다.  
```svelte
{#if 조건1}
  if 조건1이 참일때 내용
{:else if 조건2}
  if 조건2가 참일때 내용
{:else if 조건3}
  if 조건3이 참일때 내용
{:else}
  모든 조건에 해당하지 않을 경우
{/if}
```

#### 2. 반복 블록
반복 블록은 일반적인 프로그램의 for 또는 if와 같은 반복문에 해당하는 기능으로 배열의 내용을 HTML영역에서 반복적으로 나타내주는 역할을 한다.  

`{#each datas as data}` 중괄호 안에 #each를 작성하고 반복해서 작성할 배열을 선언한 후 as 키워드를 통해 순서대로 들어오는 배열의 요소 를 담을 변수를 지정한다.  
해당 문장으로 부터 개행하여 `{data.name}` 형태와 같이 반복블록에서 as키워드로 정의한 순회 변수에 접근한다.
완료된 후에는 꼭 `{/each}` 문장으로 each문을 닫아줘야 한다.
```svelte
<script>
  let datas = [
    { name: '바보' },
    { name: '멍청이' },
    { name: '똥깨' },
  ]
</script>
{#each datas as data}
  {data.name}
{/each}
```

결과 예시
```text/plain
ㆍ바보
ㆍ멍청이
ㆍ똥깨
```

반복블록을 이용하면 위와같이 배열 형태의 상태값을 쉽게 연속해서 출력할 수 있다.  
상품 리스트나 SNS의 글 목록 등을 나타낼 때 편리하게 사용할 수 있다.  
</details>
<br>


# Store
<details>
<summary>접기/펼치기</summary>
<br>

전역으로 사용 가능한 상태값 저장소
앱을 개발하다 보면 컴포넌트에서 사용되는 상태값이 여러개의 다른 컴포넌트에 영향을 주는 일이 자주 발생한다.  

![alt text](docs/images/part02/image.png)  
위와 같은 컴포넌트 구조로 구성된 앱이 있다고 가정해보자.  
7번 컴포넌트에서 값을 변경 후 10번으로 전달해야 한다면 기존 props를 이용해 통신할 경우 아래와 같은 과정이 필요할 것이다.  
![alt text](docs/images/part02/image-1.png)  
이 과정은 결코 효율적이라 할 수 없다.  

스토어를 만들고 모든 컴포넌트가 스토어를 바라보게 만들면 아주 쉽게 컴포넌트간 공유할 수 있는 상태값을 만들고 제어할 수 있다.  
![alt text](docs/images/part02/image-2.png)  
컴포넌트가 스토어를 바라보기만 한다면 상위 또는 하위 컴포넌트를 거치지 않고 바로 상태값을 변경할 수 있기 때문이다.  

### 사용 방법
stores.js라는 모듈 파일을 만들어 사용한다.  
svelte/store로 부터 writable 모듈을 import하여 사용한다.  

- store.js
  ```js
  import { writable } from 'svelte/store';
  export const storeName = writable(초기값)
  ```

writable은 스토어의 종류 중 가장 많이 사용되는 기본 형태의 스토어 모듈이다.  
읽기, 수정, 삭제가 모두 가능한 법용적인 스토어이다.  
writable()로 초기값을 지정하여 생성한 후 store 이름을 지정하여 내보낸다.  
(외부에서 사용해야 하기 때문에 export 키워드로 내보내야한다.)

이렇게 만들어진 store는 외부에서 import를 통해 불러와 사용할 수 있다.  
```svelte
<script>
  import { storeName } from '~/store.js'
</script>
```

#### `$` 자동 구독
불러온 store는 일반적인 상태값과 달리 접두사로 `$` 기호를 사용하여 접근해야 한다.  
(이를 공식적으로는 자동구독이라고 한다.)
- Increment.svelte
  ```svelte
  <script>
    import { storeName } from '~/store.js'
    const onIncrement = () => {
      $storeName = $storeName + 1
    }
  </script>
  ```
- Decrement.svelte
  ```svelte
  <script>
    import { storeName } from '~/store.js'
    const onDecrement = () => {
      $storeName = $storeName - 1
    }
  </script>
  ```
- Result.svelte
  ```svelte
  <script>
    import { storeName } from '~/store.js'
  </script>
  <p>{ $storeName }</p>
  ```

위와 같이 3개의 컴포넌트에서 하나의 store 상태변수에 접근이 가능하다.

#### Custom Stores(사용자 정의 상태모듈)
외부에서 svelte 문법인 $ 키워드를 통해 Store의 상태를 직접 조작하지 않고 
스토어 모듈 내부에 전용 기능들을 함수로 정의하여 사용하는 방식이다.  
함수 내부에 상태 조작 기능 함수를 정의한다.  
정의한 기능 함수들과 외부에서 사용할 writable의 상태조작 함수(subscribe, set, update)도 함께 반환한다.  

```js
import { writable } from 'svelte/store';
function createCount() {

  /**
   * 함수 내부에 writable을 통해 store 모듈의 상태 객체 선언한다.  
   * 선언한 writable 상태 객체 내부 함수를 통해 상태를 조작한다.  
   */
  const {
    subscribe // store의 값이 변경되면 자동으로 반영하는 역할
    , set // store의 값을 초기화(store 전체) 하는 역할
    , update // 값의 일부만 변경하는 역할 - 주로 커스텀 메소드를 만들때 사용되는 기능
  } = writable(0) // 기본형태일때 svelte문법인 $ 키워드를 붙히지 않고 공식적인 JS API를 통해 writable객체 내 메소드를 통해 조작 가능

  const increment = () => update(count => count + 1)
  const decrement = () => update(count => count - 1)
  const reset = () => set(0) // 0으로 초기화

  return {
    subscribe, // 외부에서 사용할 writable의 기본 기능도 함께 반환
    increment,
    decrement,
    reset
  }
}

export const count = createCount();
```
마지막으로는 `export` 키워드를 사용하여 해당 store 커스텀 함수를 모듈내에서 export해줘야 외부에서 접근하여 사용할 수 있게 된다.  


- Increment.svelte
  ```svelte
  <script>
    import { count } from '~/store.js'
    const onIncrement = () => {
      count.increment();
    }
  </script>
  ```
- Decrement.svelte
  ```svelte
  <script>
    import { count } from '~/store.js'
    const onDecrement = () => {
      count.decrement();
    }
  </script>
  ```

- Result.svelte  
  store 모듈에서 subscribe를 반환하였으니, $키워드를 통한 자동 구독을 사용하지 않고, 수동으로 subscribe를 통해 직접 구독한다.  
  콜백함수를 통해 일반(상태) 변수에 할당해준다.
  ```svelte
  <script>
    import { count } from '~/store.js'
    let value;
    count.subscribe((state) => (value = state));
  </script>
  <p>{ value }</p>
  ```
</details>
<br>


# Slot
<details>
<summary>접기/펼치기</summary>
<br>

상태값과 별개로 markup 영역에 html이 반복적으로 사용될 때 재사용 할 필요가 종종 발생한다.  

예를들어 아래와 같은 카드 컴포는트를 계속해서 재사용 할 일이 있다고 가정해 본다.  
![alt text](part03/image.png)  
기본적인 레이아웃은 변하지 않지만 컴포넌트 내부의 HTML 내용은 계속 변경될 수 있다.  
이때 컴포넌트로 전달되는 데이터는 아래와 같이 h2태그와 p태그 안의 내용이 된다.  
![alt text](part03/image-1.png)  
이와 같은 상황을 처리할 때 내용만을 props로 전달하는 방법이 있다.  
```svelte
<script>
  import Card from './card.svelte'
</script>
<Card title={title1} content={content1}></Card>
<Card title={title2} content={content2}></Card>
```
하지만 필요에 따라 컴포넌트 안에 사용되는 태그도 같이변경된다면 어떨까?
이런 상황을 props를 이용해 처리하는 방식은 쉽지 않다.  

Slot을 사용하면 쉽게 구현이 가능하다.  
## ex01) 기본 예제
- [Card.svelte](src/repl/part03_slot/ex01/Card.svelte)
  ```svelte
  <div class="card">
    <slot></slot>
  </div>
  ```
위와 같이 Card 컴포넌트로 내용을 전달할 다른 컴포넌트로부터, 넘겨받은 태그를 출력할 위치에 `<slot></slot>` 태그를 삽입하여 Card 컴포넌트 내용을 작성한다.  

- [Slot.svelte](src/repl/part03_slot/ex01/Slot.svelte)
  ```svelte
  <script>
    import Card from "./Card.svelte";
  </script>

  <div>
    <Card>
      <h2>안녕하세요!</h2>
      <p>이곳은 내용이 들어가는 영역입니다.</p>
    </Card>
    <br />
    <Card>
      <h2>Hello Svelte</h2>
      <p>Svelte를 배우는 여러분을 환영합니다.</p>
      <p>즐거운 코딩 되세요...</p>
    </Card>
  </div>
  ```
Card.svelte 컴포넌트를 import한 후 일반적인 컨테이너(열리고 닫히는 쌍)태그처럼 선언하고, 해당 태그 사이에 끼워넣으면 Card 컴포넌트의 `<slot></slot>`에 출력(배치)되게 된다.  

`<slot>` 태그로 실제 정의하여 슬롯을 받는쪽을 **자식 컴포넌트**라고 부르며,  
이렇게 정의한 자식 컴포넌트를 import 하여 slot에 들어갈 내용을 직접 채워넣는 쪽을 **부모 컴포넌트**라고 정의한다.

</details>
<br>

# Template
<details>
<summary>접기/펼치기</summary>
<br>

</details>
<br>