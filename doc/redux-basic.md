# learn memo

## 流れ
### Flux
- Action -> Dispatcher -> Store -> View (React)

### Redux
- Actions -> Reducers -> Store
- Storeが状態（state）を持ち、Actionが発生した際に、Reducerを使ってStoreの状態（State）を更新する
- Storeはapplicationに一つしか持てない
- React-Reduxというモジュールを使うと、Viewの実装にReactを使うことができる

### Reduxの基本3原則
- アプリケーション全体のstateはひとつのstoreの中のobjectツリーに格納
- action（何が起こるか記述されているオブジェクト）を発火することが、stateを更新する唯一の方法
- stateがactionによってどのように変更されるか指定するために、純粋な（副作用のない）reducerを書きます。

#### Store
- 状態を持つ役割
- getState()メソッドを通して状態（state）へのアクセスを許可します
- dispatch(action)メソッドを通して状態（state）の更新を許可します
- subscribe(listener)メソッドを通してリスナーを登録します
- subscribe(listener)メソッドによって返された関数を通してリスナーの登録解除をハンドリングします

###### 実装
```js
// Storeは、インポートしたReduxのcreateStore()メソッドを使って作成
import { createStore } from 'redux'
// 初期state変数（initialState）の作成
const initialState = { value: null };
// createStore（）メソッドを使ってStoreの作成
// 引数として、第一引数に「関数」として定義したReducer（後ほど説明します）と第二引数に初期state（オブジェクト）を渡す
const store = createStore(formReducer, initialState);
```

###### 使用法
```js
// ActionをReducerに伝搬
store.dispatch(actionCreators())
// stateの状態を購読。状態に変化があったらリスナーを実行
store.subscribe(() => {
  /*
   * リスナーの処理を書く
   */
  // stateを取得
  store.getState();
})
```

#### Action
applicationからstoreにデータを送るペイロード
Storeにおいて唯一の情報源
Actionは上記の ``` store.dispatch(actionCreators()) ``` dispatchメソッドの引数に渡しStoreに送られる

###### 実装
```js
// Action名を定義
const SEND = 'SEND'
// Action Creator
const send = value => {
  return {
    type: SEND,
    value
  }
}
```
- Storeの```dispatch()```の引数にAction Creatorを渡すことで、ActionがReducerに送られる

#### Reducer
- Actionに呼応してApplicationのstateをどのように変化させるか指定する役割を持った関数
- 受け取ったActionのタイプ属性を見て対応するActionの値を用いてStoreのstateを更新する
- Storeを作成する際にReducerを```createStore()```の第一引数として渡すことでStore内でStateの更新が行える

###### 実装
- Reducerは「現在の状態（state）」と「受け取ったAction」を引数に取り、新しい状態を返す関数として実装します。
- 基本的にswitch文を使って受け取ったActionの名前(type)を判別して処理を書くようにする
- Reduxの特徴的な部分としてstateの更新を行う際にES2015の```Object.assign()```使用している
- これはstateそのものを変更させないため
- ```Object.assign()```を使用する際にはpolyfillの使用が推奨されている
```js
const formReducer = (state, action) => {
  switch (action.type) {
    case SEND:
      return Object.assign({}, state, {
        value: action.value,
      })
    default:
      return state
  }
}
```
- またReducerは複数作成可能
- ただしStoreを作成する際には一つのReducerを```createStore()```にセットする
- そこで複数のReducerを作成した場合は```combineReducers(reducers)```を使って一つにまとめる
```js
import { combineReducers } from 'redux'
const reducer1 = (state, action) => {}
const reducer2 = (state, action) => {}
const reducer3 = (state, action) => {}
const reducer = combineReducers({
  reducer1
  , reducer2
  , reducer3
})
```