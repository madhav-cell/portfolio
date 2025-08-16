import React, { useEffect, useState } from "react";

export default function GitHubActivity({ username = "madhav-cell" }) {
  const [repos, setRepos] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function run() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!res.ok) throw new Error("GitHub API rate-limited or username invalid");
        const data = await res.json();
        setRepos(data);
      } catch (e) {
        setErr(e.message);
      }
    }
    run();
  }, [username]);

  if (err) return <p className="text-sm text-gray-400">GitHub: {err}</p>;

  return (
    <section className="py-12" id="github">
      <h2 className="text-3xl font-bold text-green-400 mb-4">GitHub Activity</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {repos.map(r => (
          <a key={r.id} href={r.html_url} target="_blank" rel="noreferrer"
             className="block bg-white/5 border border-white/10 rounded p-4 hover:bg-white/10">
            <h3 className="text-lg font-semibold">{r.name}</h3>
            <p className="text-gray-300 mt-2 line-clamp-2">{r.description || "No description"}</p>
            <div className="text-sm text-gray-400 mt-2">
              <span>★ {r.stargazers_count}</span>
              <span className="ml-3">Updated: {new Date(r.updated_at).toLocaleDateString()}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
