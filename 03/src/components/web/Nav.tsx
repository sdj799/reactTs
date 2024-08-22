import ListItem from "./ListItem";

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <ListItem href="#section1" title="소개" />
          <ListItem href="#section2" title="서비스" />
          <ListItem href="#section3" title="연락처" />
        </ul>
      </nav>
    </>
  );
};
export default Nav;
