export const formatDate = (stringDate: string) => {
	const date = new Date(stringDate)

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	}

	return new Intl.DateTimeFormat('en-US', options).format(date)
}
