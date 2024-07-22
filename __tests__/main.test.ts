import { describe, it } from 'node:test'
import { strictEqual } from 'node:assert'

import { getPetByKind, myPets } from '../src/main'
import { PetKind } from '../src/types'

describe('Pets Functions', () => {
	describe('When providing', () => {
		describe('dog kind', () => {
			it('should return array of length 2', async () => {
				strictEqual(getPetByKind(PetKind.Dog, myPets).length, 2)
			})
		})
		describe('cat kind', () => {
			it('should return array of length 1', async () => {
				strictEqual(getPetByKind(PetKind.Cat, myPets).length, 1)
			})
		})
	})
})
