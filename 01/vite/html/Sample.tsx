{/* <body>
	<div>
		<header>
		  <h1>내 웹사이트</h1>
		</header>
	
		<nav>
		  <ul>
			<li><a href="#section1">소개</a></li>
			<li><a href="#section2">서비스</a></li>
			<li><a href="#section3">연락처</a></li>
		  </ul>
		</nav>
	
		<main>
		  <section id="section1">
			<h2>소개</h2>
			<p>여기에 소개 내용을 작성하세요.</p>
		  </section>
	
		  <section id="section2">
			<h2>서비스</h2>
			<p>여기에 제공하는 서비스 내용을 작성하세요.</p>
		  </section>
	
		  <section id="section3">
			<h2>연락처</h2>
			<p>여기에 연락처 정보를 작성하세요.</p>
		  </section>
		</main>
	
		<footer>
		  <p>&copy; 2024 내 웹사이트. 모든 권리 보유.</p>
		</footer>
   </div>
</body> 
createeElement로 변환해보기
*/}
import { createElement } from "react";

const sample = () => {
  return createElement("body", null, createElement("div", null, createElement("header", null, createElement("h1", null, "내 웹사이트")),
    createElement("nav", null, createElement("ul", null, createElement("li", null, createElement("a", {href:"#section1"}, "소개"),
    createElement("li", null, createElement("a", {href:"#section2"}, "서비스")),
    createElement("li", null, createElement("a", {href:"#section3"}, "연락처"))
))),
createElement("main", null, createElement("section", {id:"section1"}, createElement("h2", null, "소개"), createElement("p", null, "여기에 소개 내용을 작성하세요.")),
createElement("section", {id:"section2"}, createElement("h2", null, "서비스"), createElement("p", null, "여기에 제공하는 서비스 내용을 작성하세요.")),
createElement("section", {id:"section3"}, createElement("h2", null, "연락처"), createElement("p", null, "여기에 연락처 정보를 작성하세요."))
 ),
 createElement("footer", null, createElement("p", null, "&copy; 2024 내 웹사이트. 모든 권리 보유." ))
))
}
export default sample;
