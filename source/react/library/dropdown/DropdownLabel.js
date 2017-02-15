import React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';

const propTypes = {
  placeholder: React.PropTypes.string,
  label: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  error: React.PropTypes.string,
  tabIndex: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

const DropdownLabel = (props) => {
  let label = props.label;

  if (props.placeholder && !label) {
    label = props.placeholder;
  } else if (!label) {
    label = 'Select One';
  }

  const className = classnames('rc-dropdown-toggle', {
    'rc-dropdown-toggle-error': props.error,
  });

  return (
    <a
      tabIndex={ props.tabIndex }
      disabled={ props.disabled }
      onClick={ props.onClick }
      className={ className }
    >
      <span className="rc-dropdown-label">
        <span className="rc-dropdown-label-text">{ label }</span> <Icon type="chevron-down" />
      </span>
    </a>
  );
};

DropdownLabel.propTypes = propTypes;

export default DropdownLabel;
