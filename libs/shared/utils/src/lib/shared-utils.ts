export const formateDate = (date: Date): string =>
  new Date(date).toLocaleDateString('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const formatCurrency = (amount: string) => `$ ${amount.replace('S/ ', '')}`;
