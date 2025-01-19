
import { defaultSubThemes, defaultComponentThemes } from '@tamagui/themes/v3-themes'
import { createThemeBuilder } from '@tamagui/theme-builder'

const palettes = {
  
      "light": ['hsla(250, 50%, 48%, 1)','hsla(0, 20%, 99%, 0)','hsla(0, 20%, 99%, 0.25)','hsla(0, 20%, 99%, 0.5)','hsla(0, 20%, 99%, 0.75)','hsla(0, 15%, 99%, 1)','hsla(0, 15%, 94%, 1)','hsla(0, 15%, 88%, 1)','hsla(0, 15%, 83%, 1)','hsla(0, 15%, 77%, 1)','hsla(0, 15%, 72%, 1)','hsla(0, 15%, 66%, 1)','hsla(0, 15%, 61%, 1)','hsla(0, 15%, 55%, 1)','hsla(0, 15%, 50%, 1)','hsla(0, 15%, 15%, 1)','hsla(0, 15%, 1%, 1)','hsla(0, 20%, 1%, 0.75)','hsla(0, 20%, 1%, 0.5)','hsla(0, 20%, 1%, 0.25)','hsla(0, 20%, 1%, 0)','hsla(250, 50%, 62%, 1)']
    ,
      "dark": ['hsla(250, 50%, 57%, 1)','hsla(0, 20%, 1%, 0)','hsla(0, 20%, 1%, 0.25)','hsla(0, 20%, 1%, 0.5)','hsla(0, 20%, 1%, 0.75)','hsla(0, 15%, 1%, 1)','hsla(0, 15%, 6%, 1)','hsla(0, 15%, 12%, 1)','hsla(0, 15%, 17%, 1)','hsla(0, 15%, 23%, 1)','hsla(0, 15%, 28%, 1)','hsla(0, 15%, 34%, 1)','hsla(0, 15%, 39%, 1)','hsla(0, 15%, 45%, 1)','hsla(0, 15%, 50%, 1)','hsla(0, 15%, 93%, 1)','hsla(0, 15%, 99%, 1)','hsla(0, 20%, 99%, 0.75)','hsla(0, 20%, 99%, 0.5)','hsla(0, 20%, 99%, 0.25)','hsla(0, 20%, 99%, 0)','hsla(250, 50%, 43%, 1)']
    ,
      "light_accent": ['hsla(0, 15%, 83%, 1)','hsla(250, 50%, 40%, 0)','hsla(250, 50%, 40%, 0.25)','hsla(250, 50%, 40%, 0.5)','hsla(250, 50%, 40%, 0.75)','hsla(250, 50%, 40%, 1)','hsla(250, 50%, 43%, 1)','hsla(250, 50%, 46%, 1)','hsla(250, 50%, 48%, 1)','hsla(250, 50%, 51%, 1)','hsla(250, 50%, 54%, 1)','hsla(250, 50%, 57%, 1)','hsla(250, 50%, 59%, 1)','hsla(250, 50%, 62%, 1)','hsla(250, 50%, 65%, 1)','hsla(250, 50%, 95%, 1)','hsla(250, 50%, 95%, 1)','hsla(249, 52%, 95%, 0.75)','hsla(249, 52%, 95%, 0.5)','hsla(249, 52%, 95%, 0.25)','hsla(249, 52%, 95%, 0)','hsla(0, 15%, 55%, 1)']
    ,
      "dark_accent": ['hsla(0, 15%, 45%, 1)','hsla(250, 50%, 35%, 0)','hsla(250, 50%, 35%, 0.25)','hsla(250, 50%, 35%, 0.5)','hsla(250, 50%, 35%, 0.75)','hsla(250, 50%, 35%, 1)','hsla(250, 50%, 38%, 1)','hsla(250, 50%, 41%, 1)','hsla(250, 50%, 43%, 1)','hsla(250, 50%, 46%, 1)','hsla(250, 50%, 49%, 1)','hsla(250, 50%, 52%, 1)','hsla(250, 50%, 54%, 1)','hsla(250, 50%, 57%, 1)','hsla(250, 50%, 60%, 1)','hsla(250, 50%, 90%, 1)','hsla(250, 50%, 95%, 1)','hsla(249, 52%, 95%, 0.75)','hsla(249, 52%, 95%, 0.5)','hsla(249, 52%, 95%, 0.25)','hsla(249, 52%, 95%, 0)','hsla(0, 15%, 17%, 1)']
    
}
const templates = {
  
      "light_base": {"accentBackground":0,"accentColor":0,"shadowColor":"rgba(0,0,0,0.085)","shadowColorHover":"rgba(0,0,0,0.085)","shadowColorPress":"rgba(0,0,0,0.04)","shadowColorFocus":"rgba(0,0,0,0.04)","background0":1,"background025":2,"background05":3,"background075":4,"color1":5,"color2":6,"color3":7,"color4":8,"color5":9,"color6":10,"color7":11,"color8":12,"color9":13,"color10":14,"color11":15,"color12":16,"color0":-1,"color025":-2,"color05":-3,"color075":-4,"background":5,"backgroundHover":4,"backgroundPress":6,"backgroundFocus":6,"borderColor":8,"borderColorHover":7,"borderColorPress":9,"borderColorFocus":8,"color":-5,"colorHover":-6,"colorPress":-5,"colorFocus":-6,"colorTransparent":-1,"placeholderColor":-8,"outlineColor":-2}
    ,
      "light_surface1": {"background":6,"backgroundHover":5,"backgroundPress":7,"backgroundFocus":7,"borderColor":9,"borderColorHover":8,"borderColorFocus":9,"borderColorPress":10}
    ,
      "light_surface2": {"background":7,"backgroundHover":6,"backgroundPress":8,"backgroundFocus":8,"borderColor":10,"borderColorHover":9,"borderColorFocus":10,"borderColorPress":11}
    ,
      "light_surface3": {"background":8,"backgroundHover":7,"backgroundPress":9,"backgroundFocus":9,"borderColor":11,"borderColorHover":10,"borderColorFocus":11,"borderColorPress":12}
    ,
      "light_alt1": {"color":-6,"colorHover":-7,"colorPress":-6,"colorFocus":-7}
    ,
      "light_alt2": {"color":-7,"colorHover":-8,"colorPress":-7,"colorFocus":-8}
    ,
      "light_inverse": {"accentBackground":0,"accentColor":0,"shadowColor":null,"shadowColorHover":null,"shadowColorPress":null,"shadowColorFocus":null,"background0":-1,"background025":-2,"background05":-3,"background075":-4,"color1":-5,"color2":-6,"color3":-7,"color4":-8,"color5":-9,"color6":-10,"color7":-11,"color8":-12,"color9":-13,"color10":-14,"color11":-15,"color12":-16,"color0":1,"color025":2,"color05":3,"color075":4,"background":-5,"backgroundHover":-4,"backgroundPress":-6,"backgroundFocus":-6,"borderColor":-8,"borderColorHover":-7,"borderColorPress":-9,"borderColorFocus":-8,"color":5,"colorHover":6,"colorPress":5,"colorFocus":6,"colorTransparent":1,"placeholderColor":8,"outlineColor":2}
    ,
      "dark_base": {"accentBackground":0,"accentColor":0,"shadowColor":"rgba(0,0,0,0.3)","shadowColorHover":"rgba(0,0,0,0.3)","shadowColorPress":"rgba(0,0,0,0.2)","shadowColorFocus":"rgba(0,0,0,0.2)","background0":1,"background025":2,"background05":3,"background075":4,"color1":5,"color2":6,"color3":7,"color4":8,"color5":9,"color6":10,"color7":11,"color8":12,"color9":13,"color10":14,"color11":15,"color12":16,"color0":-1,"color025":-2,"color05":-3,"color075":-4,"background":5,"backgroundHover":6,"backgroundPress":4,"backgroundFocus":4,"borderColor":8,"borderColorHover":9,"borderColorPress":7,"borderColorFocus":8,"color":-5,"colorHover":-6,"colorPress":-5,"colorFocus":-6,"colorTransparent":-1,"placeholderColor":-8,"outlineColor":-2}
    ,
      "dark_surface1": {"background":6,"backgroundHover":7,"backgroundPress":5,"backgroundFocus":5,"borderColor":9,"borderColorHover":10,"borderColorFocus":9,"borderColorPress":8}
    ,
      "dark_surface2": {"background":7,"backgroundHover":8,"backgroundPress":6,"backgroundFocus":6,"borderColor":10,"borderColorHover":11,"borderColorFocus":10,"borderColorPress":9}
    ,
      "dark_surface3": {"background":8,"backgroundHover":9,"backgroundPress":7,"backgroundFocus":7,"borderColor":11,"borderColorHover":12,"borderColorFocus":11,"borderColorPress":10}
    ,
      "dark_alt1": {"color":-6,"colorHover":-7,"colorPress":-6,"colorFocus":-7}
    ,
      "dark_alt2": {"color":-7,"colorHover":-8,"colorPress":-7,"colorFocus":-8}
    ,
      "dark_inverse": {"accentBackground":0,"accentColor":0,"shadowColor":null,"shadowColorHover":null,"shadowColorPress":null,"shadowColorFocus":null,"background0":-1,"background025":-2,"background05":-3,"background075":-4,"color1":-5,"color2":-6,"color3":-7,"color4":-8,"color5":-9,"color6":-10,"color7":-11,"color8":-12,"color9":-13,"color10":-14,"color11":-15,"color12":-16,"color0":1,"color025":2,"color05":3,"color075":4,"background":-5,"backgroundHover":-6,"backgroundPress":-4,"backgroundFocus":-4,"borderColor":-8,"borderColorHover":-9,"borderColorPress":-7,"borderColorFocus":-8,"color":5,"colorHover":6,"colorPress":5,"colorFocus":6,"colorTransparent":1,"placeholderColor":8,"outlineColor":2}
    
}

export const themes = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
    },
    dark: {
      template: 'base',
      palette: 'dark',
    },
  })
  .addChildThemes(
    palettes.light_accent
      ? {
          accent: [
            {
              parent: 'light',
              template: 'base',
              palette: 'light_accent',
            },
            {
              parent: 'dark',
              template: 'base',
              palette: 'dark_accent',
            },
          ],
        }
      : {}
  )
  .addChildThemes(defaultSubThemes)
  .addComponentThemes(defaultComponentThemes, {
    avoidNestingWithin: [
      'alt1',
      'alt2',
      'surface1',
      'surface2',
      'surface3',
      'surface4',
      'active',
    ],
  })

  .build()
