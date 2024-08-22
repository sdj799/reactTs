import { createElement } from "react";

const Sample = () => {
  return (
    createElement("div", null, createElement("h1" , {id: "title"}, "Hello World"), createElement("h2", null, createElement("p", null, "p tag")))
  )
}
export default Sample