export interface EasybankBenefit {
  icon: string;
  name: string;
  description: string;
}

export const EASYBANK_BENEFITS: EasybankBenefit[] = [
  {
    icon: 'assets/images/icon-online.svg',
    name: 'Online banking',
    description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    icon: 'assets/images/icon-budgeting.svg',
    name: 'Simple Budgeting',
    description: 'See exactly where your money goes each month. Receive notifications when you\'re close to hitting your limitis.',
  },
  {
    icon: 'assets/images/icon-onboarding.svg',
    name: 'Fast Onboarding',
    description: 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    icon: 'assets/images/icon-api.svg',
    name: 'Open API',
    description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  }
];