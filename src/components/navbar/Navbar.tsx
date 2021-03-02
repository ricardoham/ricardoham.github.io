import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
    </ul>
  )
}

export default Navbar
