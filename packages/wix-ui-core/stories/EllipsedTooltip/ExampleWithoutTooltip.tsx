import * as React from 'react';
import {withEllipsedTooltip} from '../../src/HOCS/EllipsedTooltip';

const Text = ({forwardedref, children, ...rest}) => <span {...rest} ref={forwardedref}>{children}</span>;

const EllipsedText = withEllipsedTooltip({showTooltip: false})(Text);

export default () => (
  <div style={{width: '170px'}}><EllipsedText>This text is going to get ellipsed</EllipsedText></div>
);