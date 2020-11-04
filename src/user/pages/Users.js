import React from 'react'
import UsersList from '../components/UsersList';

const Users = () => {
    const img1 = 'https://avatars1.githubusercontent.com/u/60825078?s=460&u=e4c61ffdd824139edf125256f53ad69e562703d2&v=4'
    const USER = [{
        id: 'u1',
        name: 'Max Nvk',
        image: img1,
        places: 3
    }];

    return <UsersList items={USER} />

}
export default Users;
