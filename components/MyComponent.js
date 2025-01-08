import React from "react";
import "./MyComponent.css"

function MyComponent({name,age,email,favoriteNumber,hobbyList,children}){
    return <div>
          <h1>컴포넌트 자료로 출력</h1>
          <table border='1'>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>나이</th>
                    <th>이메일</th>
                    <th>좋아하는 숫자</th>
                    <th>취미</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td>{favoriteNumber}</td>
                    <td>{hobbyList}</td>
                </tr>
                <tr>
                    <td colSpan={5}>{children}</td>
                </tr>
            </tbody>
            <tfoot />
          </table>
    </div>
  }

  export default MyComponent;
