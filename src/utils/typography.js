import Typography from 'typography'
import noriegaTheme from "typography-theme-noriega";
require("typeface-lato");

noriegaTheme.baseFontSize = "16px"; // was 18px
noriegaTheme.scaleRatio = 2.625;

noriegaTheme.overrideThemeStyles = () => ({
  'h1,h2,h3': {
    fontWeight: '900',
  },
  'p': {
    lineHeight: '1.6',
  },
  'body': {
    color: '#333333',
  }
})

const typography = new Typography(noriegaTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
