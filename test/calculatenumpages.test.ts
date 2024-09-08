import { expect, test } from 'vitest'

import { calculateNumPages } from '../src/util'

test('calculateNumPages', () => {
	expect(calculateNumPages(0, 10)).toBe(0)
	expect(calculateNumPages(1, 10)).toBe(1)
	expect(calculateNumPages(10, 10)).toBe(1)
	expect(calculateNumPages(11, 10)).toBe(2)
})
