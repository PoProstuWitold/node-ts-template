import { getPetByKind, myPets } from '../src/main'
import { PetKind } from '../src/types'

describe('Pets Functions', () => {
	describe('When providing', () => {
		describe('dog kind', () => {
			it('should return array of length 2', async () => {
				expect(getPetByKind(PetKind.Dog, myPets)).toHaveLength(2)
			})
		})
		describe('cat kind', () => {
			it('should return array of length 1', async () => {
				expect(getPetByKind(PetKind.Cat, myPets)).toHaveLength(1)
			})
		})
	})
})
