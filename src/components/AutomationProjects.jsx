import React from "react";
import { automationProjects } from "../constants";
import { useNavigate } from "react-router-dom";

const toolColors = {
  n8n: "#dc7407",
  "Google Sheets": "#20c35b",
  Slack: "#4a154b",
  "REST API": "#2b7bb9",
  Webhooks: "#7a6ffb",
  Telegram: "#2597d8",
  IMAP: "#1083c8",
  Airtable: "#f26b3a",
};

const AutomationProjects = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full my-14 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center">Automation Projects (n8n Workflows)</h2>
      <p className="text-center text-gray-500 mb-8 text-base max-w-2xl mx-auto">
        Automation solutions and business workflows built with <span className="font-bold text-orange-600">n8n</span>, designed for effectiveness, reliability, and productivity.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
        {automationProjects.map((proj, idx) => (
          <div
            key={proj.id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col justify-between hover:shadow-lg transition group cursor-pointer"
            onClick={() => navigate(`/automation/${proj.id}`)}
            style={{ position: "relative" }}
          >
            {proj.image && (
              <img
                src={proj.image}
                alt={proj.name + ' workflow'}
                className="rounded-xl w-full h-36 object-cover mb-2 border border-gray-200 group-hover:scale-105 transition"
                style={{ background: "#f3f3f3" }}
              />
            )}
            <div>
              <h3 className="font-bold text-xl text-orange-600 mb-2 group-hover:underline">{proj.name}</h3>
              <div className="text-gray-700 mb-1 text-sm min-h-[64px]">{proj.description}</div>
              <div className="flex flex-wrap gap-1 my-2">
                {proj.tools.map((t) => (
                  <span key={t} className="rounded px-2 py-1 text-xs mr-1 font-semibold" style={{
                    background: toolColors[t] || '#f3f3f3',
                    color: '#222',
                  }}>{t}</span>
                ))}
              </div>
              <div className="text-xs text-gray-500 italic mb-2">Type: {proj.type}</div>
              <div className="text-sm text-lime-800">
                <b>Impact:</b> {proj.impact}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutomationProjects;
