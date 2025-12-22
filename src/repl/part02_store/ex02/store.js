import { writable } from 'svelte/store';

/**
 * [Store 사용자 정의 함수]
 * 외부에서 svelte 문법인 $ 키워드를 통해 Store의 상태를 직접 조작하지 않고 
 * 스토어 모듈 내부에 전용 기능들을 정의하여 사용하는 방식이다.  
 * 함수 내부에 상태 조작 기능 함수를 정의한다.  
 * 정의한 기능 함수들과 외부에서 사용할 writable의 상태조작 함수(subscribe, set, update)도 함께 반환한다.  
 */
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