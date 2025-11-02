import React, { useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { automationProjects } from "../constants";

const toolColors = {
  n8n: "#dc7407",
  "Google Sheets": "#20c35b",
  Slack: "#4a154b",
  "REST API": "#2b7bb9",
  Webhooks: "#7a6ffb",
  Telegram: "#2597d8",
  IMAP: "#1083c8",
  Airtable: "#f26b3a",
  "Shopify API": "#96bf48",
  "WooCommerce API": "#96588a",
  PostgreSQL: "#336791",
  "Instagram API": "#e4405f",
  "Facebook Graph API": "#1877f2",
  Cron: "#f9d71c",
  "Zendesk API": "#03363d",
  "OpenAI API": "#10a37f",
  "AWS S3": "#ff9900",
  "Google Drive API": "#4285f4",
  Email: "#ea4335",
  SMS: "#34c759",
  "ShipStation API": "#00a8e8",
};

const typeBadgeColors = {
  "SME Client": "bg-green-100 text-green-800 border-green-400",
  "Internal Project": "bg-blue-100 text-blue-800 border-blue-400",
  "Real Client Project": "bg-orange-100 text-orange-800 border-orange-300",
}

export default function AutomationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const proj = automationProjects.find((x) => x.id === id);
  const [copySuccess, setCopySuccess] = useState("");
  const codeRef = useRef(null);
  if (!proj) {
    return (
      <div className="flex flex-col items-center py-24">
        <h2 className="text-2xl font-bold mb-4">Workflow not found</h2>
        <button className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-2 rounded shadow mt-2 font-semibold" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    );
  }

  const handleCopy = () => {
    if (!proj.codeSnippet) return;
    navigator.clipboard.writeText(proj.codeSnippet);
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 1600);
  };

  const getVideoEmbedUrl = (url) => {
    if (!url) return "";
    // Convert YouTube watch link to embed format
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // Already embed format or other video platforms
    return url;
  };

  return (
    <div className="min-h-screen bg-[#f6f8fa] py-6 px-2 max-w-3xl mx-auto">
      <button className="mb-6 mt-2 bg-orange-500 text-white rounded px-4 py-2 shadow hover:bg-orange-400 font-semibold" onClick={() => navigate(-1)}>
        ← Back to automations
      </button>
      <h1 className="text-3xl font-bold mb-3 text-orange-700">{proj.name}</h1>
      <div className={`inline-block px-3 py-1 text-xs font-bold rounded border mr-2 mb-2 ${typeBadgeColors[proj.type] || "bg-gray-100 text-gray-600 border-gray-300"}`}>{proj.type}</div>
      <div className="mb-5 text-xs text-gray-600">ID: <span className="font-mono">{proj.id}</span></div>
      {proj.image && (
        <img src={proj.image} alt={proj.name + ' diagram'} className="rounded-xl w-full mb-4 border border-gray-200" style={{ background: '#f3f3f3', maxHeight: 260, objectFit: 'contain' }} />
      )}
      {proj.video && (
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-800">Demo Video:</label>
          <div className="aspect-w-16 aspect-h-9 w-full max-w-2xl mx-auto mb-2" style={{maxWidth: 740, minHeight: 220}}>
            <iframe src={getVideoEmbedUrl(proj.video)} title={proj.name + ' video'} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen className="rounded-lg shadow w-full h-64"></iframe>
          </div>
        </div>
      )}
      {proj.docsLink && (
        <a href={proj.docsLink} target="_blank" rel="noopener noreferrer" className="block mb-3 font-semibold text-blue-700 hover:underline">
          📄 View Documentation
        </a>
      )}
      <div className="mb-4">
        <div className="text-md text-gray-800 font-semibold mb-1">Short Description:</div>
        <div className="ml-2 text-gray-700">{proj.description}</div>
      </div>
      <div className="mb-4">
        <div className="text-md text-gray-800 font-semibold mb-1">Details & Purpose:</div>
        <div className="ml-2 text-gray-700">{proj.longDescription}</div>
      </div>
      <div className="mb-3 flex flex-wrap gap-2">
        {proj.tools.map((t) => (
          <span key={t} className="rounded px-2 py-1 text-xs font-semibold" style={{
            background: toolColors[t] || '#f3f3f3',
            color: '#222',
          }}>{t}</span>
        ))}
      </div>
      <div className="mb-3">
        <b className="text-lime-800">Impact:</b> <span className="text-gray-800">{proj.impact}</span>
      </div>
      {proj.codeSnippet && (
        <div className="mb-6">
          <div className="font-bold mb-1 text-sky-900 flex items-center gap-2">
            <span>Setup Example / Snippet:</span>
            <button className="text-xs bg-gray-300 rounded px-2 py-1 ml-2 hover:bg-gray-400" onClick={handleCopy}>{copySuccess ? copySuccess : "Copy"}</button>
          </div>
          <pre className="bg-gray-900 text-xs text-yellow-100 rounded p-3 overflow-x-auto border border-yellow-200" ref={codeRef}>{proj.codeSnippet}</pre>
        </div>
      )}
      {proj.howToSetup && proj.howToSetup.length > 0 && (
        <div className="mb-6">
          <div className="font-bold mb-1 text-sky-900">How to Set Up:</div>
          <ol className="list-decimal ml-7 text-gray-700">
            {proj.howToSetup.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
