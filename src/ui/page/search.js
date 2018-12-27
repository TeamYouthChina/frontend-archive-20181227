import React from 'react';
import {TopBarg} from '../module/bar-general';
import {FooterPage} from '../module/foot';
import {SJobCompamy} from '../module/search-jobcompany';
import {SAVU} from '../module/search-avu';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <TopBarg/>
        <SJobCompamy/>
        <SAVU/>
        <FooterPage/>
      </div>
    );
  }
}

export {Search};
