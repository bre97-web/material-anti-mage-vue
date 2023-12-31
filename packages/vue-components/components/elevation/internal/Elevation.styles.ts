import { makeVar, makeVarWithDefault, tokens } from '../../../utils/tokens'
import { elevationTokens, elevationTokensExtern } from './Elevation.tokens'
import { StyleSheet } from 'aphrodite/no-important'

const elevationLevel = makeVar(elevationTokensExtern.level, elevationTokens.level)

export const sharedElevationStyles = StyleSheet.create({
    surface: {
        borderRadius: 'inherit',
        inset: 0,
        position: 'absolute',
        'transition-duration': 'inherit',
        'transition-property': 'inherit',
        'transition-timing-function': 'inherit',
        [elevationTokens.level]: '0',
        '::after': {
            content: '""',
            borderRadius: 'inherit',
            inset: 0,
            position: 'absolute',
            'transition-duration': 'inherit',
            'transition-timing-function': 'inherit',
            'transition-property': 'box-shadow, opacity',
            opacity: 0.15,
            '--l1-y': `clamp(0, ${elevationLevel}    , 1)`,
            '--l2-y': `clamp(0, ${elevationLevel} - 1, 1)`,
            '--l3to5-y': `calc(2   * clamp(0, ${elevationLevel} - 2, 3))`,
            '--y': 'calc(1px * (var(--l1-y) + var(--l2-y) + var(--l3to5-y)))',

            '--l1to2-blur': `calc(3   * clamp(0, ${elevationLevel}    , 2))`,
            '--l3to5-blur': `calc(2   * clamp(0, ${elevationLevel} - 2, 3))`,
            '--blur': 'calc(1px * (var(--l1to2-blur) + var(--l3to5-blur)))',

            '--l1to4-spread': `clamp(0, ${elevationLevel}    , 4)`,
            '--l5-spread': `calc(2   * clamp(0, ${elevationLevel} - 4, 1))`,
            '--spread': 'calc(1px * (var(--l1to4-spread) + var(--l5-spread)))',

            boxShadow: `0px var(--y) var(--blur) var(--spread) ${makeVarWithDefault([elevationTokensExtern.color, elevationTokens.color], tokens.color.shadow.shadow)}`,
        },

        '::before': {
            content: '""',
            inset: 0,
            borderRadius: 'inherit',
            position: 'absolute',
            'transition-duration': 'inherit',
            'transition-timing-function': 'inherit',
            'transition-property': 'box-shadow, opacity',
            opacity: 0.3,
            '--l1-y': `clamp(0, ${elevationLevel}    , 1)`,
            '--l4-y': `clamp(0, ${elevationLevel} - 3, 1)`,
            '--l5-y': `calc(2   * clamp(0, ${elevationLevel} - 4, 1))`,
            '--y': 'calc(1px * (var(--l1-y) + var(--l4-y) + var(--l5-y)))',

            '--l1-blur': `calc(2 * clamp(0, ${elevationLevel}    , 1))`,
            '--l3-blur': `clamp(0, ${elevationLevel} - 2, 1)`,
            '--l5-blur': `clamp(0, ${elevationLevel} - 4, 1)`,
            '--blur': 'calc(1px * (var(--l1-blur) + var(--l3-blur) + var(--l5-blur)))',

            boxShadow: `0px var(--y) var(--blur) 0px ${makeVarWithDefault([elevationTokensExtern.color, elevationTokens.color], tokens.color.shadow.shadow)}`,
        }
    },
})
