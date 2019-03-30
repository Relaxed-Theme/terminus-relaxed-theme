import { NgModule, Injectable } from '@angular/core'
import { TerminalColorSchemeProvider } from 'terminus-terminal';
import { Theme } from 'terminus-core'

import { RelaxedColorScheme } from 'colorScheme';

@Injectable()
class RelaxedTheme extends Theme {
    name = 'Relaxed'
    css = require('./theme.scss')
    terminalBackground = '#343a43'
}

@NgModule({
    providers: [
        { provide: Theme, useClass: RelaxedTheme, multi: true },
        { provide: TerminalColorSchemeProvider, useClass: RelaxedColorScheme, multi: true },
    ],
})
export default class RelaxedThemeModule { }
