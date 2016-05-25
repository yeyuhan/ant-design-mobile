import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class ListHeader extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let { prefixCls, children, className, ...others } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-header`]: true,
      [className]: className
    });

    return (
      <div {...others} className={wrapCls}>{children}</div>
    );
  }
}