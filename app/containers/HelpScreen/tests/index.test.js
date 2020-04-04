import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import HelpScreen from '../index';

describe('<HelpScreen />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <HelpScreen />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
