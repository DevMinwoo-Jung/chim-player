/* eslint-disable react/button-has-type */
import React from "react";

function Main() {
  return (
    <div className="App">
      <header className="text-gray-100 bg-blue-500 text-center p-5 align-middle">
        redux-saga를 연습해 봅시다
      </header>
      <div className="pl-10 pt-10 text-xl">
        초기 데이터를 이곳에 보여줘야 합니다.
      </div>
      <button className="p-3 border m-10 rounded-xl bg-blue-100">
        데이터 불러오기
      </button>
    </div>
  );
}

export default Main;
