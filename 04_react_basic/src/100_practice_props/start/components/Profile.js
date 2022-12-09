import "./Profile.css";

const Profile = ({name = 'Jone Doe',age = '??',country = 'Japan'}) => {
  return (
    <div className="profile">
      <h3>name : {name}</h3>
      <h3>age : {age}</h3>
      <h3>from : {country}</h3>
    </div>
  );
};


export default Profile;
