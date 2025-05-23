import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MARVEL_API_PUBLIC_KEY } from "../pubkey";
import { BASE_URL } from "../pubkey";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const [slug, setUrl] = useState<string>("");
	const [data, setData] = useState<object>({});
	const [error, setError] = useState<object>({});

	async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		try {
			const url = `${BASE_URL}${slug}?apikey=${MARVEL_API_PUBLIC_KEY}`;

			const res = await fetch(url);
			const data = await res.json();
			setData(data);
		} catch (error: unknown) {
			setError(error as object);
		}
	}

	return (
		<div>
			<p>
				<span>{`${BASE_URL}${slug}?apikey=${MARVEL_API_PUBLIC_KEY}`}</span>
			</p>

			<input name="url" value={slug} onChange={(e) => setUrl(e.target.value)} />
			<button type="button" onClick={handleSubmit}>
				send
			</button>
			<hr />
			<div>
				<p>data</p>
				<pre>{JSON.stringify(data)}</pre>
			</div>
			<div>
				<p>error</p>
				<pre>{JSON.stringify(error)}</pre>
			</div>
		</div>
	);
}
