import React from 'react';
import { DNA } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Spinner;
