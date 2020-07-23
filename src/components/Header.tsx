import React from 'react';
import Link from 'next/link';
import '../../styles.less';

const Header: React.FC<{}> = () => {
  return (
    <div className="headerContainer">
      <div className="headerTopLine" />
      <Link href="/">
        <div
          style={{
            color: '#0045ff',
            fontWeight: 900,
            cursor: 'pointer',
            fontSize: '26px',
            padding: '30px 20%',
          }}
        >
          Russell Dias
        </div>
      </Link>
    </div>
  );
};

export default Header;
