interface Pet {
	name: string
	kind: PetKind
	breed: string
	status: PetStatus
	age: number
}

enum PetKind {
	Dog = 'Dog',
	Cat = 'Cat'
}

enum PetStatus {
	Alive = 'Alive',
	Deceased = 'Deceased'
}

export { Pet, PetKind, PetStatus }
