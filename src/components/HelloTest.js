import React from "react"
import { describe } from 'riteway'
import render from 'riteway/render-component'
import match from 'riteway/match'

import Hello from './Hello'

describe('Hello component', async assert => {
    const userName = 'Spiderman'
    const $ = render(<Hello userName={userName} />)
    const contains = match($('.gretting').html())

    assert({
        given: 'a username',
        should: 'Render a greeting to the correct username.',
        actual: contains(userName),
        expected: `Hello, ${userName}`
    })
})