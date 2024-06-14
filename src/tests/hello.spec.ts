import { renderSuspended } from '@nuxt/test-utils/runtime'
import { Hello } from '#components'
import { screen } from '@testing-library/vue'
import { expect, it } from 'vitest'

it('example nuxt test', async () => {
    await renderSuspended(Hello)
    expect(screen.getByText('Selam')).toBeDefined()
})