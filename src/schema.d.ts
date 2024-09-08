declare type CharactersSchema = {
	code: number
	status: string
	data: {
		offset: number
		limit: number
		total: number
		count: number
		results: [
			{
				id: number
				name: string
				description: string
				thumbnail: {
					path: string
					extension: string
				}
			}
		]
	}
}
