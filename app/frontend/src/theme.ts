/* eslint-disable @typescript-eslint/no-empty-object-type */

import {
  createTheme, PaletteColorOptions, responsiveFontSizes, ThemeOptions,
} from "@mui/material";
// import { getMaterialYouScheme } from "../node_modules/mui-create-material-you-theme/src/lib/get-material-you-scheme";
// import {
//   getMaterialYouComponents,
// } from "../node_modules/mui-create-material-you-theme/src/lib/get-material-you-components";
// import { getMaterialYouPalette } from "../node_modules/mui-create-material-you-theme/src/lib/get-material-you-palette";

// import kkScheme from "./assets/kultikino-theme.json";

import { PaletteColor } from "@mui/material/styles";
import components from "./assets/components.json";
import palette from "./assets/palette.json";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
  interface ButtonPropsVariantOverrides {
    tonal: true;
    elevated: true;
  }
}

declare module "@mui/material/Fab" {
  interface FabPropsColorOverrides {
    tertiary: true;
  }
}

declare module "@mui/material/styles" {
  interface MaterialYouPalette {
    onPrimary: PaletteColor;
    primaryContainer: PaletteColor;
    onPrimaryContainer: PaletteColor;

    onSecondary: PaletteColor;
    secondaryContainer: PaletteColor;
    onSecondaryContainer: PaletteColor;

    tertiary: PaletteColor;
    onTertiary: PaletteColor;
    tertiaryContainer: PaletteColor;
    onTertiaryContainer: PaletteColor;

    onError: PaletteColor;
    errorContainer: PaletteColor;
    onErrorContainer: PaletteColor;

    onBackground: PaletteColor;

    surface: PaletteColor;
    onSurface: PaletteColor;

    surfaceVariant: PaletteColor;
    onSurfaceVariant: PaletteColor;

    outline: PaletteColor;
    outlineVariant: PaletteColor;

    shadow: PaletteColor;
    scrim: PaletteColor;

    inverseSurface: PaletteColor;
    inverseOnSurface: PaletteColor;
    inversePrimary: PaletteColor;

    primaryFixed: PaletteColor;
    onPrimaryFixed: PaletteColor;
    primaryFixedDim: PaletteColor;
    onPrimaryFixedVariant: PaletteColor;

    secondaryFixed: PaletteColor;
    onSecondaryFixed: PaletteColor;
    secondaryFixedDim: PaletteColor;
    onSecondaryFixedVariant: PaletteColor;

    tertiaryFixed: PaletteColor;
    onTertiaryFixed: PaletteColor;
    tertiaryFixedDim: PaletteColor;
    onTertiaryFixedVariant: PaletteColor;

    surfaceTint: PaletteColor;
    surfaceDim: PaletteColor;
    surfaceBright: PaletteColor;
    surfaceContainerLowest: PaletteColor;
    surfaceContainerLow: PaletteColor;
    surfaceContainer: PaletteColor;
    surfaceContainerHigh: PaletteColor;
    surfaceContainerHighest: PaletteColor;

    onInfo: PaletteColor;
    infoContainer: PaletteColor;
    onInfoContainer: PaletteColor;

    onSuccess: PaletteColor;
    successContainer: PaletteColor;
    onSuccessContainer: PaletteColor;

    onWarning: PaletteColor;
    warningContainer: PaletteColor;
    onWarningContainer: PaletteColor;
  }

  type MaterialYouPaletteOptions = Record<keyof MaterialYouPalette, PaletteColorOptions>;

  interface Palette extends MaterialYouPalette {}

  interface PaletteOptions extends MaterialYouPaletteOptions {}
}

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: "Inter",
  },
};

// const scheme = getMaterialYouScheme("dark", kkScheme.schemes.dark);
// const palette = getMaterialYouPalette("dark", scheme);
// const theme = createTheme({ ...themeOptions, palette });
// const components = getMaterialYouComponents(theme);
const themeWithComponents = createTheme({
  ...themeOptions,
  // @ts-expect-error we load styles from json generated with the commented sections above
  components,
  // @ts-expect-error same here, both need mui-create-material-you-theme installed to generate this
  palette,
});

const theme = responsiveFontSizes(themeWithComponents);

export default theme;
