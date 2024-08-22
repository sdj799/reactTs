import ProfileCard from "./ProfileCard";

const Example = () => {
  return (
    <>
      <ProfileCard
        bgUrl="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uname="Sally Ramos"
        instaId="@sallytheramos"
        onClick={() => [alert("followed")]}
      />
    </>
  );
};
export default Example;
