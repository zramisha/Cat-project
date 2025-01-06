import React from 'react';
import UserProfile from '@/components/ui/UserProfile';
import { useGetUserByIdQuery } from '@/redux/user/userApi';
import { useSelector } from 'react-redux';


const Profile = () => {
  const { loggedUser } = useSelector(state => state.auth); 
  const { data, error, isLoading } = useGetUserByIdQuery(loggedUser.userid);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const user = data.data
  if (!user) return <div>User not found.</div>;

  
  return (
    <div>
      <UserProfile user={user}/>
    </div>
  );
};

export default Profile;