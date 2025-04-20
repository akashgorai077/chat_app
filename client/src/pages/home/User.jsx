// import React from 'react'
// import { useDispatch,useSelector } from 'react-redux'
// import  {setSelectedUser}  from '../../store/slice/user/userslice';

// const User = ({userDetails}) => {

// const dispatch = useDispatch();

// const {selectedUser}=useSelector ((state)=>state.userReducer);
// const {onlineUsers}=useSelector (state=>state.socketReducer);
// console.log(onlineUsers?.includes(userDetails?._id))
// const isUserOnline = onlineUsers?.includes(userDetails?._id);


// const handleUserClick = ()=>{
//   dispatch(setSelectedUser(userDetails));
// };

//   return ( 
//     <div onClick={handleUserClick} 
//     className={`flex gap-5 items-center hover:bg-gray-700 rounded-lg py-1 px-2 cursor-pointer ${userDetails?._id===selectedUser?._id && 'bg-gray-700' }`}>
//       <div className={`avatar ${isUserOnline && 'avatar-online'}`}>
//   <div className="w-12 rounded-full">
//     <img src={userDetails?.avatar
// } />
//   </div>
// </div>
// <div>
//     <h2 className='line-clamp-1'>{userDetails?.fullName}</h2>
//     <p className='text-xs'>{userDetails?. username}</p>
// </div>
//     </div>
//   )
// }

// export default User;


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../../store/slice/user/userslice';

const User = ({ userDetails }) => {
  const dispatch = useDispatch();

  const { selectedUser } = useSelector((state) => state.userReducer);
  const { onlineUsers } = useSelector((state) => state.socketReducer);

  const isUserOnline = onlineUsers?.includes(userDetails?._id);

  const handleUserClick = () => {
    dispatch(setSelectedUser(userDetails));
  };

  return (
    <div
      onClick={handleUserClick}
      className={`flex items-center gap-4 p-3 rounded-md cursor-pointer transition-all duration-200
        hover:bg-[#1e293b]
        ${userDetails?._id === selectedUser?._id ? 'bg-[#334155]' : ''}
      `}
    >
      {/* Avatar with online indicator */}
      <div
  className={`avatar relative ${
    isUserOnline ? 'avatar-online' : ''
  }`}
>
  <div className="w-12 rounded-full ring-2 ring-[#7480FF]">
    <img
      src={userDetails?.avatar}
      alt="user avatar"
      className="object-cover"
    />
  </div>
</div>


      {/* User Info */}
      <div className="flex flex-col overflow-hidden">
        <h2 className="text-sm font-semibold text-white truncate">{userDetails?.fullName}</h2>
        <p className="text-xs text-gray-400 truncate">@{userDetails?.username}</p>
      </div>
    </div>
  );
};

export default User;
