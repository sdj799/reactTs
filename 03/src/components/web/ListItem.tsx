const ListItem = (props: { title: string; href: string }) => {
  console.log(props);
  return (
    <>
      <li>
        <a href={props.href}>{props.title}</a>
      </li>
    </>
  );
};
export default ListItem;
