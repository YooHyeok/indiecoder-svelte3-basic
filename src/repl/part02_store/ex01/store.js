import { writable } from 'svelte/store';
/**
 * store(기본형태) state
 * $count와 같이 $ 기호를 붙혀 사용할 수 있다.
 * writable: store 종류 중 가장 많이 사용되는 기본형태의 store 모듈이다.
 */
export const count = writable(0)