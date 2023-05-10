import Avatar from "@mui/material/Avatar";
const Profile = () => {
  const addlogin = JSON.parse(localStorage.getItem("isLoggedIn")) || [];
  return (
    <>
      <div>
        <h1>Account Settings</h1>
      </div>
      <div className="profileDetails">
        <div>
          <Avatar alt="Remy Sharp" src="" />
        </div>
        <div>
          {addlogin.name}
          <br />
          {addlogin.email}
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatem
        nulla offic Recusandae explicabo perspiciatis, assumenda quam beatae
        totam quaerat amet! Dignissimos, nemo.
      </div>
    </>
  );
};
export default Profile;
