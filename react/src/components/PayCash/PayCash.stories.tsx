import { Story } from '@storybook/react';
import React from 'react';

import { ThemeName } from '../../themes';
import PayCash, { PayCashProps } from './PayCash';

export default {
  title: 'PayCash',
  component: PayCash,
  decorators: [
    (Story: Story): JSX.Element => (
      <div style={{ margin: 'auto', maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onClick: { table: { disable: true } },
    onSuccess: { table: { disable: true } },
    onTransaction: { table: { disable: true } },
  },
  args: {
    to: 'bitcoincash:qznnqftcnq34vprgvhhnmr9yukd9deprl5dptmkh4f',
  },
  parameters: {
    jest: ['Button'],
  },
};

const Template: Story<PayCashProps> = props => <PayCash {...props} />;

export const Default = Template.bind({});
Default.args = {};

export const OrangeTheme = Template.bind({});
OrangeTheme.args = {
  theme: ThemeName.ORANGE,
  animation: 'invert',
};

export const UsdAmount = Template.bind({});
UsdAmount.storyName = 'USD Amount';
UsdAmount.args = {
  amount: 1,
  currency: 'USD',
  text: '$1',
  hoverText: 'Pay with BCH',
  animation: 'none',
};

export const withGoal = Template.bind({});
withGoal.storyName = 'With Goal';
withGoal.args = {
  hoverText: 'Pay with BCH',
  animation: 'none',
  goalAmount: 100,
};

export const withUSDGoalCurrency = Template.bind({});
withUSDGoalCurrency.storyName = 'With USD Goal';
withUSDGoalCurrency.args = {
  animation: 'none',
  goalAmount: 500000,
  currency: 'USD',
};

export const withEURGoalCurrency = Template.bind({});
withEURGoalCurrency.storyName = 'With EUR Goal';
withEURGoalCurrency.args = {
  animation: 'none',
  goalAmount: 400000,
  currency: 'EUR',
};
