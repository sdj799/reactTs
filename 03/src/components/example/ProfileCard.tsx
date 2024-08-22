interface IProfileCard {
  bgUrl: string;
  profileUrl: string;
  uname: string;
  instaId: string;
  onClick: () => void;
}

const ProfileCard = ({
  bgUrl,
  profileUrl,
  uname,
  instaId,
  onClick,
}: IProfileCard) => {
  return (
    <>
      <article className="card">
        <div>
          <img className="card-img" src={bgUrl} alt="background-pic" />
        </div>
        <div className="profile">
          <img className="prof-img" src={profileUrl} alt="profile-pic" />
          <h3 className="alias">{uname}</h3>
          <p className="username">{instaId}</p>
          <button onClick={onClick}>Follow</button>
        </div>
      </article>
    </>
  );
};
export default ProfileCard;
