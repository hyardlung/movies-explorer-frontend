import React from 'react';
import './SectionTitile.css';

const SectionTitle = ({ title }) => {
  return (
      <>
        <h2 className="section-title">{ title }</h2>
        <div className="section-title__underline" />
      </>
  )
}

export default SectionTitle;
