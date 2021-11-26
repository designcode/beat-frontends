export const formateDate = (date: Date): string =>
  new Date(date).toLocaleDateString('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const formatCurrency = (amount: string) =>
  `$ ${amount.replace('S/ ', '')}`;

export const debounce = <F extends (...args: unknown[]) => unknown>(func: F, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};
