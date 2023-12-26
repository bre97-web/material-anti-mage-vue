import { defineComponent } from 'vue'
import { props, slots } from './Icon.type'
import { css } from 'aphrodite/no-important'
import { iconStyles } from './Icon.styles'

export const renderIcon = defineComponent({
    name: 'MAMVIcon',
    props,
    slots,
    computed: {
        classes() {
            return css(
                iconStyles[this.variant],
                iconStyles[this.size],
                iconStyles.root,
            )
        }
    },
    render() {
        return (
            <span aria-hidden class={this.classes}>
                { this.$slots.default && this.$slots.default() }
            </span>
        )
    }
})