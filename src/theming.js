import { DefaultTheme } from 'atomize'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'black',
  },
  transition: 'transform 0.8s linear',
}
