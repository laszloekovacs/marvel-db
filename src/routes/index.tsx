import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MARVEL_API_PUBLIC_KEY } from "../pubkey";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const [url, setUrl] = useState<string>("");
	const [data, setData] = useState<object>({});
	const [error, setError] = useState<object>({});
	const base = "http://gateway.marvel.com/v1/public/";
	const key = `?apikey=${MARVEL_API_PUBLIC_KEY}`;

	async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		try {
			const res = await fetch(`${base + url}?apikey=${key}`);
			const data = await res.json();
			setData(data);
		} catch (error: unknown) {
			setError(error as object);
		}
	}

	return (
		<div>
			<p>
				<span>{base}</span>
				<span>{url ? <span>{url}</span> : <span>_</span>}</span>
				<span>{key}</span>
			</p>

			<input name="url" value={url} onChange={(e) => setUrl(e.target.value)} />
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
