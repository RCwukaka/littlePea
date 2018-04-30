import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class StoryList extends React.Component{

  render() {
    const { prefixCls, className, children } = this.props;

    const storyListClassName = classNames(`${prefixCls}`, {
        className: !!className
    });

    return (
      <ul className={storyListClassName}>
        <li>
          <div className="title-left">***年**月,小豌豆创立</div>
          <div className="tail-string"><div className="crile"></div></div>
        </li>
        <li>
          <div className="tail-string"><div className="crile"></div></div>
          <div className="title-right-2">****年**月，公司业务稳定</div>
        </li>
        <li>
          <div className="title-left">几个月内，公司营业额达到****</div>
          <div className="tail-string"><div className="crile"></div></div>
        </li>
        <li>
          <div className="tail-string"><div className="crile"></div></div>
          <div className="title-right-3">我们还在努力....</div>
        </li>
      </ul>
    );
  }
};

StoryList.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string
};

StoryList.defaultProps={
  prefixCls: 'story-list'
}

module.exports = StoryList;

