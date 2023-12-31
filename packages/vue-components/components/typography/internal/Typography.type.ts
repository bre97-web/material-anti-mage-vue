import type { PropType, SlotsType } from 'vue'

export const props = {

    /**
     * @default body-medium
     */
    variant: {
        default: 'body-medium',
        type: String as PropType<
            'label-small' | 'label-medium' | 'label-large' |
            'body-small' | 'body-medium' | 'body-large' |
            'title-small' | 'title-medium' | 'title-large' |
            'headline-small' | 'headline-medium' | 'headline-large' |
            'display-small' | 'display-medium' | 'display-large'
        >,
    },

}

export const slots = Object as SlotsType<{
    default?: void
}>
