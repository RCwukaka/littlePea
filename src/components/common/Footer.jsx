import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Footer extends React.Component{

  render() {
    const { prefixCls, className, children } = this.props;

    const footerClassName = classNames(`${prefixCls}`, {
        className: !!className
    });

    return (
      <div className={footerClassName}>
        {children}
      </div>
    );
  }
};

Footer.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string
};

Footer.defaultProps={
  prefixCls: 'footer footer-default'
}

module.exports = Footer;

