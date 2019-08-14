import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addNewFeature } from '../actions';

const AdditionalFeature = props => {
  console.log(props);

  const [newFeature, setNewFeature] = useState();

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
    <button className="button" onClick={ () => props.addNewFeature(props.feature)}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(
  null,
  { addNewFeature }
)(AdditionalFeature);
