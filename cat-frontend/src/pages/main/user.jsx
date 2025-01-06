import React from 'react';
import { useGetUserByIdQuery } from '@/redux/user/userApi';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OtherUser from '@/components/ui/OtherUser';



const User = () => {
  const { id } = useParams();
  const { loggedUser } = useSelector(state => state.auth); 
  const { data, error, isLoading } = useGetUserByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const user = data.data
  if (!user) return <div>User not found.</div>;

  
  return (
    <div className='flex justify-center items-center'>
      <OtherUser user={user}/>
    </div>
  );
};

export default User;