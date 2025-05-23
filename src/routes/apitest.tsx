import { useState } from "react";

export const ApiTestPage = () => {
	const [url, setUrl] = useState<string>();
	const [data, setData] = useState<object>({});

	async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		const base = "";
		const key = import.meta.env.VITE_MARVEL_API_KEY;

		const res = await fetch(`${base + url}?apikey=${key}`);
		const data = await res.json();

		setData(data);
	}

	return (
		<div>
			{url && <p>{url}</p>}

			<input name="url" value={url} onChange={(e) => setUrl(e.target.value)} />
			<button type="button" onClick={handleSubmit}>
				send
			</button>
		</div>
	);
};
