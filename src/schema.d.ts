declare type charactersSchema = {
	code: string
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
				thumbnail: {
					path: string
					extension: string
				}
				resourceURI: string
			}
		]
	}
}
