import { selectors } from '../commonScreenerSteps';

const config: ScreenerTestsConfig = {
  themes: ['teams', 'teamsDark', 'teamsHighContrast'],
  steps: [
    builder =>
      builder
        .hover(selectors.item(4))
        .snapshot('Hovers 4th item (hover state styles)')
        .click(selectors.item(4))
        .snapshot('Clicks on 4th item (opens submenu)')
  ]
};

export default config;