import React from 'react';
import List from './List';
import List2 from './List2';

export default function AutoScroll() {
  return (
    <div className="row">
      <div className="col-6 justify-content-center my-5">
        <List />
      </div>
      <div className="col-6 justify-content-center my-5">
        <List2 />
      </div>
    </div>
  )
}
