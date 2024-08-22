interface ISectionItem {
  id: string;
  title: string;
  content: string;
  onClickHandler: (type: string) => void;
}
const SectionItem = ({ id, title, content, onClickHandler }: ISectionItem) => {
  return (
    <>
      <section id={id}>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={() => onClickHandler(title)}>클릭</button>
      </section>
    </>
  );
};
export default SectionItem;
