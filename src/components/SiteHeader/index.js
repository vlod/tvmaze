import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const SiteHeader = () => (
  <header className="site-header">
    <Link to="/" className="title">Show Finder</Link>
  </header>
);

export default SiteHeader;
