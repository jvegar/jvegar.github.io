import React from "react";
import styles from "./UserProfile.module.css";

interface UserData {
  id: number;
  name: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

interface UserProfileProps {
  user: UserData;
  onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout }) => {
  return (
    <div className={styles.userProfile}>
      <h2>Welcome, {user.name}!</h2>
      <div className={styles.userInfo}>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Member since:</strong>{" "}
          {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
      <button onClick={onLogout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
