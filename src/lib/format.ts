export const ESCROW_FEE = 2500;

// fr-FR's Intl number formatting uses NBSP ( ) and narrow-NBSP ( )
// as thousands separators; normalize both to a plain space for display.
const NON_BREAKING_SPACES = /[  ]/g;

export function formatFcfa(amount: number): string {
  const spaced = amount.toLocaleString("fr-FR").replace(NON_BREAKING_SPACES, " ");
  return `${spaced} F`;
}
