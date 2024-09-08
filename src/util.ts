export const calculateNumPages = (total: number, limit: number) => {
	return
}

export const generatePageNumbers = (
	totalItems: number,
	currentPage: number,
	limitPerPage: number = 10
) => {
	const numpages = Math.ceil(totalItems / limitPerPage)

	// if there is only 1 page, return an empty array
	if (totalItems <= limitPerPage) {
		return []
	}

	// generate links for all pages
	return Array.from({ length: numpages }, (_, i) => i + 1)
}
