import React from 'react';
import {Link} from 'umi';


export default () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/user'>User</Link>
    </div>
  );
}
