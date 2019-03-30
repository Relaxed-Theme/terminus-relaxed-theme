import { Injectable } from '@angular/core';
import { TerminalColorSchemeProvider, ITerminalColorScheme } from 'terminus-terminal';

@Injectable()
export class RelaxedColorScheme extends TerminalColorSchemeProvider {
    async getSchemes (): Promise<ITerminalColorScheme[]> {
        let theme: ITerminalColorScheme[] = []

        theme.push({
            name: 'Relaxed',
            foreground: '#d8d8d8',
            background: '#343a43',
            cursor: '#d8d8d8',
            colors: [
                '#2c3037',
                '#bb5653',
                '#909d62',
                '#eac179',
                '#698698',
                '#b06597',
                '#c9dfff',
                '#d8d8d8',
                '#626262',
                '#c35956',
                '#9fab76',
                '#ecc179',
                '#7da9c7',
                '#ba6ca0',
                '#abbacf',
                '#f7f7f7',
            ]
        })
        return theme
    }
}
