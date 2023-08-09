import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { HomeOutlined, UserOutlined, PhoneOutlined, AuditOutlined, AppstoreOutlined, BarsOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './Navigation.css';

export const Navigation = () => {
  const [selected, setSelected] = useState<string>('block1');
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [visibleBlock, setVisibleBlock] = useState<string>('block1');

  const handleNavigationClick = (id: string) => {
    setSelected(id);
    setIsNavOpen(false);
  };

  const handleToggleNav = () => {
    setIsNavOpen(prevState => !prevState);
  };

  const handleScroll = () => {
    const blocks = ['block1', 'block2', 'block3', 'block4', 'block5', 'block6'];
    for (let i = blocks.length - 1; i >= 0; i--) {
      const block = document.getElementById(blocks[i]);
      if (block) {
        const rect = block.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setVisibleBlock(blocks[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <button className={`toggle-button ${isNavOpen ? 'open' : ''}`} onClick={handleToggleNav}>
        {isNavOpen ? <MinusOutlined /> : <PlusOutlined />}
      </button>
      <div className={`Navigation ${isNavOpen ? 'open' : ''}`}>
        <Link to="block1" smooth={true} duration={500} className={visibleBlock === 'block1' ? 'active' : ''} onClick={() => handleNavigationClick('block1')}>
          <HomeOutlined />
        </Link>
        <Link to="block2" smooth={true} duration={500} className={visibleBlock === 'block2' ? 'active' : ''} onClick={() => handleNavigationClick('block2')}>
          <UserOutlined />
        </Link>
        <Link to="block3" smooth={true} duration={500} className={visibleBlock === 'block3' ? 'active' : ''} onClick={() => handleNavigationClick('block3')}>
          <AppstoreOutlined />
        </Link>
        <Link to="block4" smooth={true} duration={500} className={visibleBlock === 'block4' ? 'active' : ''} onClick={() => handleNavigationClick('block4')}>
          <BarsOutlined />
        </Link>
        <Link to="block5" smooth={true} duration={500} className={visibleBlock === 'block5' ? 'active' : ''} onClick={() => handleNavigationClick('block5')}>
          <AuditOutlined />
        </Link>
        <Link to="block6" smooth={true} duration={500} className={visibleBlock === 'block6' ? 'active' : ''} onClick={() => handleNavigationClick('block6')}>
          <PhoneOutlined />
        </Link>
      </div>
    </>
  );
};
